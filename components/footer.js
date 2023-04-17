import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const disclaimerText =
    language === "pt"
      ? "As imagens são meramente ilustrativas"
      : "Images are merely illustrative";

  const vatText =
    language === "pt"
      ? "Todos os preços incluem IVA à taxa legal em vigor"
      : "All prices include VAT at the legal rate in force";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.disclaimer}>{disclaimerText}</p>
        <p className={styles.disclaimer}>{vatText}</p>
      </div>
    </footer>
  );
};

export default Footer;
