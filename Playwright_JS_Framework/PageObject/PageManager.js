const {LoginPage}= require('./LoginPage');
const {DashboardPage}= require('./DashboardPage');
const {CartPage}= require('./CartPage');
const {CheckoutPage}= require('./CheckoutPage');

class PageManager{


    constructor(page){

        this.page= page;
        this.loginPgae = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage= new CartPage(this.page);
        this.checkoutPage= new CheckoutPage(this.page);
    }


    getLoginPage(){
        return this.loginPgae;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }


}

module.exports={PageManager};