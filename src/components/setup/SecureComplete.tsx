import ButtonWrapper from "../../ui/ButtonWrapper";
import Secure from "../icons/Secure";
import LinkButton from "../../ui/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import { finishSetup, getAccountSetup } from "../../slices/setupSlice";
import { getUser, authUser } from "../../slices/userSlice";
import createAccount from "../../db/createAccount";
import { useNavigate } from "react-router-dom";

function SecureComplete() {
  const { isImport, password } = useSelector(getAccountSetup);
  const { mnemonic } = useSelector(getUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSetupComplete() {
    if (mnemonic) {
      await createAccount(password, mnemonic, true)
        .then(() => {
          dispatch(authUser(true));
          dispatch(finishSetup());
          navigate("/home");
        })
        .catch((error) => {
          console.log("error creating account", error);
          // dispatch(loginUser(true));
        });
    } else {
      // dispatch(loginUser(true));
      // dispatch(finishSetup());
      console.log("Something went wrong. Try again!");
    }
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
        <LinkButton type="primary" href="" onClick={handleSetupComplete}>
          Continue
        </LinkButton>
      </ButtonWrapper>
    </div>
  );
}

export default SecureComplete;
