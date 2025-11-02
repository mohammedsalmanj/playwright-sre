import { test, expect } from '@playwright/test';

// Skip on CI until Linux baselines exist
test.skip(process.env.CI, 'Skipping visual tests in CI until Linux baselines approved');

test('Visual snapshot – SauceDemo login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.setViewportSize({ width: 1280, height: 800 });
  await expect(page).toHaveScreenshot('saucedemo-login.png', { maxDiffPixelRatio: 0.001 });
});
