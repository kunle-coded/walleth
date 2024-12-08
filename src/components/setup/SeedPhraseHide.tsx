import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";

interface CreatePasswordProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SeedPhraseHide({ onClick }: CreatePasswordProps) {
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

      <div className="flex mt-8 p-4 text-secondary-900 font-semibold relative">
        <ul className="flex flex-wrap gap-4 items-center justify-center backdrop-blur-md bg-white/30 relative">
          {Array.from({ length: 12 }, (_, i) => (
            <li key={i} className="px-10 py-2 bg-secondary-100 rounded">
              flex
            </li>
          ))}
        </ul>
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
      </div>

      <ButtonWrapper>
        <Button type="primary" isDisabled onClick={onClick}>
          Continue
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default SeedPhraseHide;
