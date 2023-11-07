const {test, expect} = require("@playwright/test");


test('Test DropDown functionality...', async({page})=>{

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

        await expect(page.locator("input#displayed-text")).toBeVisible();
        await page.locator("input#hide-textbox").click();
        await expect(page.locator("input#displayed-text")).toBeHidden();

       

       // await page.locator("input#show-textbox").click();

        await page.pause();

});

