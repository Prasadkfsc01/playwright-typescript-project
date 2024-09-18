import { LoginPage } from "../pages/login.po";
import { Page } from "@playwright/test";

export class LoginPageActions {
  private loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }
  async login(username: string, password: string) {
    await this.loginPage.open();
    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
    await this.loginPage.clickLogin();
  }

  async assertInvalidLoginMessage(message: string) {
    await this.loginPage.assertInvalidLoginMessage(message);
  }
}
