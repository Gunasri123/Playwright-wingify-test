import { expect, type Locator, type Page } from '@playwright/test';
import { config } from '../config';

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get emailField(): Locator {
    return this.page.getByRole('textbox', { name: 'Email address' });
  }

  get passwordField(): Locator {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  get signInButton(): Locator {
    return this.page.getByRole('button', { name: 'Sign in', exact: true });
  }

  get rememberMeLabel(): Locator {
    return this.page.getByText('Remember me', { exact: true });
  }

  get forgotPasswordButton(): Locator {
    return this.page.getByRole('button', { name: 'Forgot Password?' });
  }

  get trialLink(): Locator {
    return this.page.getByRole('link', { name: 'Start a FREE TRIAL' });
  }

  async open(): Promise<void> {
    try {
      await this.page.goto(config.loginUrl, { waitUntil: 'domcontentloaded' });
      await expect(this.emailField).toBeVisible();
      await expect(this.passwordField).toBeVisible();
      await expect(this.signInButton).toBeVisible();
    } catch (error) {
      throw this.withContext('opening the login page', error);
    }
  }

  async signIn(email: string, password: string, rememberMe = false): Promise<void> {
    try {
      await this.emailField.fill(email);
      await this.passwordField.fill(password);
      if (rememberMe) {
        await this.rememberMeLabel.click();
      }
      await this.signInButton.click();
    } catch (error) {
      throw this.withContext('submitting the login form', error);
    }
  }

  async togglePasswordVisibility(): Promise<void> {
    try {
      await this.page
        .getByRole('button', { name: 'Toggle password visibility' })
        .click();
    } catch (error) {
      throw this.withContext('toggling password visibility', error);
    }
  }

  private withContext(action: string, error: unknown): Error {
    const detail = error instanceof Error ? error.message : String(error);
    return new Error(`Failed while ${action}: ${detail}`, { cause: error });
  }
}
