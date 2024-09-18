## LambdaTest set up process

- Create a lambda test user access and get username and access key handy before process [see sample attached screenshot].
- Make sure Installing the LambdaTest CLI package using the below command:

```
  npm install -g lambdatest-cypress-cli
```

- Setup the configuration, run below command which will add a config file in your project `lambdatest-config.json`

```
lambdatest-cypress init
```

- Now open config file and add your username and access_key. Add any configuration you need, device, browser, OS combos
- Update you specs path in the `lambdatest-config.json` like below

```
"specs": "cypress/e2e/spec.cy.js",
```

- run below command to run your test cases

```
lambdatest-cypress run
```

**_If you come across error about config file, just remove the below line from lambda config file_**

` "cypress_config_file": "cypress.config.js",`

### Screenshots

<img width="693" alt="Screenshot 2024-04-12 at 13 45 23" src="https://github.com/Prasadkfsc01/process-Documentations/assets/98956122/756bc9b2-14b6-4c24-8223-6a6708327b9c">
