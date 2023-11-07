class CheckoutPage{


constructor(page){
    this.page= page;
    this.checkoutInformationPage = page.locator("div.checkout_info")
    this.UserFirstName= page.locator("input#first-name");
    this.UserLastName= page.locator("input#last-name");
    this.postalCode= page.locator("input#postal-code");
    this.continueButton= page.locator("input#continue");
    this.finishButton = page.locator("button#finish");
    this.thankYouMessage = page.locator("h2.complete-header");

}


async enterUserDetails(userFirstName, userLastName, postalCode){

    await this.checkoutInformationPage.waitFor();
    await this.UserFirstName.fill(userFirstName);
    await this.UserLastName.fill(userLastName);
    await this.postalCode.fill(postalCode);

}

async clickOnContinueButton(){
     await this.continueButton.click();
}

async clickOnFinishButton(){
    await this.finishButton.click();

}

async verifyThankYouMessage(){
    const ThanksOrderLocator= await this.thankYouMessage;
    return ThanksOrderLocator;
}


}

module.exports={CheckoutPage};