import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Born from "../../BornStory.json";
import Grow from "../../GrowStory.json";
import Strong from "../../StrongStory.json";
import { Element, scroller } from "react-scroll";
import classNames from "classnames";
const StoryPic = ({ ShowNext, ToBack, kind, display = "block" }) => {
  const soundRef = useRef();
  const { person } = useParams();
  const [move, canMove] = useState(false);
  const [sound, setSound] = useState({
    url: null,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: true,
  });
  const initState = () => {
    let tmp = [];
    for (let i = 0; i < 30; ++i) {
      tmp.push("none");
    }

    return tmp;
  };
  const ClearData = () => {
    canMove(false);
    setSound({
      url: null,
      playing: true,
      controls: false,
      light: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: true,
    });
    setIndex(initState());
  };
  const InitData = () => {
    switch (kind) {
      case "Born":
        return Born;
      case "Grow":
        return Grow;
      case "Strong":
        return Strong;
      default:
        return Born;
    }
  };
  const [index, setIndex] = useState(initState);
  const data = InitData();

  const scrollTo = (element, delay = 200, smooth = "easeOutQuad") => {
    scroller.scrollTo(element, {
      duration: 100,
      delay: delay,
      smooth: smooth,
    });
  };
  const AddBackground = (back, i) => {
    let hideBack = data.BackStory[i].back;
    if (person === "Girl" && "gback" in data.BackStory[i]) {
      hideBack = data.BackStory[i].gback;
    }
    return (
      <div key={i}>
        {/* BackgroundPage */}

        <Element name={`Intro_${i}`} className="element">
          <Row style={{ display: `${index[i * 3]}` }}>
            <div style={{ position: "relative", padding: "0" }}>
              <img
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + data.Intro[i].back}
                alt="select"
              />
              <img
                className={styles.BackgroundText}
                src={process.env.PUBLIC_URL + data.Intro[i].text}
                alt="select"
              />
              <div>
                <img
                  className={styles.NextTriangle}
                  alt="next"
                  src={process.env.PUBLIC_URL + "/images/Story/next.png"}
                  onClick={() => {
                    setIndex(
                      index.map((_, ti) => (ti <= i * 3 + 1 ? "block" : "none"))
                    );
                    scrollTo(`StoryPage_${i}`);
                  }}
                />
              </div>
            </div>
          </Row>
        </Element>
        {/* StoryPage */}

        <Element name={`StoryPage_${i}`} className="element">
          <Row style={{ display: `${index[i * 3 + 1]}`, position: "relative" }}>
            <img
              style={{ width: "100%", padding: "0" }}
              src={process.env.PUBLIC_URL + back}
              alt="select"
            />
            <div
              onClick={() => {
                setIndex(
                  index.map((_, ti) => (ti <= i * 3 + 2 ? "block" : "none"))
                );
                scrollTo(`hideBack_${i}`);
              }}
            >
              <img
                loading="lazy"
                className={styles[`${kind}Item_${i + 1}`]}
                src={process.env.PUBLIC_URL + data.Item[i].back}
                alt="select"
              />
            </div>
          </Row>
        </Element>
        {/* HidePage */}
        {console.log(move)}
        <Element name={`hideBack_${i}`} className="element">
          <Row style={{ display: `${index[i * 3 + 2]}` }}>
            <div style={{ position: "relative", padding: "0" }}>
              <img
                style={{ width: "100%", padding: "0" }}
                src={process.env.PUBLIC_URL + hideBack}
                alt="select"
              />
              <img
                className={styles.NextTriangle}
                alt="next"
                src={process.env.PUBLIC_URL + "/images/Story/next.png"}
                onLoad={()=>console.log("picload!!!")}
                onClick={() => {
                  setIndex(
                    index.map((_, ti) => (ti <= (i + 1) * 3 ? "block" : "none"))
                  );
                  if (i !== 9) scrollTo(`Intro_${i + 1}`);
                  else {
                    console.log("toNext");
                    ClearData();
                    ShowNext();
                  }
                }}
              />
            </div>
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
      {display === "block" && (
        <ReactPlayer
          ref={soundRef}
          url={data.Music}
          width="0"
          height="0"
          loop={sound.loop}
          playing={sound.playing}
          
          muted={sound.muted ? true : false}
          onReady={() => setSound({ ...sound, playing: true })}
          onStart={() => {
            canMove(true);
          }}
        />
      )}
      {/* LeftIcon */}
      <div className={styles.BCIcon + " d-flex justify-content-between"}>
        <img
          src={process.env.PUBLIC_URL + "/images/backIcon.png"}
          alt="back"
          onClick={() => {
            console.log("toback");
            ClearData();
            ToBack();
          }}
        />
        <img
          src={
            sound.muted
              ? process.env.PUBLIC_URL + "/images/mute.png"
              : process.env.PUBLIC_URL + "/images/play.png"
          }
          alt="volume"
          onClick={() => setSound({ ...sound, muted: !sound.muted })}
        />
      </div>

      <Row>
        {/* Start Page */}
        <div style={{ position: "relative", padding: "0", color: "white" }}>
          <img
            style={{ width: "100%" }}
            src={process.env.PUBLIC_URL + data.Back}
            alt="select"
          />
          {/* <div> */}
          <LazyLoadImage
            className={styles.PersonPic}
            loading="lazy"
            // effect="blur"
            src={process.env.PUBLIC_URL + data.Person}
            alt="select"
            beforeLoad={()=>console.log("beforeload")}
            // afterLoad={()=>console.log("afterload")}
            onLoad={() => {
              // canMove(move + 1);
            }}
            // on={() => canMove(move + 1)}
            onClick={() => {
              if (move) {
                setIndex(index.map((_, ti) => (ti === 0 ? "block" : "none")));
                scrollTo(`Intro_0`);
              }
            }}
          />
          <img
            // loading="lazy"
            className={
              move
                ? classNames(styles.FirstTitle, styles.move)
                : styles.FirstTitle
            }
            // style={{width:"20vw"}}
            src={process.env.PUBLIC_URL + data.Title}
            alt="select"
          />
          <img
            className={styles[`${kind}Text`]}
            // style={{width:"20vw"}}
            src={process.env.PUBLIC_URL + data.Text}
            alt="select"
          />
          {!move  && (
            <div className={styles.loadingDiv}>
              <CircularProgress
                className={styles.LoadingBar}
                color="inherit"
                thickness={5}
                size={150}
              />
            </div>
          )}
        </div>
      </Row>
      {/* StoryPage */}
      {data[person].map(({ back }, i) => AddBackground(back, i))}
    </Container>
  );
};

export default StoryPic;
