import React, { useState, useEffect,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
import styles from "./style.module.scss";

import Born from "../../BornStory.json";
import { useParams } from "react-router-dom";
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
const StoryPic = ({ ShowNext, kind, display = "block" }) => {
  const { person } = useParams();
  let Page =Born
  const initState = () => {
    let tmp = [];
    tmp.push("block");
    for (let i = 0; i < 30; ++i) {
      tmp.push("none");
    }
    return tmp;
  };

  const [index, setIndex] = useState(initState);
  
  useEffect(() => {
    switch(kind){
      case "Born":
        Page=Born
      case "Grow":
        Page=Born
      case "Strong":
        Page=Born
        default:
        Page=Born
    }
  }, []);
  const scrollTo = (element, delay = 300, smooth = "easeOutQuad") => {
    scroller.scrollTo(element, {
      duration: 300,
      delay: delay,
      smooth: smooth,
    });
  };
  const AddBackground = (back, i) => {
    let hideBack = Page.BackStory[i].back;
    if (person === "Girl" && "gback" in Page.BackStory[i]) {
      hideBack = Page.BackStory[i].gback;
    }

    return (
      <div key={i}>
        {/* BackgroundPage */}

        <Element name={`Intro_${i}`} className="element">
          <Row style={{ display: `${index[i * 3]}` }}>
            <div style={{ position: "relative", padding: "0" }}>
              <img
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + Page.Intro[i].back}
                alt="select"
              />
              <img
                className={styles.BackgroundText}
                src={process.env.PUBLIC_URL + Page.Intro[i].text}
                alt="select"
              />
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
                className={styles[`BornItem_${i + 1}`]}
                src={process.env.PUBLIC_URL + Page.Item[i].back}
                alt="select"
              />
            </div>
          </Row>
        </Element>
        {/* HidePage */}

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
                onClick={() => {
                  setIndex(
                    index.map((_, ti) => (ti <= (i + 1) * 3 ? "block" : "none"))
                  );
                  if (i !== 9) scrollTo(`Intro_${i + 1}`);
                  else ShowNext();
                }}
              />
            </div>
          </Row>
        </Element>
      </div>
    );
  };
  return (
    <Container fluid style={{ display: `${display}`, height: "100vh" }}>
    {display==="block" && <ReactAudioPlayer src={process.env.PUBLIC_URL+Page.Music} autoPlay  loop/>}
      <Row>
        <div style={{ position: "relative", padding: "0" }}>
          <img
            style={{ width: "100%" }}
            src={process.env.PUBLIC_URL + Page.Start}
            alt="select"
          />
          <img
            className={styles.BornText}
            // style={{width:"20vw"}}
            src={process.env.PUBLIC_URL + Page.Text}
            alt="select"
          />
          <img
            className={styles.BornClick}
            src={process.env.PUBLIC_URL + Page.Click}
            alt="select"
            onClick={()=>scrollTo(`Intro_0`)}
          />
        </div>
      </Row>
      {Page[person].map(({ back }, i) => AddBackground(back, i))}
    </Container>
  );
};

export default StoryPic;
