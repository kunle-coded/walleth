import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import { GlobalProvider } from "./contexts/GlobalContext";
import { PopupProvider } from "./contexts/PopupContext";
import Login from "./pages/Login";
import Protected from "./pages/Protected";
import init from "./services/init";
import SetupGuard from "./pages/SetupGuard";
import getNewUserStatus from "./services/getNewUserStatus";
import LoginGuard from "./pages/LoginGuard";
import deleteUser from "./services/deleteUser";

// deleteUser();

const userExists = await getNewUserStatus();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SetupGuard isNewUser={userExists}>
        <Welcome />
      </SetupGuard>
    ),
  },
  {
    path: `/setup`,
    element: (
      <SetupGuard isNewUser={userExists}>
        <Onboarding />
      </SetupGuard>
    ),
  },
  {
    path: "/unlock",
    element: (
      <LoginGuard>
        <Login />
      </LoginGuard>
    ),
  },
  {
    path: "/home",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
]);

function App() {
  init();
  return (
    <GlobalProvider>
      <PopupProvider>
        <RouterProvider router={router} />
      </PopupProvider>
    </GlobalProvider>
  );
}

export default App;
