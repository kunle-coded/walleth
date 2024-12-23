import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";

interface CreatePasswordProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SeedPhraseConfirm({ onClick }: CreatePasswordProps) {
  const [isPhraseMatched, setIsPhraseMatched] = useState(false);
  const [seedPhrase] = useState<string[]>([
    "toy",
    "flex",
    "flex",
    "toy",
    "flex",
    "flex",
    "flex",
    "flex",
    "flex",
    "toy",
    "flex",
    "flex",
  ]);
  const [wordsToMatch] = useState<number[]>([1, 8, 12]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (matchedIndices.length === 3 && selected.length === 3) {
      let matchedCount = 0;

      wordsToMatch.forEach((value, index) => {
        // Ensure value is a valid index for seedPhrase NOTE Remove the minus 1s after generating 3 numbers btw 0 and 11
        if (value - 1 < seedPhrase.length && index < selected.length) {
          const seedValue = seedPhrase[value - 1];
          const selectedValue = selected[index];
          const selectedIndex = matchedIndices[index];

          if (seedValue === selectedValue && value === selectedIndex) {
            matchedCount++;
          }
        }
      });

      setIsPhraseMatched(matchedCount === 3);
    }
  }, [matchedIndices, seedPhrase, selected, wordsToMatch]);

  function handleWordSelection(item: React.MouseEvent<HTMLLIElement>) {
    if (selected.length === 3) return;

    const target = item.target as HTMLElement;
    const selectedIndex = Number(target.dataset.index);
    const selectedWord = target.textContent as string;

    setMatchedIndices((prev: number[]) => [...prev, selectedIndex]);
    setSelected((prevState: string[]) => [...prevState, selectedWord]);
  }

  function handleReset(value: React.MouseEvent<HTMLButtonElement>) {
    const target = value.target as HTMLElement;

    if (target.textContent === "Try again" && !isPhraseMatched) {
      setMatchedIndices(() => []);
      setSelected(() => []);
      setIsPhraseMatched(false);
    } else if (target.textContent === "Continue" && isPhraseMatched) {
      onClick(value);
    }
  }

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="mb-2">
        <p className="text-lg font-bold mb-2">Confirm Seed Phrase</p>
      </div>

      <div className="flex flex-col mt-5 p-4 rounded-lg bg-secondary-100">
        <p>Select each word in the order it was presented to you</p>
        <ul className="flex justify-between gap-5 mt-5 text-sm">
          <li
            className={`py-2 w-full rounded-lg text-center ${
              seedPhrase[wordsToMatch[0] - 1] === selected[0] &&
              matchedIndices[0] === wordsToMatch[0]
                ? "bg-success-200 text-green-700"
                : selected.length >= 1 && matchedIndices[0] !== wordsToMatch[0]
                ? "bg-red-300 text-red-900"
                : "border border-dashed border-secondary-400"
            }`}
          >
            {selected[0] ? selected[0] : wordsToMatch[0]}
          </li>
          <li
            className={`py-2 w-full rounded-lg text-center ${
              seedPhrase[wordsToMatch[1] - 1] === selected[1] &&
              matchedIndices[1] === wordsToMatch[1]
                ? "bg-success-200 text-green-700"
                : selected.length >= 2 && matchedIndices[1] !== wordsToMatch[1]
                ? "bg-red-300 text-red-900"
                : "border border-dashed border-secondary-400"
            }`}
          >
            {selected[1] ? selected[1] : wordsToMatch[1]}
          </li>
          <li
            className={`py-2 w-full rounded-lg text-center ${
              seedPhrase[wordsToMatch[2] - 1] === selected[2] &&
              matchedIndices[2] === wordsToMatch[2]
                ? "bg-success-200 text-green-700"
                : selected.length >= 3 &&
                  matchedIndices[2] !== wordsToMatch[2] &&
                  selected.length
                ? "bg-red-300 text-red-900"
                : "border border-dashed border-secondary-400"
            }`}
          >
            {selected[2] ? selected[2] : wordsToMatch[2]}
          </li>
        </ul>
      </div>

      <div className="flex mt-8 mb-16 p-4 text-secondary-900 font-normal relative">
        <ul className="flex flex-wrap gap-4 items-center justify-center relative">
          {seedPhrase.map((value, i) => (
            <li
              key={i}
              data-index={i + 1}
              className={`w-28 px-2 py-2 text-center rounded ${
                matchedIndices.includes(i + 1)
                  ? "bg-[#FBFBFB] text-[#DDDFE4]"
                  : "bg-secondary-100 cursor-pointer"
              }`}
              onClick={handleWordSelection}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <ButtonWrapper>
        <Button
          type="primary"
          isDisabled={matchedIndices.length < 3 && !isPhraseMatched}
          onClick={handleReset}
        >
          {matchedIndices.length === 3 && !isPhraseMatched
            ? "Try again"
            : "Continue"}
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default SeedPhraseConfirm;
