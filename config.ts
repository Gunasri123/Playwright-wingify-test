const baseUrl = (process.env.VWO_BASE_URL ?? 'https://app.wingify.com').replace(/\/+$/, '');

export const config = {
  baseUrl,
  loginUrl: `${baseUrl}/#/login`,
  actionTimeoutMs: 10_000,
  navigationTimeoutMs: 30_000,
  credentials: {
    email: process.env.VWO_USERNAME,
    password: process.env.VWO_PASSWORD
  }
} as const;
