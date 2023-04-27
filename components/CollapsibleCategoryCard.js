// CollapsibleCategoryCard.js
import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import cardStyles from "@/styles/CollapsibleCategoryCard.module.css";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { MdRemove, MdExpandLess } from "react-icons/md";
import normalizeSrcUrl from "@/utils/normalizeSrcUrl";
import { categoryOrderEN, categoryOrderPT } from "@/public/lib/categories";
import { useLanguage } from "@/utils/LanguageContext";

function CollapsibleCategoryCard({
  title,
  products,
  expandedCard,
  setExpandedCard,
}) {
  const isOpen = expandedCard === title;
  const lowercasedTitle = normalizeSrcUrl(
    title.toLowerCase().replace(/\s+/g, "-")
  );
  const { language } = useLanguage();

  const toggleOpen = () => {
    if (isOpen) {
      setExpandedCard(null);
    } else {
      setExpandedCard(title);
    }
  };

  // acompanhamentos
  const highlightTexts = {
    "Tostas e Torradas": {
      pt: "Ao adicionar batatas fritas acresce o valor de 2€",
      en: "Adding fries adds the value of 2€",
    },
    Baguetes: {
      pt: "Ao adicionar batatas fritas acresce o valor de 2€",
      en: "Adding fries adds the value of 2€",
    },
    "Bacon Rolls": {
      pt: "Ao adicionar batatas fritas acresce o valor de 2€",
      en: "Adding fries adds the value of 2€",
    },
    Hambúrgueres: {
      pt: "Todos os hambúrgueres incluem batatas fritas",
      en: "All burgers include fries",
    },
    Crepes: {
      pt: "Ao adicionar uma bola de gelado acresce o valor de 2€",
      en: "Adding a scoop of ice cream adds the value of 2€",
    },
    Panquecas: {
      pt: "Ao adicionar uma bola de gelado acresce o valor de 2€",
      en: "Adding a scoop of ice cream adds the value of 2€",
    },
    "Bubble Waffles": {
      pt: "",
      en: "",
    },
    Waffles: {
      pt: "Ao adicionar uma bola de gelado acresce o valor de 2€",
      en: "Adding a scoop of ice cream adds the value of 2€",
    },
    Cafetaria: {
      pt: "Ao substituir o leite por leite vegetal acresce o valor de 1€",
      en: "Replacing milk for vegetable milk adds the value of 1€",
    },
  };
  const highlightTextsEN = {
    "Toasts and Bread": {
      pt: "Ao adicionar batatas fritas acresce o valor de 2€",
      en: "Adding fries adds the value of 2€",
    },
    Baguettes: {
      pt: "Ao adicionar batatas fritas acresce o valor de 2€",
      en: "Adding fries adds the value of 2€",
    },
    "Bacon Rolls": {
      pt: "Ao adicionar batatas fritas acresce o valor de 2€",
      en: "Adding fries adds the value of 2€",
    },
    Burgers: {
      pt: "Todos os hambúrgueres incluem batatas fritas",
      en: "All burgers include fries",
    },
    Crepes: {
      pt: "Ao adicionar uma bola de gelado acresce o valor de 2€",
      en: "Adding a scoop of ice cream adds the value of 2€",
    },
    Pancakes: {
      pt: "Ao adicionar uma bola de gelado acresce o valor de 2€",
      en: "Adding a scoop of ice cream adds the value of 2€",
    },
    Waffles: {
      pt: "Ao adicionar uma bola de gelado acresce o valor de 2€",
      en: "Adding a scoop of ice cream adds the value of 2€",
    },
    Cafeteria: {
      pt: "Ao substituir o leite por leite vegetal acresce o valor de 1€",
      en: "Replacing milk for vegetable milk adds the value of 1€",
    },
  };

  const getCategoryHighlightText = (title) => {
    const enCategory =
      language === "pt"
        ? categoryOrderPT.find((category) => category === title)
        : categoryOrderEN.find((category) => category === title);

    const combinedHighlightTexts = { ...highlightTexts, ...highlightTextsEN };

    if (language === "en") {
      return (
        combinedHighlightTexts[enCategory] &&
        combinedHighlightTexts[enCategory][language]
      );
    } else {
      return (
        combinedHighlightTexts[title] && combinedHighlightTexts[title][language]
      );
    }
  };

  const cardImage =
    language === "pt"
      ? `/pt/${lowercasedTitle}.jpg`
      : `/en/${lowercasedTitle}.jpg`;

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
            {getCategoryHighlightText(title) && (
              <div className={cardStyles.highlightText}>
                {getCategoryHighlightText(title)}
              </div>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
}

export default CollapsibleCategoryCard;
