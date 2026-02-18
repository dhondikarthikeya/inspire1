import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <>
      <Header />

      {/* Production scroll handling */}
      <ScrollRestoration getKey={(location) => location.pathname} />

      <Outlet />
    </>
  );
}
