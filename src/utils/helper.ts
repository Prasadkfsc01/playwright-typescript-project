export function log(message: string) {
  console.log(`[${new Date().toString()}] ${message}`);
}

export function randomEmail(email: string) {
  return `test+${Math.random().toString(16).substring(2, 15)}@example.com`;
}
