import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, Then } = createBdd();

Given('I am on the landing page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

Then('I should see the text {string}', async ({ page }, text) => {
  await expect(page.getByText(text)).toBeVisible();
});