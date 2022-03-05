import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
const Gender = ({ display = "block" }) => {
  const navigate = useNavigate();
  const [mute, isMute] = useState(false);
  const personList = [
    {
      name: "Boy",
      img: "/images/Intro/P4/boypic.png",
      text: "/images/Intro/P4/boy.png",
    },
    {
      name: "Girl",
      img: "/images/Intro/P4/girlpic.png",
      text: "/images/Intro/P4/girl.png",
    },
  ];
  return (
    <Container
      fluid
      className={styles.PDiv}
      style={{
        display: `${display}`,
        position: "relative",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Intro/P4/back.png)`,
      }}
    >
      <div className={styles.BCIcon + " d-flex justify-content-end"}>
        <img
          src={
            mute
              ? process.env.PUBLIC_URL + "/images/mute.png"
              : process.env.PUBLIC_URL + "/images/play.png"
          }
          alt="volume"
          onClick={() => isMute(!mute)}
        />
      </div>
      <Row style={{ height: "30%" }}></Row>
      <Row className={styles.alignCenter} style={{ margin: "1em" }}>
        {personList.map((person, index) => {
          return (
            <Col key={index}>
              <div>
                <img
                  key={index}
                  style={{ width: "70%", marginTop: "10vh" }}
                  // className={styles.letterImg}
                  src={process.env.PUBLIC_URL + person.img}
                  alt="choose"
                  onClick={() => navigate(`/story/${person.name}`)}
                />
              </div>
              <div>
                <img
                  key={index}
                  style={{ width: "30%", marginTop: "5vh" }}
                  // className={styles.letterImg}
                  src={process.env.PUBLIC_URL + person.text}
                  alt="choose"
                />
              </div>
            </Col>
          );
        })}
      </Row>
      <Row className="justify-content-center">
        <Col className={styles.alignCenter}>
          <img
            className={styles.P4NextPic}
            src={process.env.PUBLIC_URL + "/images/Intro/P4/text.png"}
            alt="next"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Gender;