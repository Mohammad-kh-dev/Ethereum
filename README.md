# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# Features

This template provides the following features:

- Retrieves and displays the latest block number of the Ethereum mainnet.
- Fetches and displays the USDT balance of a specified Ethereum address.
- Provides a unit test to ensure code functionality (using Vitest).
- Supports React integration (via the useBlockAndUsdtBalance hook).

## Requirements

To use this template, ensure you have the following:

- Node.js and npm (or yarn) installed on your system.
- An Infura API key (https://infura.io/) for interacting with the Ethereum network.
- An Etherscan API key ([invalid URL removed]) for fetching contract ABI.

## Installation

To get started with this template, follow these steps:

1. Clone this repository: `git clone https://github.com/Mohammad-kh-dev/Ethereum.git`
2. Navigate to the project directory: `cd ETHERNEUM`
3. Install dependencies: `npm install`

## Configuration

Before running the application, make sure to replace the placeholders with your actual API keys in `Src/Constants/Constant.ts`:


## Using the useBlockAndUsdtBalance Hook (React)

### Import the hook in your React component:
function MyComponent() { const { blockNumber, usdtBalance, error } = useBlockAndUsdtBalance(); // ... }

-Running Unit Tests :

1- Execute the following command: npm run test

This will run the tests and report on their success or failure
