name: Playwright Reliability Tests

on:
  push:
    branches: [ main ]
  pull_request:
  schedule:
    - cron: "0 7 * * *"     # run every day at 7:00 AM UTC
  workflow_dispatch:         # manual run on demand

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [chromium, firefox]

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Install browsers
        run: npx playwright install --with-deps

      - name: Run tests
        env:
          CI: true
        run: npx playwright test --project=${{ matrix.browser }} --reporter=list,html

      - name: Upload HTML Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report-${{ matrix.browser }}
          path: playwright-report
