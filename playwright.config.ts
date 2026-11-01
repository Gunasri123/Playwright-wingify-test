import { defineConfig } from '@playwright/test';
import { config } from './config';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  timeout: 60_000,
  expect: {
    timeout: config.actionTimeoutMs
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['./reporters/test-engine.reporter.ts']
  ],
  outputDir: 'test-results',
  use: {
    baseURL: config.baseUrl,
    browserName: 'chromium',
    viewport: { width: 1440, height: 900 },
    actionTimeout: config.actionTimeoutMs,
    navigationTimeout: config.navigationTimeoutMs,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
