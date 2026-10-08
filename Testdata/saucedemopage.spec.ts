import test from "@playwright/test";



import { login } from "./sauceloginpage";

test('validate the loginpage',async ({page}) => {

    const log = new login(page)
    await log.navigate()
    await log.loginpage('standard_user','secret_sauce')
   



})
