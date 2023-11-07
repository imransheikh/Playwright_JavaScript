const {test, expect, request} = require("@playwright/test");
const{APIUtils} = require('../Utils/APIUtils'); 


const loginPayload = {
    userEmail: "imran.pbh@gmail.com",
    userPassword: "Qwerty@123"
}

const orderPayload= 
{
    orders: [
        {
            country: "India",
            productOrderedId: "6262e990e26b7e1a10e89bfa"
        }
    ]
}

let response; 

test.beforeAll(async()=>{
   const apiContext=   await request.newContext();
   const apiUtils = new APIUtils(apiContext, loginPayload);
  response =  await apiUtils.createOrder(orderPayload);
   
});


test('Craete order with API', async({page})=>{
    //Set the token in browser's local storage by using javascript function
    page.addInitScript(value=>{
        window.localStorage.setItem('token', value)
    },response.token);


    console.log("My token => "+ await response.token)
    console.log("My Order => "+ await response.orderID)



});






