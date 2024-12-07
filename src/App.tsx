import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Welcome from "./pages/Welcome";
import Onboarding from "./pages/Onboarding";

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
  return <RouterProvider router={router} />;
}

export default App;
