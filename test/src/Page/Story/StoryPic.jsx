import React, { useState, useRef, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { setData } from "../../sound";
import { Element, scroller } from "react-scroll";
import classNames from "classnames";
const StoryPic = ({ ShowNext, playMusic, params, data, display = "block" }) => {
  const clickRef = useRef();
  const [backG, setbackG] = useState(false);
  const initState = () => {
    let tmp = [];
    for (let i = 0; i < 20; ++i) {
      tmp.push("none");
    }

    return tmp;
  };
  const ClearData = () => {
    setIndex(initState());
  };
  const [index, setIndex] = useState(initState);

  const scrollTo = (element, delay = 500, smooth = "easeOutCubic") => {
    scroller.scrollTo(element, {
      duration: 300,
      delay: delay,
      smooth: smooth,
    });
  };

  const AddBackground = (back, i) => {
    let hideBack = data.BackStory[i].back;
    let itemBack = process.env.PUBLIC_URL + data.Item[i].back;
    let itemStyle = styles[`${params.kind}Item_${i + 1}`];
    if (params.gender === "Girl") {
      if ("gback" in data.BackStory[i]) {
        hideBack = data.BackStory[i].gback;
      } else if (params.kind === "Strong" && i === 0) {
        itemStyle = styles[`${params.kind}Item_${i + 1}-1`];
        itemBack = process.env.PUBLIC_URL + data.Item[i].gback;
      }
    }
    return (
      <div key={i}>
        {/* BackgroundPage */}

        <Element name={`Intro_${i}`} className="element">
          <Row style={{ display: `${index[i * 2]}` }}>
            <div style={{ position: "relative", padding: "0" }}>
              <img
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + data.Intro[i].back}
                alt="back"
                onClick={() => {
                  clickRef.current.play();
                  setIndex(
                    index.map((_, ti) => (ti <= i * 2 + 1 ? "block" : "none"))
                  );
                  scrollTo(`StoryPage_${i}`);
                }}
              />
              <img
                className={styles.BackgroundText}
                src={process.env.PUBLIC_URL + data.Intro[i].text}
                alt="text"
                onClick={() => {
                  clickRef.current.play();
                  setIndex(
                    index.map((_, ti) => (ti <= i * 2 + 1 ? "block" : "none"))
                  );
                  scrollTo(`StoryPage_${i}`);
                }}
              />
            </div>
          </Row>
        </Element>
        {/* StoryPage */}

        <Element name={`StoryPage_${i}`} className="element">
          <Row style={{ display: `${index[i * 2 + 1]}`, position: "relative" }}>
            <img
              style={{ width: "100%", padding: "0" }}
              src={process.env.PUBLIC_URL + back}
              alt="select"
            />
            <div
              onClick={() => {
                clickRef.current.play();
                setbackG(true);
              }}
            >
              <img
                // loading="lazy"
                className={itemStyle}
                src={itemBack}
                alt="item"
              />
            </div>
            {/* HidePage */}
            {backG && (
              <div className={styles.BackgroundStyle}>
                <img
                  src={process.env.PUBLIC_URL + hideBack}
                  alt="back"
                  onClick={() => {
                    clickRef.current.play();
                    if (i !== 9) {
                      setbackG(false);
                      setIndex(
                        index.map((_, ti) =>
                          ti <= (i + 1) * 2 ? "block" : "none"
                        )
                      );
                      scrollTo(`Intro_${i + 1}`);
                    } else {
                      console.log("toNext");
                      ClearData();
                      ShowNext();
                    }
                  }}
                />
              </div>
            )}
          </Row>
        </Element>
      </div>
    );
  };

  return (
    <Container
      fluid
      style={{ display: `${display}`, height: "100vh", padding: "0" }}
    >
      <audio
        className={styles.audioStyle}
        src={setData("Click").music}
        ref={clickRef}
        controls
        muted={false}
      />
      <Row>
        {/* Start Page */}
        <div style={{ position: "relative", padding: "0", color: "white" }}>
          <img
            style={{ width: "100%" }}
            src={process.env.PUBLIC_URL + data.Back}
            alt="select"
          />
          {/* <div> */}
          <img
            className={styles[`${params.gender}PersonPic`]}
            src={
              params.gender === "Boy"
                ? process.env.PUBLIC_URL + data.BoyPerson
                : process.env.PUBLIC_URL + data.GirlPerson
            }
            alt="select"
            onClick={() => {
              playMusic();
              setIndex(index.map((_, ti) => (ti === 0 ? "block" : "none")));
              scrollTo(`Intro_0`);
            }}
          />
          <img
            className={
              display === "block"
                ? classNames(styles.FirstTitle, styles.move)
                : styles.FirstTitle
            }
            src={process.env.PUBLIC_URL + data.Title}
            alt="firsttitle"
          />
          <img
            className={styles[`${params.kind}Text`]}
            src={process.env.PUBLIC_URL + data.Text}
            alt="firsttext"
          />
        </div>
      </Row>
      {/* StoryPage */}
      {data[params.gender].map(({ back }, i) => AddBackground(back, i))}
    </Container>
  );
};

export default StoryPic;
