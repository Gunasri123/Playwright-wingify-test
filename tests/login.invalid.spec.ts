import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login page and invalid login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    try {
      await loginPage.open();
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      throw new Error(`Login page setup failed: ${detail}`, { cause: error });
    }
  });

  test('shows the accessible login controls and recovery options', async () => {
    try {
      await expect(loginPage.emailField).toBeVisible();
      await expect(loginPage.passwordField).toBeVisible();
      await expect(loginPage.signInButton).toBeVisible();
      await expect(loginPage.rememberMeLabel).toBeVisible();
      await expect(loginPage.forgotPasswordButton).toBeVisible();
      await expect(loginPage.trialLink).toBeVisible();
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      throw new Error(`Login interface verification failed: ${detail}`, { cause: error });
    }
  });

  test('toggles password visibility using the accessible control', async () => {
    try {
      await loginPage.passwordField.fill('Example-password-123');
      await expect(loginPage.passwordField).toHaveAttribute('type', 'password');
      await loginPage.togglePasswordVisibility();
      await expect(loginPage.passwordField).toHaveAttribute('type', 'text');
      await loginPage.togglePasswordVisibility();
      await expect(loginPage.passwordField).toHaveAttribute('type', 'password');
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      throw new Error(`Password visibility verification failed: ${detail}`, { cause: error });
    }
  });

  test('rejects invalid credentials and keeps the login form available', async ({ page }) => {
    try {
      await loginPage.signIn('invalid.user@example.com', 'Invalid-password-123');
      await expect(page).toHaveURL(/#\/login/);
      await expect(loginPage.emailField).toHaveValue('invalid.user@example.com');
      await expect(loginPage.passwordField).toBeVisible();
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      throw new Error(`Invalid login scenario failed: ${detail}`, { cause: error });
    }
  });
});
