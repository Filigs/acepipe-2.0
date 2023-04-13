// CollapsibleCategoryCard.js
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { MdCloseFullscreen } from "react-icons/md";
import normalizeSrcUrl from "@/utils/normalizeSrcUrl";

function CollapsibleCategoryCard({ title, language, products }) {
  const lowercasedTitle = normalizeSrcUrl(
    title.toLowerCase().replace(/\s+/g, "-")
  );
  const [isOpen, setIsOpen] = useState(false);
  const cardImage =
    language === "pt"
      ? `/pt/${lowercasedTitle}.jpg`
      : `/en/${lowercasedTitle}.jpg`;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div className={styles.categoryCard}>
      {!isOpen && (
        <div className={styles.cardImageContainer} onClick={toggleOpen}>
          <Image
            src={cardImage}
            alt={title}
            className={styles.cardImage}
            width={400}
            height={300}
          />
        </div>
      )}
      {isOpen && (
        <>
          <button
            className={`${styles.categoryCardTitle} w-full text-center flex justify-center`}
            onClick={toggleOpen}
          >
            {title}
            <MdCloseFullscreen className="ml-4 " />
          </button>
          <motion.div
            className={styles.collapsibleContent}
            variants={variants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
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
          </motion.div>
        </>
      )}
    </div>
  );
}

export default CollapsibleCategoryCard;
