import Layout from "@/components/layout";
import "typeface-roboto";
import "@/styles/globals.css";
import BackToTopButton from "@/utils/scrollButton";
import "in-viewport";
import { LanguageProvider } from "../utils/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
        <BackToTopButton />
      </Layout>
    </LanguageProvider>
  );
}
