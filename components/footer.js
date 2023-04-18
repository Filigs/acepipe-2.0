import React, { useEffect, useState } from "react";
import styles from "@/styles/Footer.module.css";

const Footer = ({ language }) => {
  const [disclaimerText, setDisclaimerText] = useState("");
  const [secondDisclaimerText, setSecondDisclaimerText] = useState("");
  const [thirdDisclaimerText, setThirdDisclaimerText] = useState("");

  useEffect(() => {
    const updateText = () => {
      if (language === "pt") {
        setDisclaimerText("As imagens são meramente ilustrativas");
        setSecondDisclaimerText(
          "Todos os preços incluem IVA à taxa legal em vigor"
        );
        setThirdDisclaimerText(
          "Em caso de alergias ou intolerâncias, por favor informe-nos"
        );
      } else {
        setDisclaimerText("Images are merely illustrative");
        setSecondDisclaimerText(
          "All prices include VAT at the legal rate in force"
        );
        setThirdDisclaimerText(
          "Please inform us of any allergie or intolerance you may have"
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
        <p className={styles.disclaimer}>{thirdDisclaimerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
