import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";

interface CreatePasswordProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SeedPhraseConfirm({ onClick }: CreatePasswordProps) {
  const [isPhraseMatched, setIsPhraseMatched] = useState(false);
  const [wordsToMatch] = useState<number[]>([1, 8, 12]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);

  useEffect(() => {
    if (matchedIndices.length === 3) {
      let matchedCount = 0;
      matchedIndices.forEach((value, index) => {
        if (value === wordsToMatch[index]) {
          matchedCount++;
        }
      });

      if (matchedCount === 3) {
        setIsPhraseMatched(true);
      } else {
        setIsPhraseMatched(false);
      }
    }
  }, [matchedIndices, wordsToMatch]);

  function handleWordSelection(selected: React.MouseEvent<HTMLUListElement>) {
    const target = selected.target as HTMLElement;
    const selectedIndex = Number(target.dataset.index);

    if (
      wordsToMatch.includes(selectedIndex) &&
      !matchedIndices.includes(selectedIndex)
    ) {
      setMatchedIndices((prev) => [...prev, selectedIndex]);
    } else {
      return;
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
              wordsToMatch[0] === matchedIndices[0]
                ? "bg-success-200 text-green-700"
                : matchedIndices.length >= 1 &&
                  wordsToMatch[0] !== matchedIndices[0]
                ? "bg-red-300 text-red-900"
                : "border border-dashed border-secondary-400"
            }`}
          >
            {matchedIndices[0] ? "flex" : wordsToMatch[0]}
          </li>
          <li
            className={`py-2 w-full rounded-lg text-center ${
              wordsToMatch[1] === matchedIndices[1]
                ? "bg-success-200 text-green-700"
                : matchedIndices.length >= 2 &&
                  wordsToMatch[1] !== matchedIndices[1]
                ? "bg-red-300 text-red-900"
                : "border border-dashed border-secondary-400"
            }`}
          >
            {matchedIndices[1] ? "flex" : wordsToMatch[1]}
          </li>
          <li
            className={`py-2 w-full rounded-lg text-center ${
              wordsToMatch[2] === matchedIndices[2]
                ? "bg-success-200 text-green-700"
                : matchedIndices.length >= 3 &&
                  wordsToMatch[2] !== matchedIndices[2]
                ? "bg-red-300 text-red-900"
                : "border border-dashed border-secondary-400"
            }`}
          >
            {matchedIndices[2] ? "flex" : wordsToMatch[2]}
          </li>
        </ul>
      </div>

      <div className="flex mt-8 mb-16 p-4 text-secondary-900 font-normal relative">
        <ul
          className="flex flex-wrap gap-4 items-center justify-center relative"
          onClick={handleWordSelection}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <li
              key={i}
              data-index={i + 1}
              className={`w-28 px-2 py-2 text-center rounded ${
                matchedIndices.includes(i + 1)
                  ? "bg-[#FBFBFB] text-[#DDDFE4]"
                  : "bg-secondary-100 cursor-pointer"
              }`}
            >
              flex
            </li>
          ))}
        </ul>
      </div>

      <ButtonWrapper>
        <Button
          type="primary"
          isDisabled={
            matchedIndices.length === 3 && !isPhraseMatched
              ? isPhraseMatched
              : !isPhraseMatched
          }
          onClick={onClick}
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
