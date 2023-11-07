const {expect} = require("@playwright/test");

class CartPage{


constructor(page){
    this.page= page;
    this.productNameAtCartPage= page.locator("div.cart_item div a div:has-text('Sauce Labs Fleece Jacket')")
    this.checkoutButton=  page.locator("button#checkout");
    this.cartList= page.locator("div.cart_list");
}

async verifySameProductAdded(productName){

    await this.cartList.waitFor();
    const bool= await this.getProductlcoator(productName).isVisible();
    expect(bool).toBeTruthy();
    //return bool;
    //const isProductNameDisplayed = await this.productNameAtCartPage
    //return isProductNameDisplayed;
     
}

//Sauce Labs Fleece Jacket
 getProductlcoator(productName){
   return this.page.locator("div.cart_item div a div:has-text('"+productName+"')");
}



async clickOnCheckOutButton(){
     await this.checkoutButton.click();
}


}

module.exports= {CartPage};