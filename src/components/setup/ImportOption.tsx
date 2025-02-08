// import React from "react";
import { useDispatch } from "react-redux";
import {
  nextStep,
  addSetupStep,
  setImportSeed,
} from "../../slices/accountSlice";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import stopPropagation from "../../helpers/stopPropagation";

function ImportOption() {
  const dispatch = useDispatch();

  function handleNextStep() {
    dispatch(nextStep("create_password"));
    dispatch(addSetupStep("create_password"));
  }

  function handleImport() {
    dispatch(setImportSeed(true));
    dispatch(nextStep("import_seed"));
    dispatch(addSetupStep("import_seed"));
  }

  return (
    <div
      className="mt-24 w-full flex flex-col items-center"
      onClick={stopPropagation}
    >
      <h2 className="text-4xl mb-2">Setup Wallet</h2>
      <p className="text-center">
        Import an existing wallet or create a new one
      </p>

      <ButtonWrapper>
        <Button type="secondary" onClick={handleImport}>
          Import using seed phrase
        </Button>
        <Button type="primary" onClick={handleNextStep}>
          Create a new wallet
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default ImportOption;
