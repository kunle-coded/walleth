import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="">
      <Outlet />
    </main>
  );
}

export default AppLayout;
