import Image from "next/image";

import Container from "../../Container";
import Section from "../Section";
import AboutSlider from "./AboutSlider";

import styles from "../../../styles/components/Sections/About.module.scss";

import glases from "../../../public/img/about/glases.png";
import neck from "../../../public/img/about/neck.png";
import smoke from "../../../public/img/about/smoke.png";

export default function About() {
  return (
    <Section menuTitle="About" id="about" className={styles.about}>
      <div className={styles.about__glases}>
        <Image width="140" height="140" src={glases} alt="Glases" />
      </div>
      <div className={styles.about__neck}>
        <Image width="260" height="177" src={neck} alt="Neck" />
      </div>
      <div className={styles.about__smoke}>
        <Image width="160" height="160" src={smoke} alt="Smoke" />
      </div>
      <Container>
        <h2 className={styles.about__title}>
          <span className="text-cherry">WHAT IS</span> alpha apes?
        </h2>
        <div className="entry-content text-center">
          <p>
            In a distant land in the far corners of the Metaverse, The Alpha
            Apes are serving out their sentence. The crime? Partying too hard.
            Though they may be exiled, they don&apos;t really mind. After all, a
            prison academy of lit-loving monkeys isn&apos;t the worst place to
            be.{" "}
          </p>
          <p>
            The Alpha Apes are the newest and most fun NFT collection to hit the
            scene. This blinged-out party pack takes life by the horns – but
            they&apos;re always ultra chill. Come join the academy today.{" "}
          </p>
        </div>
      </Container>
      <AboutSlider />
    </Section>
  );
}
