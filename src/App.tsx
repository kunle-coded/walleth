import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Onboarding from "./pages/Onboarding";
import { AccountProvider } from "./contexts/AccountContext";
import Home from "./pages/Home";
import { GlobalProvider } from "./contexts/GlobalContext";
import { PopupProvider } from "./contexts/PopupContext";

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
      <PopupProvider>
        <RouterProvider router={router} />
      </PopupProvider>
    </GlobalProvider>
  );
}

export default App;
