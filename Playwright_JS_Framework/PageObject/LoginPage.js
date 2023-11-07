class LoginPage {

constructor(page){
    this.page = page;
    this.userName =  page.locator('input#user-name');
    this.userPassword=  page.locator('input#password');
    this.loginButton=  page.locator('input#login-button');
    

}

async goTo(){

    await this.page.goto("https://www.saucedemo.com/");
   
}

async validLogin(username, password){
    await this.userName.type(username);
    await this.userPassword.type(password);
    await this.loginButton.click();

}


}

module.exports= {LoginPage}