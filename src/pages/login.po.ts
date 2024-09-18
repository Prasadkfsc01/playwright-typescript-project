import { Page, expect } from "@playwright/test";
import { BaseClass } from "./base.po";

export class LoginPage {
  readonly page: Page;
  private baseClass: BaseClass;
  constructor(page: Page) {
    this.baseClass = new BaseClass(page);
    this.page = page;
  }

  async open() {
    this.baseClass.openBrowser();
  }

  async enterUsername(username: string) {
    await this.page.fill('[name="username"]', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('[name="password"]', password);
  }

  async clickLogin() {
    await this.page.click('[type="submit"]');
  }

  async verifyDashboard(message: string) {
    //message = this.page.locator('').textContent();
  }

  async assertInvalidLoginMessage(message: string) {
    await this.page.waitForSelector(
      "div.oxd-alert-content.oxd-alert-content--error > p"
    );
    const invalidLoginMessage = await this.page
      .locator("div.oxd-alert-content.oxd-alert-content--error > p")
      .textContent();
    expect(invalidLoginMessage).toBe(message);
  }
}
