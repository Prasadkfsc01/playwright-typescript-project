## Docker

### Running playwright Tests in Docker

- You can run your playwright e2e fodler tests inside a isolated Docker container, use the following command. its a default playwright image.

```
docker run -it -v $PWD:/e2e -w /e2e playwright/included:latest
```

- Or you can run on codespace as well in github to smoke test your tests.

- Or you can build an image and run the docker file as per your requirements. Make sure you have Docker installed and running.

```
docker build -t myImage .
docker run myImage
```

- For more options and configurations, refer to Docker’s official documentation. This setup ensures a consistent testing environment across different machines.
