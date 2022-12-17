import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import classNames from "classnames";

import Section from "../Section";
import RoadMapItem from "./RoadMapItem";

import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  RoadMapList,
  RoadMapListPhase1,
  RoadMapListPhase2,
  RoadMapListPhase3,
} from "../../../constants/road-map";
import { endpoints } from "../../../constants/endpoints";

import styles from "../../../styles/components/Sections/RoadMap.module.scss";

import firstape from "../../../public/img/road-map/ape-0.png";
import secondape from "../../../public/img/road-map/ape-1.png";
import drag from "../../../public/img/road-map/touch.svg";
import flask from "../../../public/img/road-map/flask.svg";
import infographic from "../../../public/img/road-map/infographic_green.svg";
import gorilla from "../../../public/img/road-map/gorilla.svg";
import RoadMapPhase from "./RoadMapPhase";

export default function RoadMapNew({ list = RoadMapList }) {
  const ID = "road-map";

  const [innerWidth, innerHeight] = useWindowSize();

  const [isClick, setIsClick] = useState(false);

  const currentSection = useSelector((state) => state.common.currentSection);

  const containerRef = useRef();
  const wrapRef = useRef();
  const clickRef = useRef(false);
  const prevStep = useRef(0);
  const itemsRef = useRef([]);

  const addItemRef = (item) => itemsRef.current.push(item);

  const issetCurrentSection = currentSection === ID;

  const sectionClasses = classNames(styles.roadmap, {
    [styles.roadmap_active]: isClick,
  });
  const titleClasses = classNames([
    "h2",
    "text-center",
    "text-uppercase",
    styles.roadmap__title,
  ]);
  const dragClasses = classNames(styles.roadmap__drag, {
    [styles.roadmap__drag_active]: issetCurrentSection,
  });

  const setLineHeight = () => {
    // const firstItem = itemsRef.current[0].getBoundingClientRect();
    // const lastItem =
    //   itemsRef.current[itemsRef.current.length - 1].getBoundingClientRect();
    // const height = lastItem.top - firstItem.top;
    //
    // if (wrapRef?.current?.style?.cssText)
    //   wrapRef.current.style.cssText = `--wrap-line-height: ${height}px;`;
  };

  const clickDownHandler = () => setIsClick(true);

  const dragHandler = (e) => {
    if (clickRef.current && window.innerWidth > endpoints.md) {
      let nextStep, step;

      const direction = e.movementX;
      const style = window.getComputedStyle(containerRef.current);
      const currentPosition = parseInt(
        style.transform.replace("matrix(1, 0, 0, 1, ", "").replace(", 0)")
      );
      const endpoint =
        (containerRef.current.offsetWidth - window.innerWidth) * -1;

      if (direction > 0) {
        step = e.pageX - prevStep.current;

        if (step < 5) step = 5;
        if (step > 90) step = 90;

        nextStep = currentPosition + step;
      }

      if (direction < 0) {
        step = prevStep.current - e.pageX;

        if (step < 5) step = 5;
        if (step > 90) step = 90;

        nextStep = currentPosition - step;
      }

      if (nextStep < endpoint) nextStep = endpoint;

      if (nextStep > 0) nextStep = 0;

      containerRef.current.style.transform = `matrix(1, 0, 0, 1, ${nextStep}, 0)`;
      prevStep.current = e.pageX;
    }
  };

  useEffect(() => {
    clickRef.current = isClick;
  }, [isClick]);

  useEffect(() => {
    setLineHeight();
  }, [innerWidth]);

  useEffect(() => {
    const clickUpHandler = () => {
      if (clickRef.current) setIsClick(false);
    };
    const resizeHandler = () => {
      if (window.innerWidth <= endpoints.md) {
        containerRef.current.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
      }
    };

    resizeHandler();
    setLineHeight();

    window.addEventListener("mouseup", clickUpHandler);
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("mouseup", clickUpHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <Section
      id={ID}
      menuTitle="road map"
      color="#F8F8F8"
      className={sectionClasses}
      onMouseDown={clickDownHandler}
      onMouseMove={dragHandler}
    >
      <div className={styles.roadmap__container} ref={containerRef}>
        <h2 className={titleClasses}>
          road<span className="text-cherry"> map</span>
        </h2>
        <div className={styles.roadmap__wrap} ref={wrapRef}>
          <div className={styles.roadmap__wrap_phases}>
            <RoadMapPhase
              title={"phase i"}
              icon={flask}
              items={RoadMapListPhase1}
              key={1}
              indexKey={1}
            />
            <RoadMapPhase
              title={"phase ii"}
              icon={infographic}
              items={RoadMapListPhase2}
              key={2}
              indexKey={2}
            />
            <RoadMapPhase
              title={"phase iii"}
              icon={gorilla}
              items={RoadMapListPhase3}
              key={3}
              indexKey={3}
            />
          </div>

          {/*{list.map((item, i) => (*/}
          {/*  <RoadMapItem*/}
          {/*    line={item.img}*/}
          {/*    lineWidth={item.width}*/}
          {/*    lineHeight={item.height}*/}
          {/*    lineTable={item.imgTable}*/}
          {/*    lineTableWidth={item.tableWidth}*/}
          {/*    lineTableHeight={item.tableHeight}*/}
          {/*    heading={item.heading}*/}
          {/*    desc={item.desc}*/}
          {/*    key={i}*/}
          {/*    index={i}*/}
          {/*    icon={item.icon}*/}
          {/*    color={item.color}*/}
          {/*    addItemRef={addItemRef}*/}
          {/*  />*/}
          {/*))}*/}
        </div>
        <div className={styles.roadmap__ape_first}>
          <Image width="461" height="565" alt="Ape" src={firstape} />
        </div>
        <div className={styles.roadmap__ape_second}>
          <Image width="532" height="701" alt="Ape" src={secondape} />
        </div>
      </div>
      <div className={dragClasses}>
        <Image width="40" height="40" alt="Drag to move" src={drag} />
        <div className="text-semibold text-small">
          Navigate the RoadMap using Drag
        </div>
      </div>
    </Section>
  );
}
