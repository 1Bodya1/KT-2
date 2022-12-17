import styles from "../../../styles/components/Sections/Tokenomics.module.scss";
import Section from "../Section";
import Container from "../../Container";
import glasses from "../../../public/img/community/glasses.png";
import smoke from "../../../public/img/community/smoke.png";
import Image from "next/image";
import { Formulas, Profits } from "../../../constants/tokenomics";
import PercentItem from "./PercentItem";

export default function Tokenomics() {
  return (
    <Section menuTitle="tokenomics" id="tokenomics" className={styles.section}>
      <div className={styles.section__smoke}>
        <Image width="160" height="160" src={smoke} alt="Smoke" />
      </div>
      <div className={styles.section__glasses}>
        <Image width="160" height="160" src={glasses} alt="Glasses" />
      </div>
      <Container type={"fluid"}>
        <h2 className={styles.section__title}>
          alpha <span className="text-cherry">Tokenomics</span>
        </h2>
        <div className={styles.section__wrap}>
          <div className={styles.section__card}>
            <span className={styles.section__card_number}>01</span>
            <h3 className={styles.section__card_title}>
              We understand how important it is to maintain the value of your
              investment. That&apos;s why we’ve created a fool-proof tokenomics
              policy. Here are a few key points:
            </h3>
            <div className={styles.section__card_content}>
              Selling our Alpha Apes at under-the-floor prices is strictly
              prohibited. Doing so will result in immediate blacklisting from
              the project and community, as well as any future projects.
              <br />
              <br />
              As an extra precaution, we’ll be limiting supply and per-wallet
              items. This will help ensure your investment retains its value.
            </div>
          </div>
          <div className={styles.section__card}>
            <span className={styles.section__card_number}>02</span>
            <h3 className={styles.section__card_title}>
              We also want to ensure full transparency for our community
              members, so here’s how our profits will be distributed:
            </h3>
            <div className={styles.section__card_content}>
              {Profits.map((item, index) => (
                <PercentItem key={index} item={item} />
              ))}
            </div>
          </div>
          <div className={styles.section__card}>
            <span className={styles.section__card_number}>03</span>
            <h3 className={styles.section__card_title}>
              We’ll also distribute NFTs using the following formula:
            </h3>
            <div className={styles.section__card_content}>
              {Formulas.map((item, index) => (
                <PercentItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
