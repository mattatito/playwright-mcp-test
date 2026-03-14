import { test, expect } from '@playwright/test';

// clear localStorage before each test to keep state clean
test.beforeEach(async ({ page }) => {
  await page.goto('/vanilla-js-web-app-example');
  await page.evaluate(() => localStorage.clear());
});

test('submitting the form updates the card list', async ({ page }) => {
  const titleInput = page.getByPlaceholder('Image Title');
  const urlInput = page.getByPlaceholder('https://img.com/erick.png');
  const submit = page.getByRole('button', { name: /submit/i });

  // assert initial list count
  const cards = page.locator('.card-title');
  const initialCount = await cards.count();

  // fill and submit
  await titleInput.fill('My Test Image');
  await urlInput.fill('https://example.com/my.png');
  await submit.click();

  // after submission there should be one more card
  await expect(cards).toHaveCount(initialCount + 1);
  await expect(cards.last()).toHaveText('My Test Image');
});

test('form validation prevents empty submission', async ({ page }) => {
  const submit = page.getByRole('button', { name: /submit/i });

  // attempt to submit without filling inputs
  await submit.click();

  // the form should get the was-validated class added
  const form = page.locator('form.needs-validation');
  await expect(form).toHaveClass(/was-validated/);

  // the first invalid input (#title) should be focused
  const focused = await page.evaluate(() => document.activeElement?.id ?? null);
  expect(focused).toBe('title');

  // check that the invalid-feedback text is visible
  await expect(page.getByText('Please type a title for the image.')).toBeVisible();
});