import React from "react";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import Secure from "../icons/Secure";

interface CreatePasswordProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SecureComplete({ onClick }: CreatePasswordProps) {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="block mt-8">
        <Secure />
      </div>
      <div className="mb-2">
        <p className="text-lg font-bold mb-2">Congratulations</p>
        <p className="text-sm my-5">
          You've successfully protected your wallet. Remember to keep your seed
          phrase safe, it's your responsibility!
        </p>
        <a href="" className="text-sm font-bold text-blue-700 underline">
          Leave yourself a hint?
        </a>
        <p className="text-sm my-5">
          Walleth cannot recover your wallet should you lose it. You can find
          your seedphrase in{" "}
          <span className="font-bold">Setting {">"} Security & Privacy</span>
        </p>

        <a href="" className="text-sm font-bold text-blue-700 underline">
          Learn more
        </a>
      </div>

      <ButtonWrapper>
        <Button type="primary" onClick={onClick}>
          Continue
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default SecureComplete;
