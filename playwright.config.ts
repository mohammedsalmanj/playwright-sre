import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  globalSetup: require.resolve('./tests/global.setup.ts'),
  use: {
    headless: true,
    baseURL: 'https://www.saucedemo.com',
    storageState: path.resolve(__dirname, 'tests/states/adminState.json'),
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } }
  ],
});
