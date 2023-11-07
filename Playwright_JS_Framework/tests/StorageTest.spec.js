const {test, expect} = require("@playwright/test");


let webContext;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    //Open the application URL
    await page.goto("https://demoqa.com/login");
    await expect(page).toHaveTitle('ToolsQA');
    //Enter username and password and click on Login button
    await page.locator('input#userName').type("imran");
    await page.locator('input#password').type("Qwerty@123");
    await page.locator('button#login').click();
     
    //Verify that logout button is displayed after login into the application
    const logoutButtonText = await page.locator("button#submit:has-text('Log out')");
    
    //await logoutButtonText.isVisible().toBeTruthy();
    await expect(logoutButtonText).toBeVisible();
    await expect(await logoutButtonText.isVisible()).toBeTruthy();
    console.log("Is displayed=> " + await logoutButtonText.isVisible());

    await context.storageState({path: 'state.json'});

    webContext = await browser.newContext({storageState: 'state.json'});

    
 });


test('Login Test Scenarios', async()=>{

    const page=  await webContext.newPage();
    await page.goto("https://demoqa.com/profile");
    await expect(page).toHaveTitle('ToolsQA');

     //Verify that logout button is displayed after login into the application
     const logoutButtonText = await page.locator("button#submit:has-text('Log out')");
   
    //await logoutButtonText.isVisible().toBeTruthy();
    await expect(logoutButtonText).toBeVisible();
    await expect(await logoutButtonText.isVisible()).toBeTruthy();
    console.log("Is displayed=> " + await logoutButtonText.isVisible());

    
});