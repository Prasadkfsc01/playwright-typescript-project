"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
exports.randomEmail = randomEmail;
function log(message) {
    console.log(`[${new Date().toString()}] ${message}`);
}
function randomEmail(email) {
    return `test+${Math.random().toString(16).substring(2, 15)}@example.com`;
}
