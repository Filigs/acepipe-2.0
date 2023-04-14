// CollapsibleCategoryCard.js
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import cardStyles from "@/styles/CollapsibleCategoryCard.module.css";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { MdRemove } from "react-icons/md";
import normalizeSrcUrl from "@/utils/normalizeSrcUrl";
import { MdExpandLess } from "react-icons/md";

function CollapsibleCategoryCard({
  title,
  language,
  products,
  setExpandedCard,
}) {
  const lowercasedTitle = normalizeSrcUrl(
    title.toLowerCase().replace(/\s+/g, "-")
  );
  const [isOpen, setIsOpen] = useState(false);
  const cardImage =
    language === "pt"
      ? `/pt/${lowercasedTitle}.jpg`
      : `/en/${lowercasedTitle}.jpg`;

  const toggleOpen = () => {
    if (isOpen) {
      setExpandedCard(null);
    } else {
      setExpandedCard(title);
    }
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, height: "auto", scaleY: 1 },
    closed: { opacity: 0, height: 0, scaleY: 0.8 },
  };

  return (
    <div className={styles.categoryCard}>
      {!isOpen && (
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <Image
              src={cardImage}
              alt={title}
              fill
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardTitle}>{title}</div>
          <div>
            <button className={styles.cardButton} onClick={toggleOpen}>
              {language === "pt" ? "Mostrar mais" : "Show more"}
            </button>
          </div>
        </div>
      )}
      {isOpen && (
        <>
          <div className={cardStyles.cardTitle}>
            <h3 className={cardStyles.cardTitleText}>{title}</h3>
            <button onClick={toggleOpen}>
              <MdRemove className={cardStyles.closeIcon} />
            </button>
          </div>

          <motion.div
            className={`${styles.collapsibleContent} ${cardStyles.collapsibleContent}`}
            variants={variants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={language === "pt" ? product.nome : product.nome_en}
                ingredients={
                  language === "pt"
                    ? product.ingredientes
                    : product.ingredientes_en
                }
                price={product.preco}
                className={[styles.cards, styles.categoryLabel]}
              />
            ))}
            <div className={styles.closeButtonWrapper}>
              <button onClick={toggleOpen}>
                <MdExpandLess className={cardStyles.closeIcon} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default CollapsibleCategoryCard;
