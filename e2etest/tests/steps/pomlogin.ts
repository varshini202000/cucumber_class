
import{ Given, When, Then } from "@cucumber/cucumber";
import { login } from "../../../Testdata/sauceloginpage";
import { page } from "../baselib/basehooks";


Given('To user launch browser', async function () {
  await page.goto('https://www.saucedemo.com/');
});


When('user enter valid username and password', async function () {
  
      const log = new login(page)
      
      await log.loginpage('standard_user','secret_sauce')
     
});

Then('user click login button', async function () {
});

Given('to user launch browser', async function () {
    await page.goto('https://www.saucedemo.com/');
});

When('user enter invalid username and password', async function () {
  const log = new login(page)
    await log.loginpage('standard_user','secret_sauce')
    
});