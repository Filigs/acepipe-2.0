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
        <Image
          src={cardImage}
          alt={title}
          fill
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 22vw"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.categoryCardTitle}>{title}</div>
    </div>
  );
}

export default CategoryCard;
