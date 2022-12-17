import styles from "../../../styles/components/Sections/Benefits.module.scss";
import Section from "../Section";
import Image from "next/image";
import ice from "../../../public/img/faq/ice.png";
import banana from "../../../public/img/community/banana.png";
import Container from "../../Container";
import { BenefitsList } from "../../../constants/benefits";
import BenefitsItem from "./BenefitsItem";
import ape from "../../../public/img/benefits/ape.png";

export default function Benefits() {
  return (
    <Section menuTitle="benefits" id="benefits" className={styles.benefits}>
      <div className={styles.benefits__ice}>
        <Image width="160" height="160" src={ice} alt="Ice cream" />
      </div>
      <div className={styles.benefits__banana}>
        <Image width="160" height="160" src={banana} alt="Banana" />
      </div>
      <Container type={"fluid"}>
        <h2 className={styles.benefits__title}>
          BENEFITS & UTILITIES <span className="text-cherry">for holders</span>
        </h2>
        <div className={styles.benefits__wrap}>
          <div className={styles.benefits__left}>
            {BenefitsList.slice(0, 3).map((item, index) => (
              <BenefitsItem item={item} key={index} />
            ))}
          </div>
          <div className={styles.benefits__center}>
            <div>
              <Image src={ape} />
            </div>
          </div>
          <div className={styles.benefits__right}>
            {BenefitsList.slice(3).map((item, index) => (
              <BenefitsItem item={item} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
