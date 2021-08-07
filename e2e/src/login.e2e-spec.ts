import { browser, logging } from 'protractor';
import { LoginPage } from './login.po';

describe('Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display Login message on login page', async () => {
    await page.navigateToLogin();
    expect(await page.getTitleText()).toEqual('LOGIN');
  });

  it('should check header presentation on login page', () => {
    page.navigateToLogin();
    expect(page.isNavBarPresent()).toBeTruthy(
      '<mat-toolbar> should exist in header.component.html'
    );
  });

  it('should get email input box', () => {
    page.navigateToLogin();
    expect(page.isEmailInputBoxPresent()).toBeTruthy(
      `<input class="username" matInput [formControl]='username'> should exist in login.component.html`
    );
  });

  it('should get passsword input box', () => {
    page.navigateToLogin();
    expect(page.isPasswordInputBoxPresent())
      .toBeTruthy(`<input class="password" matInput type = 'password' [formControl]='password'>
      should exist in login.component.html`);
  });

  it('should get submit button', () => {
    page.navigateToLogin();
    expect(page.isLoginButtonPresent())
      .toBeTruthy(`<button type="submit" mat-button>Submit</button> should
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
