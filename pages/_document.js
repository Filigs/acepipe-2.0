import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class myDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Exo&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          {/* SEO */}
          <meta name="robots" content="all" />
          {/* social media url preview */}
          <meta property="og:url" content="https://www.nunomartins.dev" />
          <meta
            property="og:title"
            content="Web Developer - Nuno Filipe Martins"
          />
          <meta
            property="og:description"
            content="My portfolio as a Freelancer Web Developer"
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/V34QtC3/website-Preview.png"
          />
          <meta
            property="og:site_name"
            content="Nuno Filipe Martins - Freelancer Web Developer"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://www.nunomartins.dev" />
          <meta
            name="twitter:creator"
            content="Nuno Filipe Martins - Freelancer Web Developer"
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/V34QtC3/website-Preview.png"
          />
        </Head>
        {/* <!-- Google tag (gtag.js) --> */}

        <body className="documentPatternMobile bg-cover lg:.documentPatternDesktop text-darkDarker bg-lighter dark:bg-darkDarker dark:text-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
