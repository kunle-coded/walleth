export default function shuffleArray(array: string[]) {
  const newArray = [...array];
  const length = newArray.length;

  //   const minCeiled = Math.ceil(1);
  //   const maxFloored = Math.floor(array.length);

  for (let i = 0; i < length; i++) {
    const randomPosition = Math.floor((newArray.length - i) * Math.random());
    const randomItem: string[] = newArray.splice(randomPosition, 1);
    newArray.push(...randomItem);
  }
  return newArray;
}
