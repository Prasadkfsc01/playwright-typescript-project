## GitHub Actions

### Github mechanism/workaround

- GitHub Actions is a CI/CD tool integrated with GitHub to automate tasks like building, testing, and deploying applications directly from your repository.
- Workflows are defined in YAML files within the `.github/workflows` directory
- It is triggered by events such as pushes, pull requests, or scheduled intervals. Each workflow consists of jobs, which can run sequentially or in parallel and are executed in isolated environments (such as Docker containers).

### Running GitHub Actions Workflows Locally

You can run specific GitHub Action workflows using the act command and specifying the workflow file path. Below are examples for running smoke tests and regression tests.
Ex. To run the smoke-test.yml workflow file:

```
act -W .github/workflows/smoke-test.yml
```

### You can add system architecture for the required one (e.g., for mac an ARM-based system like Apple M1/M2), specify the architecture as linux/amd64:

```
act -W .github/workflows/smoke-test.yml --container-architecture linux/amd64
act -W .github/workflows/regression-cs.yml --container-architecture linux/amd64
```

### Notes :

Ensure `act` is correctly installed and any required configuration or secrets are in place.
