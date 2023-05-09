# Installation

```bash
pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
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
