import { PropsWithChildren, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import getNewUserStatus from "../db/getNewUserStatus";

interface SetupGuardProps {
  isNewUser: boolean;
}

function SetupGuard({ children }: PropsWithChildren) {
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    async function checkUserStatus() {
      const userStatus = await getNewUserStatus();

      if (!userStatus) {
        setIsNewUser(true);
      }
    }

    checkUserStatus();
  }, []);

  return !isNewUser ? children : <Navigate to="/unlock" replace />;
}

export default SetupGuard;
