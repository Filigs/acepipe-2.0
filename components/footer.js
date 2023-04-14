import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.disclaimer}>Images are merely illustrative</p>
      </div>
    </footer>
  );
};

export default Footer;
