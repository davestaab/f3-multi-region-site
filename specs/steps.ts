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

Then(/I (do not )?see the text "(.+)"/, async ({ page }, negativeKeyword, text) => {
  const visible = !negativeKeyword;
  await expect(page.getByText(text)).toBeVisible({ visible });
});

Then('I see a heading containing {string}', async ({ page }, text) => {
  await expect(page.getByRole('banner').getByText(text)).toBeVisible();
});

Then(/I (do not )?see the menu "(.+)"/, async ({ page }, negativeKeyword, menuText) => {
  const visible = !negativeKeyword;
  await expect(page.getByRole('navigation').getByText(menuText)).toBeVisible({ visible });
});

Then('I see the image with alt text {string}', async ({ page }, altText) => {
  await expect(page.getByRole('img', { name: altText })).toBeVisible();
});

Then(/I (do not )?see the element titled "(.+)"/, async ({ page }, negativeKeyword, title) => {
  const visible = !negativeKeyword;
  await expect(page.getByTitle(title)).toBeVisible({ visible });
});

Then('I see a link to {string}', async ({ page }, linkText) => {
  const link = page.getByRole('link', { name: linkText });
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', expect.stringContaining(getSocialMediaLink(linkText)));
});

function getSocialMediaLink(linkText: string) {
  return linkText === 'X' ?
    'https://x.com' :
    linkText === 'Facebook' ?
      'https://www.facebook.com' :
      'https://www.instagram.com';
}
