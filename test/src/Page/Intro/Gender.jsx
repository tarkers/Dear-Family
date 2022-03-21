import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
const Gender = ({ToKind, display = "block" }) => {
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
                  onClick={() => 
                    ToKind(person.name)
                    // navigate(`/story/${person.name}`)
                  }
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
