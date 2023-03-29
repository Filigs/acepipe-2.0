// import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import React from "react";
import NavBar from "./nav/navbar";
import BurgerMenu from "./nav/Menu";
import { ViewportHook } from "./viewportHook";

export default function Layout({ children }) {
  const isBreakpoint = ViewportHook(768);
  return (
    <div id="outer-container">
      <NavBar />

      <main
        className="grid h-full grid-cols-1 mx-auto overflow-auto bg-transparent dark:bg-transparent lg:max-w-screen-xl"
        id="page-wrap"
      >
        <div className="mx-3">
          {isBreakpoint ? <BurgerMenu /> : <></>}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
