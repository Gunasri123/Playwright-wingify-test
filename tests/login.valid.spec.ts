import { expect, test } from '@playwright/test';
import { config } from '../config';
import { LoginPage } from '../pages/login.page';

test.describe('Valid login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    test.skip(
      !config.credentials.email || !config.credentials.password,
      'Set VWO_USERNAME and VWO_PASSWORD to run the authenticated login test.'
    );
    loginPage = new LoginPage(page);

    try {
      await loginPage.open();
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      throw new Error(`Valid login setup failed: ${detail}`, { cause: error });
    }
  });

  test('signs in with valid credentials and Remember me enabled', async ({ page }) => {
    try {
      await loginPage.signIn(
        config.credentials.email ?? '',
        config.credentials.password ?? '',
        true
      );
      await expect(page).not.toHaveURL(/#\/login(?:$|[?&])/);
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      throw new Error(`Valid login scenario failed: ${detail}`, { cause: error });
    }
  });
});
