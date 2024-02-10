import { useState, useEffect } from "react";
import CollapsibleCategoryCard from "@/components/CollapsibleCategoryCard";
import LanguageSwitcher from "../components/LanguageSwitcher";
import styles from "@/styles/Home.module.css";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { categoryOrderEN, categoryOrderPT } from "@/public/lib/categories";
import { useLanguage } from "@/utils/LanguageContext";

export default function Home() {
  const [data, setData] = useState([]);
  const { language } = useLanguage();

  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/lib/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  let orderedCategories = language === "pt" ? categoryOrderPT : categoryOrderEN;

  const sortProducts = (products) => {
    const specialProductId = 198;

    return products.sort((a, b) => {
      if (a.id === specialProductId) return 1;
      if (b.id === specialProductId) return -1;
      return 0;
    });
  };

  return (
    <main>
      <div className={styles.container}>
        <LanguageSwitcher />
        <div className={styles.cards}>
          {orderedCategories.map((catText) => {
            let productsInCategory = data.filter(
              (item) =>
                (language === "pt" ? item.categoria : item.categoria_en) ===
                catText
            );

            // Conditionally exclude items starting with "Croissant" for the "Pastelaria"/"Pastry" category
            if (catText === "Pastelaria" || catText === "Pastry") {
              productsInCategory = productsInCategory.filter(
                (item) =>
                  !(language === "pt" ? item.nome : item.nome_en).startsWith(
                    "Croissant"
                  )
              );
            }

            const sortedProductsInCategory = sortProducts(productsInCategory);

            return (
              <CollapsibleCategoryCard
                key={catText}
                title={catText}
                products={sortedProductsInCategory}
                expandedCard={expandedCard}
                setExpandedCard={setExpandedCard}
              />
            );
          })}
          {expandedCard && (
            <button
              className="fixed p-2 text-xl bg-white rounded-full shadow-md bottom-4 right-4"
              onClick={() => setExpandedCard(null)}
            >
              {/* <MdKeyboardArrowDown /> */}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
