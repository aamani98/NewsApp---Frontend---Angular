import { browser, by, element, promise, ElementFinder } from 'protractor';

export class LoginPage {
  async navigateToLogin(): Promise<unknown> {
    return browser.get('/login');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('.login-head')).getText();
  }

  getNavBar(): ElementFinder {
    return element(by.css('mat-toolbar'));
  }

  isNavBarPresent(): promise.Promise<boolean> {
    return this.getNavBar().isPresent();
  }

  getEmailInputBox(): ElementFinder {
    return element(by.id('emailInput'));
  }

  isEmailInputBoxPresent(): promise.Promise<boolean> {
    return this.getEmailInputBox().isPresent();
  }

  getPasswordInputBox(): ElementFinder {
    return element(by.id('passwordInput'));
  }

  isPasswordInputBoxPresent(): promise.Promise<boolean> {
    return this.getPasswordInputBox().isPresent();
  }

  // get submit button
  getLoginButton(): ElementFinder {
    return element(by.buttonText('Login'));
  }
  // check submit button is present or not
  isLoginButtonPresent(): promise.Promise<boolean> {
    return this.getLoginButton().isPresent();
  }
}
