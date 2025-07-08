import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('I am on the landing page', async ({ page }) => {
  await page.goto('http://localhost:3000');
});

When('I look at the page', async ({}) => {
  // Step: When I look at the page
  // From: specs/landing-page.feature:5:5
});

Then('I should see the text {string}', async ({ page }, text) => {
  
});