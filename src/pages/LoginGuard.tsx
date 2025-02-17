import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../slices/userSlice";

function LoginGuard({ children }: PropsWithChildren) {
  const { isLogin } = useSelector(getUser);
  return !isLogin ? children : <Navigate to="/home" replace />;
}

export default LoginGuard;
