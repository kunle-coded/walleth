import React from "react";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";

interface ImportProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ImportOption({ onClick }: ImportProps) {
  return (
    <div className="mt-24 w-full flex flex-col items-center">
      <h2 className="text-4xl mb-2">Setup Wallet</h2>
      <p className="text-center">
        Import an existing wallet or create a new one
      </p>

      <ButtonWrapper>
        <Button type="secondary">Import using seed phrase</Button>
        <Button type="primary" onClick={onClick}>
          Create a new wallet
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default ImportOption;
