const {test, expect, request} = require("@playwright/test");

class APIUtils {


constructor(apiContext, loginPayload){
    this.apiContext= apiContext;
    this.loginPayload= loginPayload;

}


async getToken()
{
    const loginResponse= await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data: this.loginPayload
    })

    console.log(" Login Response is: " +  (await (await loginResponse).body()).toString());
    expect((await loginResponse).ok()).toBeTruthy();
    const loginResponseJson= await loginResponse.json();
    const tokenData = await loginResponseJson.token;
    console.log("Token =>"+ tokenData);
    return tokenData;
}

async createOrder(orderPayload)
{
    let response = {};
    response.token = await this.getToken();
    //Creating the POST method for create order from the API
    const orderReponse= await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
    {
        data: orderPayload,
        headers: {
            'Authorization' : response.token,
            'Content-Type' : 'application/json'
        },
    })

    console.log(" Order Response is: " +  (await (await orderReponse).body()).toString());
    const orderJson = await orderReponse.json();
    const orderID= orderJson.orders[0];
    console.log("Order ID=>" + orderID);
    response.orderID = orderID;
    return response;
}

      
}

module.exports= {APIUtils};