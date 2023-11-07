const {test, expect} = require("@playwright/test");


test('Test DropDown functionality...', async({page})=>{

    //Open the application URL
    await page.goto("https://demo.automationtesting.in/Register.html");
    // Enter fist and last name
    await page.locator('input[placeholder="First Name"]').fill("Imran");
    await page.locator('input[placeholder="Last Name"]').fill("Imran");
    
    //Enter address and email 
    await page.locator('div>textarea[ng-model="Adress"]').fill("Testing Address");
    await page.locator('input[type="email"]').fill("imrantesting@gmail.com");
    
    //Enter Phone numder
    await page.locator('input[type="tel"]').fill("+918750229191");
    
    //select radio button and verify that radio button is selected
    await page.locator('input[value="Male"]').click();
    await expect(page.locator('input[value="Male"]')).toBeChecked()
    //Verify that checkbox is not checked
     expect(await page.locator('input[value="FeMale"]').isChecked()).toBeFalsy();


    //Check the checkbox
    await page.locator('//label[contains(text(),"Movies")]/preceding-sibling::input').click();
    //Select option in Multiselect drop down
    await page.locator('div#msdd').click();
    await page.locator('//multi-select//li/a[contains(text(),"Bulgarian")]').click();
    await page.locator('//multi-select//li/a[contains(text(),"Dutch")]').click();
    //select skills drop down
    const selectSkillsDropDown = page.locator('select#Skills');
    await selectSkillsDropDown.selectOption('Certifications')
    //select country from country drop down
    await page.locator('span.selection').click();
    await page.locator('input.select2-search__field').type("India");
    await page.locator('//span[contains(@class,"select2-dropdown")]//ul/li[contains(text(),"India")]').click();
    
    //Enter password and confirm password
    await page.locator('input#firstpassword').type("testing@123");
    await page.locator('input#secondpassword').type("testing@123");



    // These below code is used for pausing the page
    await page.pause();
    //await new Promise(() => {})

    

});