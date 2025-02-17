export default function generateRandomNumArray(maxValue: number): number[] {
  const randomNumArray: number[] = [];

  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(maxValue);

  for (let i = 0; i < maxValue; i++) {
    const randomValue = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    );
    const isInArray = randomNumArray.find((number) => number === randomValue);

    if (!isInArray) {
      randomNumArray.push(randomValue);
    }
    if (randomNumArray.length === 3) break;
  }

  return randomNumArray;
}
