import Layout from "@/components/layout";
import "typeface-roboto";
import "@/styles/globals.css";
import BackToTopButton from "@/utils/scrollButton";
import "in-viewport";
import { LanguageProvider } from "../utils/LanguageContext";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
        <BackToTopButton />
        <Analytics />
      </Layout>
    </LanguageProvider>
  );
}
