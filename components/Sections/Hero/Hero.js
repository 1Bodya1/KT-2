import { useSelector } from "react-redux";
import classNames from "classnames";
import Image from "next/image";

import Container from "../../Container";
import Section from "../Section";
import FallBananas from "../../UI/FallBananas";
import ScrollToButton from "../../Buttons/ScrollToButton";
import HeroContentConnect from "./HeroContentConnect";
import HeroContentBuy from "./HeroContentBuy";
import HeroContentConfirm from "./HeroContentConfirm";
import HeroContentSoon from "./HeroContentSoon";
import HeroContentSold from "./HeroContentSold";

import styles from "../../../styles/components/Sections/Hero.module.scss";

import arrowdown from "../../../public/img/arrow-down.svg";

export default function Hero() {
  const type = useSelector((state) => state.common.currentType);

  const titleClasses = classNames([
    "h1",
    "h1--large",
    "text-white",
    "text-uppercase",
    styles.hero__title,
  ]);

  return (
    <Section className={styles.hero} menuTitle="mint" color="#FFEC00" id="hero">
      <h1 className={titleClasses}>
        <span>this is</span>
        <span>alpha apes</span>
      </h1>
      <FallBananas />
      <Container type="large">
        <div className={styles.hero__row}>
          <div className={styles.hero__img}>
            <Image
              width="870"
              height="980"
              src="/img/hero/ape.png"
              alt="This is alpha apes"
            />
          </div>

          {type === "connect" && <HeroContentConnect />}
          {type === "buy" && <HeroContentBuy />}
          {type === "confirm" && <HeroContentConfirm />}
          {type === "soon" && (
            <HeroContentSoon
              date={new Date("31 December 2022 00:00:00")}
              time="1:00 AM"
            />
          )}
          {type === "sold" && <HeroContentSold />}
        </div>
      </Container>
      <ScrollToButton
        to="about"
        className={styles["hero-scroll"]}
        hoverClass={styles["hero-scroll_active"]}
      >
        <span className={styles["hero-scroll__img"]}>
          <Image height="30" width="20" src={arrowdown} alt="Scroll down" />
        </span>
      </ScrollToButton>
    </Section>
  );
}
