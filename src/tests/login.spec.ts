import { test, expect } from "@playwright/test";
import { LoginPageActions } from "../actions/loginActions";
import data from "../testdata/credentials.json";

test.describe("Login feature", () => {
  test("should login with valid credentials", async ({ page }) => {
    const actions = new LoginPageActions(page);
    await actions.login(data.username, data.password);
    expect(await page.title()).toBe("OrangeHRM");
  });

  test("should not allow login with invalid credentials", async ({ page }) => {
    const actions = new LoginPageActions(page);
    await actions.login(data.username, data.invalidPassword);
    await actions.assertInvalidLoginMessage("Invalid credentials");
  });
});
