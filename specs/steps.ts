import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, Then } = createBdd();

Given('I am on the landing page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

Given('I am on the AO page with slug {string}', async ({ page }, slug) => {
  await page.goto(`http://localhost:3000/aos/${slug}`);
})

Then('I see the text {string}', async ({ page }, text) => {
  await expect(page.getByText(text)).toBeVisible();
});

Then('I see a heading containing {string}', async ({ page }, text) => {
  await expect(page.getByRole('banner').getByText(text)).toBeVisible();
});

