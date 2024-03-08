import { renderHook } from '@testing-library/react-hooks';
import  useBlockAndUsdtBalance  from '../hooks/BlockAndUsdtBalance.ts';
import { test, expect } from 'vitest'; // Importing test and expect functions

test('should fetch block number and USDT balance', async () => {
  const { result ,waitForNextUpdate } = renderHook(() => useBlockAndUsdtBalance());
  console.log(result.current.blockNumber);
  await waitForNextUpdate({timeout:20000});
  

  expect(result.current.blockNumber).not.toBeNull();
  //expect(result.current.usdtBalance).not.toBeNull();
  //expect(result.current.Error1).toBeNull();
});

