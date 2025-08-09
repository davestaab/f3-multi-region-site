import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('I am on the landing page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

Given('I am on the AO page with slug {string}', async ({ page }, slug) => {
  await page.goto(`http://localhost:3000/aos/${slug}`);
})

When('I click on the menu {string}', async ({ page }, menuText) => {
  await page.getByRole('navigation').getByText(menuText).click();
});

Then('I see the text {string}', async ({ page }, text) => {
  await expect(page.getByText(text)).toBeVisible();
});

Then('I see a heading containing {string}', async ({ page }, text) => {
  await expect(page.getByRole('banner').getByText(text)).toBeVisible();
});

Then(/I (do not )?see the menu "(.+)"/, async ({ page }, negativeKeyword, menuText) => {
  const visible = !negativeKeyword;
  await expect(page.getByRole('navigation').getByText(menuText)).toBeVisible({ visible });
});