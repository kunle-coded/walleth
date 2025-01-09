export function addressFormatter(address: string) {
  const part1 = address.slice(0, 7);
  const part2 = address.slice(address.length - 5, address.length);

  const formatted = `${part1}...${part2}`;

  return formatted;
}
