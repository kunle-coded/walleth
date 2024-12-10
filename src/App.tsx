import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Welcome from "./pages/Welcome";
import Onboarding from "./pages/Onboarding";
import { AccountProvider } from "./contexts/AccountContext";

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
    element: <AppLayout />,
  },
]);

function App() {
  return (
    <AccountProvider>
      <RouterProvider router={router} />
    </AccountProvider>
  );
}

export default App;
