import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const { double, addTwo, subtractSeven } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 hour',
  retry: {
    maximumAttempts: Infinity,
  },
});

export const veryFancyComputation = async (amount: number) => {
  amount = await double(amount);
  amount = await addTwo(amount);
  amount = await subtractSeven(amount);

  return amount;
};
