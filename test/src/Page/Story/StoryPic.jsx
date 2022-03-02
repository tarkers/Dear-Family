import React, { useState ,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import styles from "./style.module.scss";
import { Divider } from "@mui/material";
import Born from "../../Born.json";
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
const StoryPic = ({ ShowNext, kind, display = "block" }) => {
  const initState = () => {
    let tmp = [];
    tmp.push("block");
    for (let i = 0; i < 30; ++i) {
      tmp.push("none");
    }
    return tmp;
  };

  const nametest = "girl";
  const [index, setIndex] = useState(initState);
  useEffect(() => {
    // console.log('Do something after counter has changed', index);
 }, [index]);
  const scrollTo = (element, delay = 300, smooth = "easeOutQuad") => {
    scroller.scrollTo(element, {
      duration: 300,
      delay: delay,
      smooth: smooth,
    });
  };
  const AddBackground = (back, i) => {
    let hideBack = Born.BackStory[i].back;
    if (nametest === "girl" && "gback" in Born.BackStory[i]) {
      hideBack = Born.BackStory[i].gback;
    }

    return (
      <div key={i}>
        {/* BackgroundPage */}

          <Element  name={`Intro_${i}`} className="element">
            <Row style={{display:`${index[i*3]}`}}>
              <div style={{ position: "relative", padding: "0" }}>
                <img
                  style={{ width: "100%" }}
                  src={process.env.PUBLIC_URL + Born.Intro[i].back}
                  alt="select"
                />
                <img
                  className={styles.BackgroundText}
                  src={process.env.PUBLIC_URL + Born.Intro[i].text}
                  alt="select"
                />
                <div
                  className={styles.NextTriangle}
                  onClick={() =>{
                    setIndex(index.map((_,ti)=>(ti<=i*3+1?"block":"none")));
                    scrollTo(`StoryPage_${i}`)
                  }}
                ></div>
              </div>
            </Row>
          </Element>
        {/* StoryPage */}

          <Element name={`StoryPage_${i}`} className="element">
            <Row style={{display:`${index[i*3+1]}`, position: "relative"}} >
              <img
                style={{ width: "100%", padding: "0" }}
                src={process.env.PUBLIC_URL + back}
                alt="select"
              />
              <div onClick={() => {
                 setIndex(index.map((_,ti)=>(ti<=i*3+2?"block":"none")));
                scrollTo(`hideBack_${i}`)
              }}>
                <img
                  className={styles[`BornItem_${i + 1}`]}
                  src={process.env.PUBLIC_URL + Born.Item[i].back}
                  alt="select"
                />
              </div>
            </Row>
          </Element>

        {/* <Row style={{ height: "2vh", backgroundColor: "black" }}></Row>d */}
        {/* HidePage */}

          <Element name={`hideBack_${i}`} className="element">
            <Row style={{display:`${index[i*3+2]}`}}>
              <div style={{ position: "relative", padding: "0" }}>
                <img
                  style={{ width: "100%", padding: "0" }}
                  src={process.env.PUBLIC_URL + hideBack}
                  alt="select"
                />
                <div
                  className={styles.NextTriangle}
                  onClick={() => {
                    setIndex(index.map((_,ti)=>(ti<=(i+1)*3?"block":"none")));
                    scrollTo(`Intro_${i + 1}`)}}
                />
              </div>
            </Row>
          </Element>

      </div>
    );
  };
  return (
    <Container fluid style={{ display: `${display}`, height: "100vh" }}>
      {Born.Boy.map(({ back }, i) => AddBackground(back, i))}
    </Container>
  );
};

export default StoryPic;
