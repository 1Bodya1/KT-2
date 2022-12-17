import styles from "../../../styles/components/Sections/BenefitsItem.module.scss";

export default function BenefitsItem({ item }) {
  const { color, title, content } = item;

  return (
    <div className={styles.item}>
      <style jsx>{`
        :after {
          background: ${color};
        }
      `}</style>
      {title && <h3 className={styles.item__title}>{title}</h3>}
      {content && (
        <div
          className={styles.item__content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
}
