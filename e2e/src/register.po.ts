import { browser, by, element, promise, ElementFinder } from 'protractor';

export class RegisterPage {
  async navigateToRegister(): Promise<unknown> {
    return browser.get('/register');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('.register-head')).getText();
  }

  getNavBar(): ElementFinder {
    return element(by.css('mat-toolbar'));
  }

  isNavBarPresent(): promise.Promise<boolean> {
    return this.getNavBar().isPresent();
  }

  getNameInputBox(): ElementFinder {
    return element(by.id('nameInput'));
  }

  isNameInputBoxPresent(): promise.Promise<boolean> {
    return this.getNameInputBox().isPresent();
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

  getConfirmPasswordInputBox(): ElementFinder {
    return element(by.id('confirmPasswordInput'));
  }

  isConfirmPasswordInputBoxPresent(): promise.Promise<boolean> {
    return this.getPasswordInputBox().isPresent();
  }

  // get submit button
  getRegisterButton(): ElementFinder {
    return element(by.buttonText('Register'));
  }
  // check submit button is present or not
  isRegisterButtonPresent(): promise.Promise<boolean> {
    return this.getRegisterButton().isPresent();
  }
}
