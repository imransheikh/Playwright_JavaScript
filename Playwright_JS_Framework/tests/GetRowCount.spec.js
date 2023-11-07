const {test, expect} = require("@playwright/test");

test('Get row count Test', async({page})=>{


    await page.goto("https://demoqa.com/webtables");
    console.log("Total Row=> " + await page.locator("div.rt-table div.rt-tbody>div>div").count());
    
    await page.pause();
    

    

});