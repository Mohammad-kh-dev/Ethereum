import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import  useBlockAndUsdtBalance  from '../hooks/BlockAndUsdtBalance.ts';
import { test, expect } from 'vitest'; // Importing test and expect functions

test('should fetch block number and USDT balance', async () => {
  const { result ,waitForNextUpdate } = renderHook(() => useBlockAndUsdtBalance());
  
  await waitForNextUpdate();
  await waitFor(() => {
    //return result.current.usdtBalance !== null;
    expect(result.current.blockNumber).not.toBeNull();
    expect(result.current.usdtBalance).not.toBeNull();
    expect(result.current.Error1).toBeNull();
  });

 
  
});

