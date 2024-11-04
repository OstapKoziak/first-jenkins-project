//const {test} = require('@playwright/test');

import {test} from '@playwright/test';

test("Simple Playwright Automation Test01 @google", async ({page}) => {

    // Provide test code here:

   await page.goto("https://www.google.com");
    
    let searchBox = page.locator("//textarea[@class='gLFyf']");

   await searchBox.fill("Automation Testing");
   await searchBox.press("Enter");
});

test("Simple Playwright Automation Test02 @youtube", async ({page}) => {

    // Provide test code here:

   await page.goto("https://www.youtube.com");
} );