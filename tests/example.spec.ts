import { test, expect } from '@playwright/test';

test('navigate explicitly to /vanilla-js-web-app-example and inspect elements', async ({ page }) => {
  // explicitly visit the path required in the request
  await page.goto('/vanilla-js-web-app-example');
  await expect(page.url()).toContain('/vanilla-js-web-app-example');

  // the document title should be correct
  await expect(page).toHaveTitle(/TDD Frontend Example/i);

  // check the form inputs are present
  await expect(page.locator('#title')).toBeVisible();
  await expect(page.locator('#imageUrl')).toBeVisible();

  // verify at least one card appears with a title
  const cards = page.locator('.card-title');
  const count = await cards.count();
  expect(count).toBeGreaterThan(0);
  const texts = await cards.allTextContents();
  console.log('Card titles on page:', texts);
  await expect(cards.first()).not.toHaveText('');
});
