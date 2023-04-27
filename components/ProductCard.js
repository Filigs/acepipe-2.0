// ProductCard.js
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import { useLanguage } from "@/utils/LanguageContext";

const ProductCard = ({ name, ingredients, price }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const { language } = useLanguage();
  const wrapBracesWithSmallText = (text) => {
    const braceRegex = /\(.*?\)/g;
    return text.split(braceRegex).reduce((acc, part, index) => {
      const braceMatch = text.match(braceRegex);
      if (index < text.split(braceRegex).length - 1) {
        return (
          <>
            {acc}
            {part}
            <span className={styles.smallText}>{braceMatch[index]}</span>
          </>
        );
      }
      return (
        <>
          {acc}
          {part}
        </>
      );
    }, "");
  };

  let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const toggleTooltip = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  return (
    <div className={`${styles.productCard}`}>
      <h3 className={`${styles.productCardName} text-primary`}>
        {wrapBracesWithSmallText(capitalizedName)}
      </h3>

      {ingredients && (
        <div
          className={styles.productCardIngredientsContainer}
          onClick={toggleTooltip}
        >
          <HiOutlineInformationCircle
            className={`${styles.productCardIngredientsIcon} h-5 w-5`}
          />
          {isTooltipOpen ? (
            ""
          ) : (
            <span className="ml-2 text-sm italic text-gray-500 ">
              {language === "pt" ? "Ingredientes" : "Ingredients"}
            </span>
          )}
          {isTooltipOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className={`${styles.productCardIngredientsTooltip} ml-2`}
            >
              {ingredients}
            </motion.div>
          )}
        </div>
      )}
      <div className={`${styles.productCardPrice}`}>{price}€</div>
    </div>
  );
};

export default ProductCard;
