// ProductCard.js
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";

const ProductCard = ({ name, ingredients, price }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  return (
    <div className={`${styles.productCard}`}>
      <h3 className={`${styles.productCardName} text-primary`}>{name}</h3>
      {ingredients && (
        <div className={styles.productCardIngredientsContainer}>
          <HiOutlineInformationCircle
            className={styles.productCardIngredientsIcon}
            onClick={toggleTooltip}
          />
          {isTooltipOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className={styles.productCardIngredientsTooltip}
              onClick={toggleTooltip}
            >
              {ingredients}
            </motion.div>
          )}
        </div>
      )}
      <div className={`${styles.productCardPrice} text-secondary`}>
        {price}€
      </div>
    </div>
  );
};

export default ProductCard;
