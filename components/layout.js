import React from "react";
import Head from "next/head";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Acepipe Cafe</title>
        <meta name="description" content="Acepipe Cafe Digital Menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
