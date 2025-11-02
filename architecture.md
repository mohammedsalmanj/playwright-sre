                    ┌────────────────────────────────────────────┐
                    │         1️⃣ GitHub Actions (CI/CD)         │
                    │--------------------------------------------│
                    │ • Runs automatically on each push/PR       │
                    │ • Executes Playwright tests (headless)     │
                    │ • Collects & uploads test reports          │
                    └────────────────────────────────────────────┘
                                      │
                                      ▼
                    ┌────────────────────────────────────────────┐
                    │         2️⃣ Docker Environment             │
                    │--------------------------------------------│
                    │ • Official Playwright image (Chromium, FF) │
                    │ • Ensures identical setup everywhere       │
                    │ • "Lab in a box" for reliability tests     │
                    └────────────────────────────────────────────┘
                                      │
                                      ▼
                    ┌────────────────────────────────────────────┐
                    │         3️⃣ Playwright Engine              │
                    │--------------------------------------------│
                    │ • global.setup.ts → login & save state     │
                    │ • login.spec.ts → test login & flow        │
                    │ • visual.spec.ts → check visuals           │
                    │ • Generates HTML + visual reports          │
                    └────────────────────────────────────────────┘
                                      │
                                      ▼
                           ✅ Reliability Results:
                Functional checks + Visual checks + HTML reports
