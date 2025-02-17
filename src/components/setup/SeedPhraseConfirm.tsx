import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addSetupStep, nextStep } from "../../slices/setupSlice";
import { getUser } from "../../slices/userSlice";
import generateRandomNumArray from "../../helpers/generateRandomNumArray";
import shuffleArray from "../../helpers/shuffleArray";

function SeedPhraseConfirm() {
  const [isPhraseMatched, setIsPhraseMatched] = useState(false);
  const { mnemonic } = useSelector(getUser);
  const [shuffledMnemonic, setShuffledMnemonic] = useState<string[]>([]);
  const [wordsToMatch, setWordsToMatch] = useState<number[]>(
    generateRandomNumArray(mnemonic.split(" ").length)
  );
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (mnemonic) {
      setShuffledMnemonic(shuffleArray(mnemonic.split(" ")));
    }
  }, [mnemonic]);

  useEffect(() => {
    if (matchedIndices.length === 3 && selected.length === 3) {
      let matchedCount = 0;

      wordsToMatch.forEach((value, index) => {
        // Ensure value is a valid index for seedPhrase NOTE Remove the minus 1s after generating 3 numbers btw 0 and 11
        if (value < mnemonic.split(" ").length && index < selected.length) {
          const seedValue = mnemonic.split(" ")[value - 1];
          const selectedValue = selected[index];

          if (seedValue === selectedValue) {
            matchedCount++;
          }
        }
      });

      setIsPhraseMatched(matchedCount === 3);
    }
  }, [matchedIndices, mnemonic, selected, wordsToMatch]);

  function handleWordSelection(item: React.MouseEvent<HTMLLIElement>) {
    if (selected.length === 3) return;

    const target = item.target as HTMLElement;
    const selectedIndex = Number(target.dataset.index);
    const selectedWord = target.textContent as string;

    setMatchedIndices((prev: number[]) => [...prev, selectedIndex]);
    setSelected((prevState: string[]) => [...prevState, selectedWord]);
  }

  function handleSecureComplete(value: React.MouseEvent<HTMLButtonElement>) {
    const target = value.target as HTMLElement;

    if (target.textContent === "Try again" && !isPhraseMatched) {
      setWordsToMatch(generateRandomNumArray(mnemonic.split(" ").length));
      setShuffledMnemonic(shuffleArray(mnemonic.split(" ")));
      setMatchedIndices(() => []);
      setSelected(() => []);
      setIsPhraseMatched(false);
    } else if (target.textContent === "Continue" && isPhraseMatched) {
      dispatch(nextStep("complete_setup"));
      dispatch(addSetupStep("complete_setup"));
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
              mnemonic.split(" ")[wordsToMatch[0] - 1] === selected[0]
                ? "bg-success-200 text-green-700"
                : selected.length >= 1 &&
                  mnemonic.split(" ")[wordsToMatch[0] - 1] !== selected[0]
                ? "bg-red-300 text-red-900"
                : "border border-dashed border-secondary-400"
            }`}
          >
            {selected[0] ? selected[0] : wordsToMatch[0]}
          </li>
          <li
            className={`py-2 w-full rounded-lg text-center ${
              mnemonic.split(" ")[wordsToMatch[1] - 1] === selected[1]
                ? "bg-success-200 text-green-700"
                : selected.length >= 2 &&
                  mnemonic.split(" ")[wordsToMatch[1] - 1] !== selected[1]
                ? "bg-red-300 text-red-900"
                : "border border-dashed border-secondary-400"
            }`}
          >
            {selected[1] ? selected[1] : wordsToMatch[1]}
          </li>
          <li
            className={`py-2 w-full rounded-lg text-center ${
              mnemonic.split(" ")[wordsToMatch[2] - 1] === selected[2]
                ? "bg-success-200 text-green-700"
                : selected.length >= 3 &&
                  mnemonic.split(" ")[wordsToMatch[2] - 1] !== selected[2]
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
          {shuffledMnemonic.map((value, i) => (
            <li
              key={i}
              data-index={i + 1}
              className={`w-28 px-2 py-2 text-center rounded ${
                matchedIndices.includes(i + 1)
                  ? "bg-[#FBFBFB] text-[#DDDFE4] cursor-not-allowed"
                  : "bg-secondary-100 cursor-pointer"
              } ${selected.length === 3 && "cursor-auto"}`}
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
          onClick={handleSecureComplete}
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
