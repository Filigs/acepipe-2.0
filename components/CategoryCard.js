import Image from "next/image";
import styles from "@/styles/Home.module.css";
import normalizeSrcUrl from "@/utils/normalizeSrcUrl";
function CategoryCard({ title, language }) {
  const lowercasedTitle = normalizeSrcUrl(
    title.toLowerCase().replace(/\s+/g, "-")
  );
  const cardImage =
    language === "pt"
      ? `/pt/${lowercasedTitle}.jpg`
      : `/en/${lowercasedTitle}.jpg`;

  return (
    <div className={styles.categoryCard}>
      <div className={styles.cardImageContainer}>
        <Image src={cardImage} alt={title} fill />
      </div>
      <div className={styles.categoryCardTitle}>{title}</div>
    </div>
  );
}

export default CategoryCard;
