export const randomlyFail = async () => {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Randomly failed!');
  }
};
