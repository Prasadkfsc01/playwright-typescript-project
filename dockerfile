# Use the official Playwright Docker image
FROM mcr.microsoft.com/playwright:v1.31.0-focal

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Define the command to run Playwright tests
CMD ["npm", "run", "test"]
