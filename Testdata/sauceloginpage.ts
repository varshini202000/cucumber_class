import test, { Locator, Page } from "@playwright/test";
  export class login{
    readonly page: Page;
    readonly username :Locator;
    readonly password : Locator;
    readonly loginbtn : Locator;
    constructor(page: Page){
        this.page = page,
        this.username = page.locator('#user-name'),
        this.password = page.locator('#password'),
        this.loginbtn = page.locator('#login-button')
    }
    async navigate (){
        await this.page.goto('https://www.saucedemo.com/')
    }
    async loginpage (username : string, password :string ){
     
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbtn.click();
    }    
 }
 