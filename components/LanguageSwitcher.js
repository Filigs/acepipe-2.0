import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import logo from "@/public/brand.png";

const LanguageSwitcher = ({ setLanguage }) => {
  const [activeLanguage, setActiveLanguage] = useState("pt");

  const changeLanguage = (lang) => {
    setActiveLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className={styles.logoContainer}>
      <Image src={logo} alt="Company Logo" className={styles.logo} />
      <div className={styles.languageSwitcher}>
        <button
          className={`${styles.languageButton} ${
            styles.languageButtonPrimary
          } ${activeLanguage === "pt" ? styles.languageButtonActive : ""}`}
          onClick={() => changeLanguage("pt")}
        >
          PT
        </button>
        <button
          className={`${styles.languageButton} ${
            styles.languageButtonSecondary
          } ${activeLanguage === "en" ? styles.languageButtonActive : ""}`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
