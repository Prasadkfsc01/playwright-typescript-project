import "dotenv/config";
import { Page } from "@playwright/test";

export class BaseClass {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openBrowser() {
    await this.page.goto(process.env.LOGIN_URL || "");
    await this.page.waitForLoadState("domcontentloaded");
  }

  async closeBrowser() {
    await this.page.close();
  }

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }

  async reload() {
    await this.page.reload();
  }
}
