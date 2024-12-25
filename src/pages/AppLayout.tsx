import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <main className="h-dvh w-dvw bg-slate-300">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
