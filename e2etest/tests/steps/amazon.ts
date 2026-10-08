

import{ Given, When, Then } from "@cucumber/cucumber";
import { page } from "../baselib/basehooks";


Given('to user launch browser and pass amazon', async function () {

   await page.goto('https://www.amazon.in/'); 
});

