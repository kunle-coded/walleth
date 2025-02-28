import { useDispatch, useSelector } from "react-redux";
import { finishSetup, getAccountSetup } from "../../slices/setupSlice";
import { authUser, getUser } from "../../slices/userSlice";
import createAccount from "../../db/createAccount";
import ButtonWrapper from "../../ui/ButtonWrapper";
import UnSecure from "../icons/UnSecure";
import LinkButton from "../../ui/LinkButton";

// interface CreatePasswordProps {
//   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

function NotSecureComplete() {
  const { isImport, password } = useSelector(getAccountSetup);
  const { mnemonic } = useSelector(getUser);

  const dispatch = useDispatch();

  async function completeSetup() {
    if (mnemonic) {
      await createAccount(password, mnemonic, false)
        .then(() => {
          dispatch(authUser(true));
          dispatch(finishSetup());
        })
        .catch((error) => {
          console.log("error creating account", error);
          // dispatch(loginUser(true));
          // dispatch(finishSetup());
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
        <UnSecure />
      </div>
      <div className="mb-2">
        <p className="text-lg font-bold mb-2">Congratulations</p>
        <p className="text-sm my-5">
          You've successfully created your Walleth. Remember to keep your
          account safe, it's your responsibility!
        </p>
        <p className="text-sm my-5">
          Walleth cannot recover your wallet should you lose it. You can find
          your seedphrase in{" "}
          <span className="font-bold">Setting {">"} Security & Privacy</span>
        </p>

        <a href="" className="text-sm font-bold text-blue-700 underline">
          Secure Now
        </a>
      </div>

      <ButtonWrapper>
        <LinkButton type="primary" href="/home" onClick={completeSetup}>
          Continue
        </LinkButton>
      </ButtonWrapper>
    </div>
  );
}

export default NotSecureComplete;
