import { chromium, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function globalSetup() {
  // Detect CI environment and set headless accordingly
  const isCI = !!process.env.CI;
  const browser = await chromium.launch({ headless: isCI }); // 👈 changed here
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🔐 Logging into SauceDemo...');
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });

  await page.fill('input[data-test="username"]', 'standard_user');
  await page.fill('input[data-test="password"]', 'secret_sauce');
  await page.click('input[data-test="login-button"]');

  await page.waitForURL('**/inventory.html', { timeout: 15000 });
  await expect(page.locator('.title')).toHaveText('Products');

  const stateDir = path.join(__dirname, 'states');
  if (!fs.existsSync(stateDir)) fs.mkdirSync(stateDir, { recursive: true });
  await context.storageState({ path: path.join(stateDir, 'adminState.json') });

  console.log('✅ Session saved: tests/states/adminState.json');
  await browser.close();
}

export default globalSetup;
