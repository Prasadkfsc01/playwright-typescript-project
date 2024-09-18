import { baseConfig } from "./base.config";

export const devConfig = {
  ...baseConfig,
  baseURL: "https://opensource-demo.orangehrmlive.com",
  retries: 1,
};
