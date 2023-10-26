import { addTwo, double, subtractSeven } from './activities';

export const veryFancyComputation = async (amount: number) => {
  amount = await double(amount);
  amount = await addTwo(amount);
  amount = await subtractSeven(amount);

  return amount;
};

const result = await veryFancyComputation(10);

console.log('Everything worked… this time.', { result });
