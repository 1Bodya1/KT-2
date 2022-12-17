import classNames from "classnames";
import Image from "next/image";

import Section from "../../Sections/Section";
import Container from "../../Container";
import FaqItem from "./FaqItem";

import { faq } from "../../../constants/faq";

import styles from "../../../styles/components/Sections/Faq.module.scss";

import coffee from "../../../public/img/faq/coffee.png";
import ice from "../../../public/img/faq/ice.png";
import shot from "../../../public/img/faq/shot.png";

export default function Faq({ list = faq }) {
  const titleClasses = classNames(
    styles.faq__title,
    "h2",
    "text-uppercase",
    "text-center"
  );

  return (
    <Section menuTitle="faq" id="faq" className={styles.faq}>
      <div className={styles.faq__ice}>
        <Image width="160" height="160" src={ice} alt="Ice cream" />
      </div>
      <div className={styles.faq__coffee}>
        <Image width="160" height="160" src={coffee} alt="Coffee" />
      </div>
      <div className={styles.faq__shot}>
        <Image width="160" height="160" src={shot} alt="Bullet" />
      </div>
      <Container>
        <h2 className={titleClasses}>
          <span className="text-cherry">FREQUENTLY ASKED QUESTIONS</span>
        </h2>
        <ul className={styles.faq__list}>
          {list.map((item, i) => (
            <FaqItem
              heading={item.heading}
              body={item.body}
              index={i}
              key={i}
            />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
