import { test } from "@playwright/test";

test("Youtube Search @youtube2", async ({ page }) => {
  
page.goto("https://www.youtube.com/");

const searchBox = page.locator("//input[@id='search']");

await searchBox.click();

await searchBox.fill("Cydeo");

 await page.waitForTimeout(3000); // wait for autocomplete results to load

await searchBox.press("Enter");

await page.waitForTimeout(3000);

const firstVideo = page.locator("(//a[@id='video-title'])[1]");

firstVideo.click();

await page.waitForTimeout(3000);

});