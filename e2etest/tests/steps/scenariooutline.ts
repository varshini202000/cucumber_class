

import { Given,When,Then } from "@cucumber/cucumber";
import { login } from "../../../Testdata/sauceloginpage";
import { page} from "../baselib/basehooks"; 

 Given('To user launch chrome and pass valid url',async () => {
    await page.goto('https://www.saucedemo.com/')});
When('user enter valid {string} and {string}',async (username, password ) => {
    const log = new login(page)
    await log.loginpage(username, password )});
Then('user click the login button',async () => {
    await page.waitForTimeout(2000);
})
Then('to user close browser',async () => {

});
