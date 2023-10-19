const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const randomlyFail = async () => {
  const random = Math.random();
  if (random < 0.5) {
    await sleep(5000);
    throw new Error('Randomly failed!');
  }
};
