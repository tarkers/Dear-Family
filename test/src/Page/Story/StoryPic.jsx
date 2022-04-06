import React, { useState, useRef, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { setData } from "../../sound";
import { Element, scroller } from "react-scroll";
import classNames from "classnames";
const StoryPic = ({ ShowNext, params, data, display = "block" }) => {
  const clickRef = useRef();
  const soundRef = useRef();
  const [backG, setbackG] = useState(false);
  useEffect(() => {
    clickRef.current.volume=0.4
    soundRef.current.volume=0.8
  }, [])
  
  const initState = () => {
    let tmp = [];
    for (let i = 0; i < 20; ++i) {
      tmp.push("none");
    }

    return tmp;
  };
  useEffect(() => {
    // clickRef.current.volume = 0.2;
  }, []);

  const ClearData = () => {
    setbackG(false);
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

  const StoryPage = (back, i) => {
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
      <Element name={`StoryPage_${i}`} className="element">
        <Row
          style={{
            display: `${index[i * 2 + 1]}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", padding: "0" }}
            src={process.env.PUBLIC_URL + back}
            alt="select"
          />
          <div
            onClick={() => {
              clickRef.current.play();
              setbackG(true);
              soundRef.current.src=process.env.PUBLIC_URL+`/images/Story/${params.kind}/Audio/BackStory/${i+1}.mp3`
              // setsoundsrc(process.env.PUBLIC_URL+`/images/Story/${params.kind}/BackStory/${i}.mp3`)
            }}
          >
            <img className={itemStyle} src={itemBack} alt="item" />
          </div>
          {/* HidePage */}
          {backG && (
            <div className={styles.BackgroundStyle}>
              <img
                src={process.env.PUBLIC_URL + hideBack}
                alt="back"
                onClick={() => {
                  soundRef.current.pause();
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
    );
  };
  const BackgroundPage = (i) => {
    return (
      <Element name={`Intro_${i}`} className="element">
        <Row
          style={{ display: `${index[i * 2]}` }}
          onClick={() => {
            clickRef.current.play();
            setIndex(
              index.map((_, ti) => (ti <= i * 2 + 1 ? "block" : "none"))
            );
            scrollTo(`StoryPage_${i}`);
            soundRef.current.src=process.env.PUBLIC_URL+`/images/Story/${params.kind}/Audio/Story/${i+1}.mp3`
            // setsoundsrc(process.env.PUBLIC_URL+`/images/Story/${params.kind}/Story/${i}.mp3`)
          }}
        >
          <div style={{ position: "relative", padding: "0" }}>
            <img
              style={{ width: "100%" }}
              src={process.env.PUBLIC_URL + data.Intro[i].back}
              alt="back"
            />
            <img
              className={
                index[i * 2] === "block"
                  ? classNames(styles.BackgroundTitle, styles.move)
                  : styles.BackgroundTitle
              }
              src={process.env.PUBLIC_URL + data.Intro[i].title}
              alt="text"
            />
            <img
              className={classNames(styles.BackgroundText, styles.move)}
              src={process.env.PUBLIC_URL + data.Intro[i].text}
              alt="text"
            />
          </div>
        </Row>
      </Element>
    );
  };
  const AddBackground = (back, i) => {
    return (
      <div key={i}>
        {/* BackgroundPage */}
        {BackgroundPage(i)}
        {/* StoryPage */}
        {StoryPage(back, i)}
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
        // volume="0.1"
        src={setData("Click").music}
        ref={clickRef}
        muted={false}
      />
      <audio
        // src={process.env.PUBLIC_URL+`/images/Story/${params.kind}/Audio/Story/1.mp3`}
        autoPlay
        ref={soundRef}
        muted={false}
        onCanPlay={()=>soundRef.current.play()}
      />
      <Row>
        {/* Start Page */}
        <div
          style={{
            position: "relative",
            padding: "0",
            color: "white",
            // ,backgroundImage"url(" + process.env.PUBLIC_URL + data.Back + ")"
          }}
        >
          <img
            style={{
              position: "absolute",
              zIndex: "-1",
              opacity: 0.9,
              height: "100vh",
              width: "100%",
            }}
            src={process.env.PUBLIC_URL + data.Back}
            alt="select"
          />
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
              setIndex(index.map((_, ti) => (ti === 0 ? "block" : "none")));
              scrollTo(`Intro_0`);
              // soundRef.current.pause()
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
