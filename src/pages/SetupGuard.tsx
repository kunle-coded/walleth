import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

interface SetupGuardProps {
  isNewUser: boolean;
}

function SetupGuard({
  isNewUser,
  children,
}: PropsWithChildren<SetupGuardProps>) {
  return isNewUser ? children : <Navigate to="/unlock" replace />;
}

export default SetupGuard;
