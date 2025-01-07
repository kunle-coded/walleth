import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Onboarding from "./pages/Onboarding";
import { AccountProvider } from "./contexts/AccountContext";
import Home from "./pages/Home";
import { GlobalProvider } from "./contexts/GlobalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/setup",
    element: <Onboarding />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <GlobalProvider>
      <AccountProvider>
        <RouterProvider router={router} />
      </AccountProvider>
    </GlobalProvider>
  );
}

export default App;
