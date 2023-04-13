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
          <meta property="og:url" content="https://www.acepipe.pt" />
          <meta property="og:title" content="Acepipe - Albufeira" />
          <meta property="og:description" content="Acepipe - Albufeira" />

          <meta property="og:site_name" content="Acepipe - Albufeira" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://www.acepipe.pt" />
          <meta name="twitter:creator" content="Acepipe - Albufeira" />
        </Head>
        {/* <!-- Google tag (gtag.js) --> */}

        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
