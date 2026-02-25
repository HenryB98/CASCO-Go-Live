import { Outlet, useLocation } from "react-router";
import { useEffect, useLayoutEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Root() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, key]);

  return (
    <div className="site-shell w-screen min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="site-main flex-grow w-full pt-16 lg:pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
