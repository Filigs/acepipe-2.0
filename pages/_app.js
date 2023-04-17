import Layout from "@/components/layout";
import "typeface-roboto";
import "@/styles/globals.css";
import BackToTopButton from "@/utils/scrollButton";
import "in-viewport";
import LanguageContext from "@/utils/languageContext";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <BackToTopButton />
    </Layout>
  );
}
