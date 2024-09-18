"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devConfig = void 0;
const base_config_1 = require("./base.config");
exports.devConfig = {
    ...base_config_1.baseConfig,
    baseURL: "https://opensource-demo.orangehrmlive.com",
    retries: 1,
};
