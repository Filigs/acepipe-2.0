// ProductCard.js
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";

const ProductCard = ({ name, ingredients, price, language }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

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
              {language === "pt" ? "Ingredients" : "Ingredientes"}
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
      <div className={`${styles.productCardPrice}`}>{price}0€</div>
    </div>
  );
};

export default ProductCard;
