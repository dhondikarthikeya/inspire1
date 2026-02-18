import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopInstant from "../components/ScrollToTopInstant";

export default function SiteLayout() {
  return (
    <>
      <Header />

      {/* Keeps correct history restoration */}
      <ScrollRestoration getKey={(location) => location.pathname} />

      {/* Ensures "new page opens at top" BEFORE paint (no visible scroll) */}
      <ScrollToTopInstant />

      <main style={{ minHeight: "70vh", overflow: "visible" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
