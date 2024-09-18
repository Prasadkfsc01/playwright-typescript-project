## OrangeHRM Playwright Typescript Framework

## Overview

This repository contains a regression test suite for OrangeHRM built using Playwright and TypeScript. The suite is designed to run automated tests on a scheduled basis to ensure the stability and functionality of the OrangeHRM application.

## Features

- **Automated Regression Testing:** Tests critical functionalities of the OrangeHRM application.
- **Scheduled Runs:** Tests are scheduled to run at midnight every day.
- **Reports:** Detailed test reports are generated and stored as artifacts.
- **Slack Notifications:** Notifications are sent to Slack on test success or failure.
- **TypeScript Integration:** The framework uses TypeScript for type safety and better development experience.

## Prerequisites

- Node.js (version 21.x or later)
- Playwright
- GitHub Actions for CI/CD
- Slack Webhook URL for notifications

## Getting Started

### Local Setup

1. **Clone the Repository**

   ```bash
   https://github.com/Prasadkfsc01/playwright-typescript-project.git
   cd project-folder
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the necessary environment variables:

   ```env
   BASE_URL=http://your-orangehrm-url
   USERNAME=your-username
   PASSWORD=your-password
   ```

4. **Run Tests Locally**

   You can run the tests locally with the following command:

   ```bash
   npm run test
   ```

   To run tests with a visible browser window:

   ```bash
   npm run test:headed
   ```

### GitHub Actions

The project uses GitHub Actions to schedule and run tests daily at midnight.

#### Workflow Configuration

The GitHub Actions workflow is defined in `.github/workflows/playwright-regression.yml`. It includes:

- **Scheduled Runs:** Executes tests daily at midnight using a cron job.
- **Test Execution:** Runs Playwright tests and stores the reports.
- **Slack Notifications:** Sends notifications on test results.

### Reports

Test reports are generated and stored in the `playwright-report` directory. These reports can be viewed as artifacts in the GitHub Actions workflow.

### Slack Integration

Slack notifications are configured to notify you about the test results. Ensure that you have set up a Slack webhook URL in GitHub Secrets with the name `SLACK_WEBHOOK_URL`.

## Directory Structure

- **`src/`**: Contains source code and test scripts.
  - **`pages/`**: Page object model files.
  - **`tests/`**: Test files.
- **`config/`**: Configuration files.
- **`playwright-report/`**: Generated test reports.
- **`.github/`**: GitHub Actions workflow files.

## Troubleshooting

- **No Slack Notifications:** Verify the Slack webhook URL in GitHub Secrets and check the action logs for errors.
- **Test Failures:** Review the generated test reports in the `playwright-report` directory for detailed error messages.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Please ensure your code adheres to the project's coding standards and passes all tests.
