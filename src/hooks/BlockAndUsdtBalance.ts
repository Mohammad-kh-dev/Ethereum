import { useState, useEffect } from 'react';
import { JsonRpcProvider, Contract, formatUnits } from 'ethers';
import { ETHERSCAN_API_KEY, INFURA_TOKEN, USDT_CONTRACT_ADDRESS } from '../Constants/Constant';
import axios from 'axios';

// Define a generic type for the data returned by the hook
type BlockAndBalanceData<T> = {
  blockNumber: number | null;
  usdtBalance : number | null; // Dynamically add properties based on provided type
  Error1: string | null;
};

export const useBlockAndUsdtBalance = <T = unknown>(): BlockAndBalanceData<T> => {
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [usdtBalance, setUsdtBalance] = useState<string | null>(null);
  const [Error1, setError1] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlockNumber = async () => {
      const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_TOKEN}`);
      try {
        const block = await provider.getBlockNumber();
        setBlockNumber(block);
      } catch (error) {
        console.error('Error fetching block number:', error);
        setError1('Error fetching block number:' + error);
      }
    };

    const fetchUsdtBalance = async () => {
      try {
        const abiResponse = await axios.get('https://api.etherscan.io/api', {
          params: {
            module: 'contract',
            action: 'getabi',
            address: USDT_CONTRACT_ADDRESS,
            apikey: ETHERSCAN_API_KEY, // Replace with your API key
          },
        });

        if (abiResponse.status !== 200) {
          throw new Error('Failed to fetch ABI');
        }

        const abi = abiResponse.data.result;
        const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_TOKEN}`);
        const usdtContract = new Contract(USDT_CONTRACT_ADDRESS, abi, provider);

        const balance = await usdtContract.balanceOf(USDT_CONTRACT_ADDRESS);
        const formattedBalance = formatUnits(balance, 18);
        setUsdtBalance(formattedBalance);
      } catch (error) {
        console.error('Error fetching USDT balance:', error);
        setError1('Error fetching USDT balance:' + error);
      }
    };

    fetchBlockNumber();
    fetchUsdtBalance();
  }, []);

  return { blockNumber, usdtBalance, Error1 } as BlockAndBalanceData<T>;
};

export default useBlockAndUsdtBalance;
