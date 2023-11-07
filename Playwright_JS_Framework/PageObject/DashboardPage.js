const {test, expect} = require("@playwright/test");

class DashboardPage{


    constructor(page){
        this.page = page;
        this.productDescription = page.locator('div.inventory_item_description');
        this.productName = page.locator('div.inventory_item_name');
        this.addToCartButton = page.locator('div.pricebar>button');
        this.cartIcon = page.locator("a.shopping_cart_link");
        this.cartPage = page.locator("div.cart_list");

    }

    async clickOnCartIcon(){
        await this.cartIcon.click();
        await this.cartPage.waitFor();
         
     }
 


    async selectTheProduct(searchProductName){
       // await expect(this.productDescription.first()).toBeVisible();
        await this.productDescription.first().waitFor();
        console.log("Total Product=> " + await this.productDescription.count());
        const products = await this.productDescription;
        const totalProduct =await this.productDescription.count();
        const Test= this.productName;
        console.log(" Product=> " + await totalProduct);

        for(let i=0; i<await totalProduct; i++){
            console.log("Loop" + i);
            console.log("Product Name" + await products.nth(i).locator('div.inventory_item_name').textContent());
            const productName= await products.nth(i).locator('div.inventory_item_name').textContent();
            if(productName ==searchProductName){
                console.log("Yes I got searched..." + productName);
    
                await products.nth(i).locator('div.pricebar>button').click();
                break;
    
            }
        }
       
       
    }


   
}

module.exports = {DashboardPage}