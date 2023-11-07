const {test, expect} = require("@playwright/test");


test('Test DropDown functionality...', async({page})=>{

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");


        // How to handle javascript popup
        page.on('dialog', dialog=> dialog.accept());
        await page.locator('input#confirmbtn').click();


        // How to handle mouse hover and the perform the click operation
        await page.locator('button#mousehover').hover();
        await page.locator('div.mouse-hover-content a').first().click();
       

       // await page.locator("input#show-textbox").click();

        await page.pause();

});

