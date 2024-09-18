## LambdaTest Setup Process for Playwright

### 1. Create LambdaTest Account

- **Create a LambdaTest account** and get your `username` and `access key`. This information will be required for configuring the tests.

### 2. Install LambdaTest CLI Package

Install the LambdaTest CLI package using the following command:

```bash
npm install -g lambdatest-playwright-cli
```

### 3. Initialize LambdaTest Configuration

Initialize the LambdaTest configuration, which will create a `lambdatest-config.json` file in your project:

```bash
lambdatest-playwright init
```

### 4. Configure `lambdatest-config.json`

Open the `lambdatest-config.json` file and update it with your LambdaTest credentials and desired configuration settings. For example:

- **Add your LambdaTest `username` and `access_key`**
- **Configure desired capabilities** (device, browser, OS combos)
- **Update the `specs` path** to point to your Playwright tests

Here’s an example of what your `lambdatest-config.json` might look like:

```json
{
  "username": "YOUR_LAMBDATEST_USERNAME",
  "access_key": "YOUR_LAMBDATEST_ACCESS_KEY",
  "specs": "playwright-tests/**/*.spec.ts",
  "browsers": [
    {
      "browser": "chrome",
      "browser_version": "latest",
      "os": "Windows",
      "os_version": "10"
    }
    // Add other browser/device configurations as needed
  ]
}
```

### 5. Run Your Tests

Use the LambdaTest CLI to run your Playwright tests:

```bash
lambdatest-playwright run
```

### 6. Troubleshooting

**If you encounter errors related to configuration files:**

- Ensure that the `lambdatest-config.json` file is correctly formatted and includes the correct paths and credentials.
- Remove or adjust any specific configurations that may not be necessary for your setup.

### Screenshots

For visual references and additional details, you can refer to LambdaTest’s documentation or sample screenshots similar to those provided for Playwright.

### Example `lambdatest-config.json` (Playwright)

Here’s an example configuration for a Playwright setup:

```json
{
  "username": "YOUR_LAMBDATEST_USERNAME",
  "access_key": "YOUR_LAMBDATEST_ACCESS_KEY",
  "specs": "playwright-tests/**/*.spec.ts",
  "browsers": [
    {
      "browser": "chrome",
      "browser_version": "latest",
      "os": "Windows",
      "os_version": "10"
    },
    {
      "browser": "firefox",
      "browser_version": "latest",
      "os": "Windows",
      "os_version": "10"
    },
    {
      "browser": "safari",
      "browser_version": "latest",
      "os": "Mac",
      "os_version": "Big Sur"
    }
  ]
}
```

### Additional Notes

- Ensure you have the LambdaTest CLI tools installed and configured properly.
- Check LambdaTest documentation for any updates or additional configuration options.

By following these steps, you can integrate LambdaTest with Playwright and run your tests across various browsers and devices on LambdaTest’s cloud infrastructure.
