import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../slices/userSlice";

function Protected({ children }: PropsWithChildren) {
  const { isLogin } = useSelector(getUser);
  return isLogin ? children : <Navigate to="/unlock" replace />;
}

export default Protected;
