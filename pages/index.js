import { useState, useEffect } from "react";
import CollapsibleCategoryCard from "@/components/CollapsibleCategoryCard";
import LanguageSwitcher from "../components/LanguageSwitcher";
import styles from "@/styles/Home.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("pt");
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/lib/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  const categoryOrderPT = [
    "Cafetaria",
    "Pastelaria",
    "Tostas e Torradas",
    "Sandes",
    "Baguetes",
    "Saladas",
    "Pequeno Almoço Inglês",
    "Hamburgueres",
    "Bacon Rolls",
    "Tapas",
    "Bebidas",
    "Sumos Naturais de Fruta",
    "Smoothies",
    "Vinhos",
    "Bebidas Espirituosas",
    "Cocktails",
    "Granizados",
    "Batidos",
    "Acepipe Especial",
    "Taças de Gelado",
    "Crepes",
    "Panquecas",
    "Waffles",
    "Bubble Waffles",
    "Extras",
  ];

  const categoryOrderEN = [
    "Cafeteria",
    "Pastry",
    "Toasts and Bread",
    "Sandwiches",
    "Baguettes",
    "Salads",
    "English Breakfast",
    "Burgers",
    "Bacon Rolls",
    "Tapas",
    "Drinks",
    "Natural Fruit Juices",
    "Smoothies",
    "Wines",
    "Alcoholic Beverages",
    "Cocktails",
    "Slushies",
    "Acepipe Special",
    "Ice Cream Bowls",
    "Crepes",
    "Pancakes",
    "Waffles",
    "Bubble Waffles",
    "Extras",
  ];

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
    <>
      <main>
        <div className={styles.container}>
          <LanguageSwitcher setLanguage={setLanguage} />
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
                  language={language}
                  products={sortedProductsInCategory}
                  setExpandedCard={setExpandedCard} // Add this prop
                />
              );
            })}
            {expandedCard && (
              <button
                className="fixed p-2 text-xl bg-white rounded-full shadow-md bottom-4 right-4"
                onClick={() => setExpandedCard(null)}
              >
                <MdKeyboardArrowDown />
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
