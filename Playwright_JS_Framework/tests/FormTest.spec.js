const {test, expect} = require("@playwright/test");


test('Test Froms', async({page})=>{

    //Open the application URL
    await page.goto("https://demoqa.com/login");
    await expect(page).toHaveTitle('ToolsQA');
    //Enter username and password and click on Login button
    await page.locator('input#userName').type("imran");
    await page.locator('input#password').type("Qwerty@123");
    await page.locator('button#login').click();
    
    //click on Forms
    //await page.getByText('Forms').click();

    
    const form= page.locator('div.header-text').filter({ hasText: 'Forms' });
    await form.click();

    await page.locator('span.text').filter({ hasText: 'Practice Form' }).click();
    page.pause();
    await new Promise(() => {})

    

});