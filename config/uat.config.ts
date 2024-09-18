import { baseConfig } from "./base.config";

export const uatConfig = {
  ...baseConfig,
  baseUrl: "http://localhost",
  retries: 2,
};
