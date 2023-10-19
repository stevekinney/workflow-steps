import { randomlyFail } from '../utilities/randomly-fail';

export const double = async (value: number): Promise<number> => {
  randomlyFail();
  return value * 2;
};

export const addTwo = async (value: number): Promise<number> => {
  randomlyFail();
  return value + 2;
};

export const subtractSeven = async (value: number): Promise<number> => {
  randomlyFail();
  return value - 7;
};
