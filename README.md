# NestJS POC

[![codecov](https://codecov.io/gh/vparkov/nestjs-poc/branch/main/graph/badge.svg?token=JT1TN8APBT)](https://codecov.io/gh/vparkov/nestjs-poc)
[![Coveralls Status](https://coveralls.io/repos/github/vparkov/nestjs-poc/badge.svg)](https://coveralls.io/github/vparkov/nestjs-poc)

## Installation

```bash
pnpm install
```

## Running the app

### Without Docker

To run the application without Docker, use the following commands:

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### With Docker

We use Docker Compose to manage our application's services. Here are the commands to manage the lifecycle of your application:

- **Build Docker images**

    This command builds your Docker images according to the `docker-compose.yml` file.

    ```bash
    npm run docker:build
    ```

- **Start Docker containers**

    This command starts your Docker containers. It also creates any necessary networks and volumes, and it might build images if they haven't been built already.

    ```bash
    npm run docker:up
    ```

    If you want to run the containers in the background (detached mode), you can use the `-d` flag:

    ```bash
    npm run docker:up -d
    ```

- **Stop Docker containers**

    This command stops your Docker containers. It also removes the containers, networks, and volumes defined in your `docker-compose.yml` file.

    ```bash
    npm run docker:down
    ```

These commands serve to shorten and standardize the Docker Compose commands we use frequently. You can add more scripts based on your use case and workflow.

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Utils

### PNPM

```bash
# Install a package and add it to dependencies.
$ pnpm add sax

# Install a package and add it to devDependencies.
$ pnpm add -D sax

# Checks for known security issues with the installed packages.
$ pnpm audit

# Checks for outdated packages.
$ pnpm outdated

# Updates all dependencies, adhering to ranges specified in package.json
$ pnpm up

# Updates all dependencies, ignoring ranges specified in package.json
$ pnpm up --latest
```

## Visual Studio Code Configuration

In this project, we use a combination of Prettier and ESLint for code formatting and linting. To ensure a consistent development experience across the team, please follow these steps to configure Visual Studio Code (VSCode) for this project:

### Prerequisites

1. Install the following VSCode extensions:
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### Configuration

Add the following settings to your VSCode `settings.json` file:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.requireConfig": true,
  "prettier.configPath": ".prettierrc"
}
```

### Explanation

- `"editor.formatOnSave": false`: Disables the built-in VSCode formatter on save. We do this to ensure that only Prettier and ESLint are responsible for formatting our code, providing a consistent format across the team.

- `"editor.codeActionsOnSave": { "source.fixAll.eslint": true }`: Enables automatic fixing of ESLint issues on save. This helps to maintain a clean and consistent codebase by applying any required linting rules and code style.

- `"editor.defaultFormatter": "esbenp.prettier-vscode"`: Sets Prettier as the default code formatter in VSCode. This ensures that Prettier is responsible for formatting our code, providing a consistent style across the team.

- `"prettier.requireConfig": true`: Requires a Prettier configuration file (`.prettierrc`) to be present in the project for Prettier to format the code. This ensures that Prettier uses the project-specific configuration, maintaining consistency across the team.

- `"prettier.configPath": ".prettierrc"`: Specifies the path to the Prettier configuration file (`.prettierrc`). This setting ensures that Prettier uses the project-specific configuration for formatting.

By following these configuration steps, your VSCode environment will be set up to use Prettier and ESLint consistently with the rest of the team, helping maintain a clean and uniform codebase.
