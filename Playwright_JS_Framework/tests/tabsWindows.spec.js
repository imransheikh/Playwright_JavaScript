const {test, expect} = require("@playwright/test");


test('Test new window functionality...', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    //Open the application URL
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator('//a[contains(@href,"linkedin")]').click(),

    ])

    const linkedInFormTitle= await newPage.locator('h1.authwall-join-form__title').textContent();
    console.log("Form Tittle=> " + linkedInFormTitle);
    newPage.close();


    await page.locator('//a[contains(@href,"facebook")]').click(),

   
    // These below code is used for pausing the page
    await page.pause();
    //await new Promise(() => {})

    

});