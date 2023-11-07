const {test, expect} = require("@playwright/test");
//const {LoginPage} = require('../Pageobject/LoginPage');


test('End to end scenario testing', async({page})=>{

    // const userName= 'standard_user';
    // const userPassword= 'secret_sauce';
    const searchProductName= "Sauce Labs Fleece Jacket";
    const username = "anshika@gmail.com";
    const password = "Iamking@000"
    
    //loginPage.navigateToLoginURL();
    //await page.goto("https://www.saucedemo.com/");
    const loginPage = new LoginPage(page);
    loginPage.goTo();
    //await page.waitForNavigation();
   

    //Logoin into application
    
    loginPage.validLogin(username, password);
    // await page.locator('input#user-name').type("standard_user");
    // await page.locator('input#password').type("secret_sauce");
    // await page.locator('input#login-button').click();


    // console.log("Total Product=> " + await page.locator("div.inventory_item_description").count());
    // const products = await page.locator("div.inventory_item_description");
    // const totalProduct = await page.locator("div.inventory_item_description").count();
    // console.log("Product=>"+ totalProduct);

    // for(let i=0; i<totalProduct; i++){
    //     console.log("Product Name" + await products.nth(i).locator("div.inventory_item_name").textContent());
    //     const productName= await products.nth(i).locator("div.inventory_item_name").textContent();
    //     if(productName ==searchProductName){
    //         console.log("Yes I got searched..." + productName);

    //         await products.nth(i).locator("div.pricebar>button").click();
    //         break;

    //     }
    // }
    // // Click on cart icon at top of the page
    // await page.locator("a.shopping_cart_link").click();
    // //Wait for the cart list at cart page
    // await page.locator("div.cart_list").waitFor();
    
    // //Verify that same product added on the cart page
    // const bool = await page.locator("div.cart_item div a div:has-text('Sauce Labs Fleece Jacket')");
    // console.log("Is displayed=> " + await bool.isVisible());
    // expect(await bool.isVisible()).toBeTruthy();

    // //click on checkout button 
    // await page.locator("button#checkout").click();

    // // Enter customer information
    
    // await page.locator("div.checkout_info").waitFor();
    // await page.locator("input#first-name").fill("Imran");
    // await page.locator("input#last-name").fill("Sheikh");
    // await page.locator("input#postal-code").fill("L1S 3Y1");

    // //click on continue button
    // page.locator("input#continue").click();

    // // Verify the same product at checkout overview page
    // expect(await page.locator("div.cart_item_label a div:has-text('Sauce Labs Fleece Jacket')")).toBeTruthy();

    // //Click on Finish button at checkout overview page
    // await page.locator("button#finish").click();

    // const ThanksOrderLocator= await page.locator("h2.complete-header");
    // expect(ThanksOrderLocator).toContainText('THANK YOU FOR YOUR ORDER');

    
    
    
    
    // await page.pause();
    
});




// test('End to end scenario testing', async({page})=>{


//     await page.goto("https://www.google.com/");
//     page.locator("input[title='Search']").fill("https://rahulshettyacademy.com/client/auth/login")

//     page.locator("div center input[aria-label='Google Search']").nth(1).click()
//     page.locator("//a//h3").first().click();

//     //Open the application URL
//     //await page.goto("https://rahulshettyacademy.com/client/auth/login");

//     //Logoin into application
//     await page.locator('input#userEmail').type("imran.pbh@gmail.com");
//     await page.locator('input#userPassword').type("Qwerty@123");
//     await page.locator('input#login').click();
//     console.log("Login=> " + await page.locator('input#login').count());
    

//     console.log("Product count=> " + await page.locator("//section[@id='products']/div/div/following-sibling::div/div").count());
//     const productBody = await page.locator(".card-body");
//     const count = await productBody.count()
//     console.log("Total Product: " +count)
      
    
//     await page.pause();
    
// //});