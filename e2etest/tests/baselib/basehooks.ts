
import{Browser,BrowserContext,Page,chromium} from "@playwright/test"
import { Before,After } from "@cucumber/cucumber";

let browser:Browser;
let browsercxt: BrowserContext;
let page :Page;

 Before (async ()=>{
    browser = await chromium.launch({headless:false});
    browsercxt = await browser.newContext();
    page = await browsercxt.newPage();
    
 })

 After(async ()=>{
     await page.close()
     await browsercxt.close()
     await browser.close()
 });
 export{page}