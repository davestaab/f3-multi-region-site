import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('I am on the landing page', async ({ page }) => {
  await page.goto('/');
});

Then('I should see the text {string}', async ({ page }, text) => {
  expect(page.getByText(text)).toBeVisible();
});