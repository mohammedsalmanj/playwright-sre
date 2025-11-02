# playwright-sre
Automated browser testing framework integrated into SRE workflows for continuous monitoring, reliability assurance, and end-to-end web application validation. Provides robust cross-browser uptime and performance checks to enhance system resilience.

Browser-Based Reliability Testing Framework using Playwright, Docker, and GitHub Actions

---

## 🧠 What Is Playwright-SRE?

Playwright-SRE v3 is a reliability testing framework built with [Microsoft Playwright](https://playwright.dev).  
It automates real browsers (Chrome, Firefox) to test your web application’s functionality and visual consistency — the same way real users experience it.

> 🧩 Simple Idea:  
> Instead of just checking if your server is up (like New Relic does),  
> Playwright-SRE checks if your website actually works and looks right.

---

## 🎯 Purpose

Modern SREs and DevOps teams track metrics like latency and uptime —  
but those don’t guarantee that the frontend is usable.

This project ensures your key user journeys (like login or dashboard access) always work as expected — functionally and visually — in both local and CI/CD environments.

---

## 🔍 Why Use Playwright?

| What Playwright Does | Why It’s Important |
|----------------------|--------------------|
| ✅ Automates browsers like Chrome/Firefox | Tests your app like a real user, not an API |
| ✅ Verifies UI, text, and navigation | Detects broken elements or workflows |
| ✅ Captures and compares screenshots | Catches small visual layout changes |
| ✅ Runs headless in CI/CD | Works even on servers without GUI |
| ✅ 100% Free and Open Source | No license cost, full flexibility |
| ✅ Works in Docker | Consistent environment for all runs |

> 🧠 Analogy:  
> Playwright is like a robot user — it opens your app, clicks, types, takes screenshots, and reports if anything is off.

---

## ⚙️ Features

| Feature | Description |
|----------|-------------|
| 🔐 Global Login Setup | Logs in once, saves session (`adminState.json`) for all tests. |
| 🧪 Functional Tests | Validates login, navigation, and text visibility. |
| 🖼️ Visual Regression Tests | Compares screenshots pixel-by-pixel to detect UI drift. |
| 🧠 Multi-Browser Execution | Runs tests in Chromium and Firefox in parallel. |
| ☁️ CI/CD Ready | Integrates directly with GitHub Actions. |
| 🐳 Dockerized Setup | Ensures consistent results everywhere. |
| 📊 HTML Reports | Generates detailed test summaries with screenshots. |



🔄 End-to-End Flow
Step	Action	Output
1️⃣ Setup	Login once (global.setup.ts)	Session saved in adminState.json
2️⃣ Functional Tests	Runs user flows (login.spec.ts)	Confirms key pages work
3️⃣ Visual Tests	Takes screenshots (visual-saucedemo.spec.ts)	Detects UI drift
4️⃣ Reports	Generates playwright-report/	Detailed results with screenshots

🧠 Analogy:
Imagine a QA robot that wakes up, logs in, clicks around, takes photos, and emails you if something breaks — that’s what this setup does.  


Quick Start

# 1. Install dependencies
npm ci

# 2. Install browsers
npx playwright install

# 3. Run all tests
npx playwright test --headed

# 4. Update baselines (visual)
npx playwright test -u

# 5. View HTML report
npx playwright show-report


