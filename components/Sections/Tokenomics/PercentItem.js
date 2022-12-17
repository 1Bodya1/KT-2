import styles from "../../../styles/components/Sections/PercentItem.module.scss";
import classNames from "classnames";

export default function PercentItem({ item }) {
  const { color, title, percent } = item;

  return (
    <div className={styles.item}>
      {percent && (
        <div className={classNames(styles.item__percent)}>
          <style jsx>{`
            :before {
              width: ${percent}%;
              background-color: ${color};
            }
            :after {
              background-color: ${color};
            }
          `}</style>
          <div className={classNames("item__number", styles.item__number)}>
            {percent}%
          </div>
          <style jsx>{`
            .item__number {
              color: ${color};
            }
          `}</style>
        </div>
      )}
      {title && (
        <div
          className={classNames(styles.item__title, "card__title")}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
    </div>
  );
}
