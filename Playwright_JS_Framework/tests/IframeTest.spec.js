const {test, expect} = require("@playwright/test");


test('Test DropDown functionality...', async({page})=>{

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

        const framePage= page.frameLocator('iframe#courses-iframe')
        const loginText= await framePage.locator('a.register-btn').textContent();
        //const loginText= await page.locator('a.register-btn').textContent();
        console.log("Login test insdie the frame: " +loginText );

        // How to handle frames in application
        await page.pause();

});

