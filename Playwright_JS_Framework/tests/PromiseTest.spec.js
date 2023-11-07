const {test, expect} = require("@playwright/test");
//const {expect} = require('../playwright.config');


test('Test how to resolve the promise', async({page})=>{

    await page.goto("https://demoqa.com/login");
    await expect(page).toHaveTitle('ToolsQA');
    await page.locator('input#userName').type("imran");
    await page.locator('input#password').type("Qwerty@123");

    // This explicit wait works for only server based ( NOT API Based)...
    await Promise.all(
            [
                page.waitForNavigation(),
                await page.locator('button#login').click(),
            ]
    );

    //await page.locator('button#login').click();

    //await page.waitForLoadState('networkidle');
    const allText = await page.locator('button#submit').allTextContents()
    console.log(allText)


});