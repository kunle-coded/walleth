import ButtonWrapper from "../../ui/ButtonWrapper";
import Secure from "../icons/Secure";
import LinkButton from "../../ui/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import { getAccountSetup } from "../../slices/accountSlice";
import { updatePassword } from "../../slices/userSlice";

function SecureComplete() {
  const { isImport, password } = useSelector(getAccountSetup);

  const dispatch = useDispatch();

  function handleSetupComplete() {
    dispatch(updatePassword(password));
    // dispatch(finishSetup());
  }

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="block mt-8">
        <Secure />
      </div>
      <div className="mb-2">
        <p className="text-lg font-bold mb-2">Congratulations</p>
        <p className="text-sm my-5">
          {`You've successfully ${
            isImport ? "imported" : "protected"
          } your wallet. Remember to keep your seed
          phrase safe, it's your responsibility!`}
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
        <LinkButton type="primary" href="/home" onClick={handleSetupComplete}>
          Continue
        </LinkButton>
      </ButtonWrapper>
    </div>
  );
}

export default SecureComplete;
