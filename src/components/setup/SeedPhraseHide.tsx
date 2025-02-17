import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSetupStep, nextStep } from "../../slices/setupSlice";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import Hidden from "../icons/Hidden";
import { getMnemonic, getUser } from "../../slices/userSlice";

function SeedPhraseHide() {
  const [isRevealPhrase, setIsRevealPhrase] = useState(false);
  const { mnemonic } = useSelector(getUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMnemonic());
  }, [dispatch]);

  function handleRevealPhrase() {
    setIsRevealPhrase(true);
  }

  function handleSeedConfirm() {
    dispatch(nextStep("confirm_seed_phrase"));
    dispatch(addSetupStep("confirm_seed_phrase"));
  }

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="mb-2">
        <p className="text-lg font-bold mb-2">Write Down Your Seed Phrase</p>
        <p className="text-secondary-500 mt-2">
          This is your seed phrase. Write it down on a paper and keep it in a
          safe place. You'll be asked to re-enter this phrase (in order) on the
          next step.
        </p>
      </div>

      <div className="flex mt-8 mb-20 p-4 text-secondary-900 font-semibold relative">
        <ul className="flex flex-wrap gap-4 items-center justify-center relative">
          {mnemonic.split(" ").map((seed, index) => (
            <li
              key={index}
              className="w-28 px-2 py-2 bg-secondary-200 text-left rounded"
            >
              {index + 1}. {seed}
            </li>
          ))}
        </ul>

        {!isRevealPhrase && (
          <div
            className="absolute inset-0 backdrop-blur-[4px] bg-black/50 rounded-xl cursor-pointer"
            onClick={handleRevealPhrase}
          >
            <div className="flex flex-col justify-center items-center gap-2 h-full text-white">
              <Hidden />
              <p className="text-lg font-bold">
                Tap to reveal your seed phrase
              </p>
              <p className="text-sm font-normal">
                Make sure no one is watching your screen.
              </p>
            </div>
          </div>
        )}
      </div>

      <ButtonWrapper>
        <Button
          type="primary"
          isDisabled={!isRevealPhrase}
          onClick={handleSeedConfirm}
        >
          Continue
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default SeedPhraseHide;
