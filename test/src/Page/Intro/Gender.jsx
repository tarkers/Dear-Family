import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
const Gender = ({ ToKind, display = "block" ,ToHome}) => {
  const Pic_Dict = {
    Upcloud: "/images/Intro/P4/upcloud.png",
    Lowcloud: "/images/Intro/P4/lowcloud.png",
    Title: "/images/Intro/P4/Title.png",
    UpperText: "/images/Intro/P4/upperText.png",
  };
  const personList = [
    {
      name: "Boy",
      img: "/images/Intro/P4/boy.png",
      text: "/images/Intro/P4/boy.png",
    },
    {
      name: "Girl",
      img: "/images/Intro/P4/girl.png",
      text: "/images/Intro/P4/girl.png",
    },
  ];
  return (
    <Container
      fluid
      className={styles.PDiv}
      style={{
        backgroundColor: "#F3c89D",
        position: "relative",
        display: `${display}`,
      }}
    >
      <div className={styles.BackIcon + " d-flex justify-content-start"}>
        <img
          src={process.env.PUBLIC_URL + "/images/Home.png"}
          alt="back"
          onClick={() => ToHome()}
        />
      </div>
      <Row className=" d-flex justify-content-center">
        <img
          className={styles.P4UpperText}
          src={process.env.PUBLIC_URL + Pic_Dict.UpperText}
          alt="choose"
        />
      </Row>
      <Row className=" d-flex justify-content-center">
        <img
          style={{ width: "auto", height: "4vh" }}
          // className={styles.letterImg}
          src={process.env.PUBLIC_URL + Pic_Dict.Title}
          alt="choose"
        />
      </Row>
      <Row
        className={styles.alignCenter + " d-flex justify-content-center"}
        style={{ margin: "1em", position: "relative", zIndex: 1 }}
      >
        {personList.map((person, index) => {
         
          return (
            <img
              key={index}
              style={{ width: "40%" }}
              // className={styles.letterImg}
              src={process.env.PUBLIC_URL + person.img}
              alt="choose"
              onClick={() => {
                ToKind(person.name)}}
            />
          );
        })}
      </Row>
      <div className={styles.P4Cloud}>
        <img
          className={styles.Up}
          src={process.env.PUBLIC_URL + Pic_Dict.Upcloud}
          alt="Upcloud"
        />
        <img
          className={styles.Low}
          src={process.env.PUBLIC_URL + Pic_Dict.Lowcloud}
          alt="Lowcloud"
        />
      </div>
    </Container>
  );
};

export default Gender;
