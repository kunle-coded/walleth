import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import Info from "../icons/Info";
import { addSetupStep, nextStep } from "../../slices/accountSlice";

function StartSecure() {
  const dispatch = useDispatch();

  function handleSecureStart() {
    dispatch(nextStep("hidden_seed_phrase"));
    dispatch(addSetupStep("hidden_seed_phrase"));
  }

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="mb-2">
        <p className="text-lg font-bold mb-2">Secure Your Wallet</p>
        <p className="text-secondary-900 mt-4">
          Secure your wallet's{" "}
          <span className="font-medium text-green-700">seed phrase</span>
        </p>

        <div className="flex justify-start items-center gap-3 my-4">
          <Info />
          <a href="" className="text-xs font-bold text-blue-700 underline">
            Why is it important?
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-4 p-4 bg-secondary-100 text-secondary-600 text-sm rounded-xl">
        <p>Write down your seed phrase on a paper and store in a safe place.</p>
        <p>
          Security level: <span className="text-green-700">Very strong</span>
        </p>
        <ul className="flex gap-2">
          <li className="w-8 h-2 rounded-full bg-green-700"></li>
          <li className="w-8 h-2 rounded-full bg-green-700"></li>
          <li className="w-8 h-2 rounded-full bg-green-700"></li>
          <li className="w-8 h-2 rounded-full bg-green-700"></li>
        </ul>

        <div className="flex flex-col gap-1.5">
          <p>Risks are:</p>
          <ul className="list-disc ml-3">
            <li>You lose it</li>
            <li>You forget where you put it</li>
            <li>Someone else finds it</li>
          </ul>
        </div>

        <p>Other options: Doesn't have to be paper!</p>

        <div className="flex flex-col gap-1.5">
          <p>Tips:</p>
          <ul className="list-disc ml-3">
            <li>Store in bank vault</li>
            <li>Store in a safe</li>
            <li>Store in multiple secret places</li>
          </ul>
        </div>
      </div>

      <ButtonWrapper>
        <Button type="primary" onClick={handleSecureStart}>
          Start
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default StartSecure;
