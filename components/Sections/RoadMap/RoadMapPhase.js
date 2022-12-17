import styles from "../../../styles/components/Sections/RoadMapPhase.module.scss";
import Image from "next/image";
import RoadMapItemNew from "./RoadMapItemNew";

export default function RoadMapPhase({ title, icon, items, indexKey }) {
  return (
    <div className={styles.phase}>
      <div className={styles.phase__line} />
      <div className={styles.phase__line_1} />
      <div className={styles.phase__image}>
        {icon && (
          <div className={styles.phase__icon}>
            <Image src={icon} />
          </div>
        )}
        {title && <h3 className={styles.phase__image_title}>{title}</h3>}
      </div>
      {items && (
        <div className={styles.phase__items}>
          {items.map((item, index) => (
            <RoadMapItemNew key={indexKey + "_" + index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
