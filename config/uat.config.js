"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uatConfig = void 0;
const base_config_1 = require("./base.config");
exports.uatConfig = {
    ...base_config_1.baseConfig,
    baseUrl: "http://localhost",
    retries: 2,
};
