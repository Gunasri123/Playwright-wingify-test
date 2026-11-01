# Wingify Login Playwright Tests

Playwright and TypeScript tests for the VWO login page at `https://app.wingify.com/#/login`.

## Setup

```powershell
npm install
npm run install:browsers
```

Set `VWO_USERNAME` and `VWO_PASSWORD` in the environment to enable the authenticated login test. The valid-login test is skipped when either value is missing. `VWO_BASE_URL` can override the application host.

## Run

```powershell
npm test
npm run test:invalid
npm run test:valid
npm run typecheck
```

## Reports

`npm test` creates the Playwright HTML report in `playwright-report` and a custom test-engine JSON report at `test-results/test-engine-report.json`. Open the HTML report with `npm run report`.
