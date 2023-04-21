// LanguageSwitcher.js
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import logo from "@/public/brand.png";
import SocialLinks from "./socialLinks";
import { useLanguage } from "@/utils/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className={styles.logoContainer}>
      <Image src={logo} alt="Company Logo" className={styles.logo} />
      <div className={styles.languageSwitcher}>
        <button
          className={`${styles.languageButton} ${
            styles.languageButtonPrimary
          } ${language === "pt" ? styles.languageButtonActive : ""}`}
          onClick={() => changeLanguage("pt")}
        >
          PT
        </button>
        <button
          className={`${styles.languageButton} ${
            styles.languageButtonSecondary
          } ${language === "en" ? styles.languageButtonActive : ""}`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
      </div>
      <SocialLinks />
      {/* <div className="mt-2 font- text-secondary">
        {language === "pt" ? "Siga-nos" : "Follow us"}
      </div> */}
    </div>
  );
};

export default LanguageSwitcher;
