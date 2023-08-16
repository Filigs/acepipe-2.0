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
      let fileToFetch = "/lib/data.json"; // default file

      // Get current date and time in GMT+0
      const currentDate = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/Lisbon" })
      );
      if (
        // currentDate.getUTCDate() === 20 &&
        // currentDate.getUTCMonth() === 7 && // August is month 7 (0-indexed)
        // currentDate.getUTCFullYear() === 2023 &&
        // currentDate.getUTCHours() >= 16 &&
        // currentDate.getUTCHours() < 18

        currentDate.getUTCDate() === 16 &&
        currentDate.getUTCMonth() === 7 && // August is month 7 (0-indexed)
        currentDate.getUTCFullYear() === 2023 &&
        currentDate.getUTCHours() >= 22 &&
        currentDate.getUTCHours() < 23
      ) {
        fileToFetch = "/lib/data_temp.json"; // replace with the path to your alternate JSON file
      }

      const response = await fetch(fileToFetch);
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  const orderedCategories =
    language === "pt" ? categoryOrderPT : categoryOrderEN;

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
            const productsInCategory = data.filter(
              (item) =>
                (language === "pt" ? item.categoria : item.categoria_en) ===
                catText
            );

            const sortedProductsInCategory = sortProducts(productsInCategory);

            return (
              <CollapsibleCategoryCard
                key={catText}
                title={catText}
                products={sortedProductsInCategory}
                expandedCard={expandedCard} // Add this prop
                setExpandedCard={setExpandedCard} // Add this prop
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
