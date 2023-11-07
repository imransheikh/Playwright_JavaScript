const {test, expect} = require("@playwright/test");
//const {expect} = require('../playwright.config');


// test('Browser context way to initialize the page test', async({browser})=>{

//     const browserContext = await browser.newContext();
//     const page = await browserContext.newPage();
//     page.goto("https://rahulshettyacademy.com/loginpagePractise/");


// });


test('Page only we can use to navigate the url test', async({page})=>{

    // const browserContext = await browser.newContext();
    // const page = await browserContext.newPage();
    await page.goto("https://demoqa.com/login");
    console.log("My Page title=> " + await page.title());
    //await page.title();
    //await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await expect(page).toHaveTitle('ToolsQA');
    await page.locator('input#userName').type("imran");
    await page.locator('input#password').type("Qwerty@123");
    await page.locator('button#login').click();
    console.log("Logout Displayed ? " + await page.locator('div#books-wrapper button#submit').isVisible());
    await expect(page.locator('div#books-wrapper button#submit')).toBeVisible();
    console.log("Text of logout=> " + await page.locator('div#books-wrapper button#submit').textContent());
    // How to get first and nth locator if there are multiple elememt with same
    console.log("First element=> " + await page.locator('button#submit').first().textContent());
    console.log("nth element=> " + await page.locator('button#submit').nth(2).textContent());
    
    console.log("nth element=> " + await page.locator('button#submit').nth(2).allTextContents());

    //It will wait until all the API is executed and loaded. So all the content on that page loaded on the page and attached to DOM
    await page.waitForLoadState('networkidle');
    const allText = await page.locator('button#submit').allTextContents()
    console.log(allText)


});