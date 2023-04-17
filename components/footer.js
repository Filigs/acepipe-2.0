import React, { useEffect, useState } from "react";
import styles from "@/styles/Footer.module.css";

const Footer = ({ language }) => {
  const [disclaimerText, setDisclaimerText] = useState("");
  const [secondDisclaimerText, setSecondDisclaimerText] = useState("");

  useEffect(() => {
    const updateText = () => {
      if (language === "pt") {
        setDisclaimerText("As imagens são meramente ilustrativas");
        setSecondDisclaimerText(
          "Todos os preços incluem IVA à taxa legal em vigor"
        );
      } else {
        setDisclaimerText("Images are merely illustrative");
        setSecondDisclaimerText(
          "All prices include VAT at the legal rate in force"
        );
      }
    };

    updateText();
  }, [language]);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.disclaimer}>{disclaimerText}</p>
        <p className={styles.disclaimer}>{secondDisclaimerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
