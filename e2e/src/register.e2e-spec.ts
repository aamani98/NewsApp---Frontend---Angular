import { browser, logging } from 'protractor';
import { RegisterPage } from './register.po';

describe('Register Page', () => {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
  });

  it('should display Login message on login page', async () => {
    await page.navigateToRegister();
    expect(await page.getTitleText()).toEqual('REGISTER');
  });

  it('should check header presentation on login page', () => {
    page.navigateToRegister();
    expect(page.isNavBarPresent()).toBeTruthy(
      '<mat-toolbar> should exist in header.component.html'
    );
  });

  it('should get email input box', () => {
    page.navigateToRegister();
    expect(page.isEmailInputBoxPresent()).toBeTruthy(
      `<input class="username" matInput [formControl]='username'> should exist in login.component.html`
    );
  });

  it('should get passsword input box', () => {
    page.navigateToRegister();
    expect(page.isPasswordInputBoxPresent())
      .toBeTruthy(`<input class="password" matInput type = 'password' [formControl]='password'>
      should exist in login.component.html`);
  });

  it('should get submit button', () => {
    page.navigateToRegister();
    expect(page.isRegisterButtonPresent())
      .toBeTruthy(`<button type="submit" mat-button>Submit</button> should
      exist in login.component.html`);
  });

  it('should get name input box', () => {
    page.navigateToRegister();
    expect(page.isNameInputBoxPresent()).toBeTruthy(`name input box should
      exist in login.component.html`);
  });

  it('should get confirm password input box', () => {
    page.navigateToRegister();
    expect(page.isConfirmPasswordInputBoxPresent())
      .toBeTruthy(`confirm password input box should
      exist in login.component.html`);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
