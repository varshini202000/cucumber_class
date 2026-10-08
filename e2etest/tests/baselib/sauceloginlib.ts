

/* import{Given,When,Then} from "@cucumber/cucumber"
import{Browser,BrowserContext,Page,chromium} from "@playwright/test"
import { login } from "../../../Testdata/sauceloginpage";
export let browser:Browser;
export let browsercxt: BrowserContext;
export let page :Page;
export let loginpage:login;

export async  function launchbrowser () {
    browser = await chromium.launch({headless:false});
    browsercxt = await browser.newContext();
    page = await browsercxt.newPage();
    loginpage = new login(page)
    
};

export async function closebrowser () {
    await page.close()
    await browser.close()
};  */

