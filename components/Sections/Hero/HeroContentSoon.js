import classNames from "classnames";

import Polyhedron from "../../UI/Polyhedron";
import Timer from "../../UI/Timer";

import styles from "../../../styles/components/Sections/Hero.module.scss";

export default function HeroContentSoon({ time, date }) {
  return (
    <div className={styles.hero__content}>
      <div className={styles["hero-box"]}>
        <div className={styles["hero-box__flex-end"]}>
          <h2
            className={classNames([
              "h2",
              "text-uppercase",
              styles["hero-box__title"],
            ])}
          >
            minting
            <span className="text-cherry"> soon!</span>
          </h2>
        </div>
        <div className={styles["hero-box__line_one"]}>
          <svg
            width="216"
            height="62"
            viewBox="0 0 216 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M140.998 41.7661C109.736 39.6474 77.4839 39.0928 62.9376 40.0019L63.0624 41.9981C77.48 41.097 109.631 41.6449 140.863 43.7615L140.998 41.7661ZM62.9376 40.0019C47.077 40.9932 32.4835 44.5153 21.3419 48.5483C15.7715 50.5647 11.0478 52.7147 7.45082 54.7504C3.90214 56.7589 1.30972 58.7326 0.16795 60.4453L1.83205 61.5547C2.69028 60.2674 4.90863 58.4873 8.43592 56.491C11.9149 54.522 16.5324 52.4163 22.0227 50.4289C33.0027 46.4543 47.4092 42.9764 63.0624 41.9981L62.9376 40.0019ZM214 0C214 8.82996 211.672 15.9582 207.668 21.6646C203.658 27.3789 197.927 31.7245 191.038 34.9125C177.236 41.2998 158.911 42.98 140.998 41.7661L140.863 43.7615C158.931 44.986 177.641 43.316 191.878 36.7276C199.009 33.4278 205.049 28.8792 209.305 22.8134C213.567 16.7396 216 9.20171 216 0H214Z"
              fill="#121212"
            />
          </svg>
        </div>
        <div className={styles.hero__desc}>
          The core team is born in the Tri-state - a team of human beings with
          backgrounds in crypto, technology, and gaming working to build a
          decentralized brand of the future.
        </div>
        <div className={styles["hero-box__line_two"]}>
          <svg
            width="203"
            height="50"
            viewBox="0 0 203 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M104 25L104.191 25.9816L104 25ZM0.156842 1.53767C11.368 19.1188 29.1297 26.8333 48.1547 29.3524C67.1624 31.8693 87.5397 29.2193 104.191 25.9816L103.809 24.0184C87.2228 27.2435 67.1001 29.8436 48.4172 27.3697C29.7516 24.8982 12.632 17.3812 1.84316 0.462334L0.156842 1.53767ZM104.191 25.9816C122.016 22.5157 145.117 23.9964 164.393 28.5977C174.026 30.8973 182.653 33.9644 189.158 37.5478C195.716 41.16 199.9 45.1763 201.036 49.2676L202.964 48.7324C201.6 43.8237 196.784 39.465 190.123 35.796C183.41 32.0981 174.599 28.9777 164.857 26.6523C145.383 22.0036 121.984 20.4843 103.809 24.0184L104.191 25.9816Z"
              fill="#121212"
            />
          </svg>
        </div>
        <div className={styles["hero-box__flex-end"]}>
          <div className={styles["hero-box__number-wrap"]}>
            <div className={styles["hero-box__poly"]}>
              <Polyhedron color="#fff" size={130}>
                <span className={styles["hero-box__poly-title"]}>TBA</span>
                {/*<span className={styles["hero-box__poly-desc"]}>November</span>*/}
              </Polyhedron>
            </div>
            <span className={styles["hero-box__number-text"]}>
              <span className="text-semibold">
                1 NFT Alpha Apes costs 0.064 ETH{" "}
              </span>
              (Max 20)
            </span>
          </div>
        </div>
        <div className={styles["hero-box__line_three"]}>
          <svg
            width="15"
            height="26"
            viewBox="0 0 15 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 0.5C10.5 15 7.5 19 1.5 24.5"
              stroke="#121212"
              strokeWidth="2"
            />
          </svg>
        </div>
        <Timer expiryTimestamp={date} time={time} />
      </div>
    </div>
  );
}
