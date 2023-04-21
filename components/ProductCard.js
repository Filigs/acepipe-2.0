// ProductCard.js
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import { useLanguage } from "@/utils/LanguageContext";

const ProductCard = ({ name, ingredients, price }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const { language } = useLanguage();

  let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const toggleTooltip = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  return (
    <div className={`${styles.productCard}`}>
      <h3 className={`${styles.productCardName} text-primary`}>
        {capitalizedName}
      </h3>
      {ingredients && (
        <div className={styles.productCardIngredientsContainer}>
          <HiOutlineInformationCircle
            className={`${styles.productCardIngredientsIcon} h-5 w-5`}
            onClick={toggleTooltip}
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
              onClick={toggleTooltip}
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
