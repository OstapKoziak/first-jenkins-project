import { test, expect } from '@playwright/test';

test.describe("Test Group @group2", () => {

    // create beforeEach function that will navigate to https://practice.cydeo.com
    test.beforeEach(async ({page}) => {
      await page.goto('https://practice.cydeo.com');
    });

     // create afterEach function that will close the browser
  // test.afterEach(async ({page}) => {
  //   await page.waitForTimeout(3000);
  // });
  
  // create tests inside the Test Group @group2
  test("Get the title of the page", async ({ page }) => {

    await page.goto('https://practice.cydeo.com');
    let actualTitle = await page.title();
    let expectedTitle = 'Practice';
    expect(actualTitle).toBe(expectedTitle);
  });

  test('Get the URL of the page', async ({ page }) => {

     await page.goto('https://practice.cydeo.com');
    let actualURL = page.url();

    let expectedTitle = 'Practice';
    expect(actualURL).toContain("cydeo");
    
  });

  test('Click the A/B testing link', async ({ page }) => {

    await page.goto('https://practice.cydeo.com');

    //page.locator("text='A/B Testing'").click();
    let abTestingLink = page.getByText("A/B Testing");

    await expect(abTestingLink.isEnabled()).toBeTruthy();
    await abTestingLink.click();

  });
});