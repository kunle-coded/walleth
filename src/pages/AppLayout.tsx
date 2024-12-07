import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header>Header nav</header>
      <main className="h-dvh w-dvw bg-slate-300">
        <Outlet />
      </main>
      <footer>footer credit</footer>
    </>
  );
}

export default AppLayout;
