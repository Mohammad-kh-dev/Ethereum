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


#Features

Retrieves and displays the latest block number of the Ethereum mainnet.
Fetches and displays the USDT balance of a specified Ethereum address.
Provides a unit test to ensure code functionality (using Vitest).
Supports React integration (via the useBlockAndUsdtBalance hook).

-Requirements

Node.js and npm (or yarn) installed on your system.
An Infura API key (https://infura.io/) for interacting with the Ethereum network.
An Etherscan API key ([invalid URL removed]) for fetching contract ABI.

#Installation

1-Clone this repository: git clone https://github.com/Mohammad-kh-dev/Ethereum.git

2- Navigate to the project directory: cd ETHERNEUM

3-Install dependencies: npm install 

#Configuration
replacing the placeholders with your actual API keys in Src/Constants/Constant.ts:
const INFURA_TOKEN = ''; 
const ETHERSCAN_API_KEY = '';
const USDT_CONTRACT_ADDRESS = '';


#Running the Application

1- Start the application: npm run dev OR yarn run dev

This will display the current block number and USDT balance of the specified contract address (USDT in this case) on the Screen.


#Using the useBlockAndUsdtBalance Hook (React) :

1-Import the hook in your React component:

import { useBlockAndUsdtBalance } from './hooks/BlockAndUsdtBalance'; // Adjust path as needed

2-Use it within your component to access data:

function MyComponent() {
  const { blockNumber, usdtBalance, error } = useBlockAndUsdtBalance();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>Block Number: {blockNumber}</p>
      <p>USDT Balance: {usdtBalance}</p>
    </div>
  );
}


-Running Unit Tests :

1- Execute the following command: npm vitest

This will run the tests and report on their success or failure


- API Reference (hooks/BlockAndUsdtBalance.ts)

The useBlockAndUsdtBalance hook retrieves both the block number and USDT balance using external APIs. Here's its signature and basic usage:

// hooks/BlockAndUsdtBalance.ts

export const useBlockAndUsdtBalance: () => {
  blockNumber: number | null;
  usdtBalance: number | null;
  error: string | null;
};

// Usage in your React component

function MyComponent() {
  const { blockNumber, usdtBalance, error } = useBlockAndUsdtBalance();
  // ...
}


