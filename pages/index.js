import { useState, useEffect } from "react";
import CollapsibleCategoryCard from "@/components/CollapsibleCategoryCard";
import LanguageSwitcher from "../components/LanguageSwitcher";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("pt");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/lib/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  const categories = Array.from(
    new Set(
      data.map((item) =>
        language === "pt" ? item.categoria : item.categoria_en
      )
    )
  );

  return (
    <>
      <main>
        <div className={styles.container}>
          <LanguageSwitcher setLanguage={setLanguage} />
          <div className={styles.cards}>
            {categories.map((catText) => {
              const productsInCategory = data.filter(
                (item) =>
                  (language === "pt" ? item.categoria : item.categoria_en) ===
                  catText
              );
              return (
                <CollapsibleCategoryCard
                  key={catText}
                  title={catText}
                  language={language}
                  products={productsInCategory}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
