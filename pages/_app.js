import Layout from "@/components/layout";
import "typeface-roboto";
import "@/styles/globals.css";
import BackToTopButton from "@/utils/scrollButton";
import "in-viewport";
export default function App({ Component, pageProps }) {
  return (
    <Layout language={pageProps.language}>
      <Component {...pageProps} />
      <BackToTopButton />
    </Layout>
  );
}
