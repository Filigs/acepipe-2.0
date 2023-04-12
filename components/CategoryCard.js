import Image from "next/image";
import styles from "@/styles/Home.module.css";

function CategoryCard({ title, language }) {
  const cardImage = language === "pt" ? `/pt/${title}.jpg` : `/en/${title}.jpg`;

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
