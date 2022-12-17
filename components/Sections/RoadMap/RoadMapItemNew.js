import styles from "../../../styles/components/Sections/RoadMapItem.module.scss";

export default function RoadMapItemNew({ item }) {
  const { color, heading, desc } = item;
  return (
    <div className={styles.item}>
      {heading && <h4 className={styles.item__title}>{heading}</h4>}
      <style jsx>{`
        h4 {
          background: ${color};
        }
      `}</style>
      {desc && <div className={styles.item__content}>{desc}</div>}
    </div>
  );
}
