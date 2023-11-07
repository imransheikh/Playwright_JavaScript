const {test, expect} = require("@playwright/test");
const{PageManager}= require('../PageObject/PageManager')
const placeOrderData=JSON.parse(JSON.stringify(require('../utils/placeOrderTestData.json')));

test('End to end scenario testing', async({page})=>{

    //Variables
    const searchProductName= "Sauce Labs Fleece Jacket";
    const userName= "standard_user";
    const userPassword= "secret_sauce";
    const userFirstName= 'Imran';
    const userLastName = 'Sheikh';
    const postalCode= 'L1S 3Y1';

    const pageManager = new PageManager(page);
    const loginPageObj = pageManager.getLoginPage();
    const dashboardPageObj = pageManager.getDashboardPage();
    const cartPage= pageManager.getCartPage();
    const checkoutPage = pageManager.getCheckoutPage();

    // const loginPageObj = new LoginPage(page);
    // const dashboardPageObj = new DashboardPage(page);
    // const cartPage= new CartPage(page);
    // const checkoutPage = new CheckoutPage(page);

    // Navigate to the application
    await loginPageObj.goTo();

    //Logoin into application
    console.log("My data is=> " + placeOrderData.userName);
   
    await loginPageObj.validLogin(userName, userPassword);

    //Search the product and add into the cart
    await dashboardPageObj.selectTheProduct(placeOrderData.searchProductName);
    //Click on cart icon and move to cart page
    await dashboardPageObj.clickOnCartIcon();
   
    const productName= 'Sauce Labs Fleece Jacket';
    //Verify that same product is added on the cart page
    await cartPage.verifySameProductAdded(placeOrderData.searchProductName);
    // const result = await cartPage.verifySameProductAdded(productName);
    // console.log("Is displayed=> " + await result.isVisible());
    // expect(await result.isVisible()).toBeTruthy();

    //Click on checkout button
     await cartPage.clickOnCheckOutButton();

     //Enter customer details
     await checkoutPage.enterUserDetails(userFirstName,userLastName, postalCode);

     //click on continue button
     await checkoutPage.clickOnContinueButton();

     //click on Finish button
     await checkoutPage.clickOnFinishButton();

     //Verify the Thank You message 
     const thankYouOrderMessage= await checkoutPage.verifyThankYouMessage();
     expect(thankYouOrderMessage).toContainText('THANK YOU FOR YOUR ORDER');
    
    //await page.pause();
    
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