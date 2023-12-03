export const GetRandomNumbers = (
  amount: number,
  from: number,
  to: number
): number[] | undefined => {
  if (to - from < amount) return undefined;
  let result: number[] = [];
  while (result.length < amount) {
    const randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
    if (result.find((number) => number === randomNumber) != null) continue;
    result.push(randomNumber);
  }
  return result;
};
