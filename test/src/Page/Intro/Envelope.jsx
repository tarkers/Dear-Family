import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
const Envelope = ({ display, scrollToGo }) => {

  return (
    <Container
      fluid
      className={styles.EnDiv}
      style={{
        display: `${display}`,
        position: "relative",
        backgroundColor:"#F3C89D",
        height:" 100vh",
        width: "100vw",
        // backgroundImage: `url(${process.env.PUBLIC_URL}/images/Intro/P2/back.png)`,
      }}
    >
         <img
          className={styles.envelopeBack}
          src={`${process.env.PUBLIC_URL}/images/Intro/P2/back.png`}
          alt="back"

        />
         <img
          className={styles.P2Title}
          src={`${process.env.PUBLIC_URL}/images/Intro/P2/title.png`}
          alt="title"
        />
         <img
          className={styles.P2Text}
          src={`${process.env.PUBLIC_URL}/images/Intro/P2/text.png`}
          alt="text"
        />
         <img
          className={styles.P2Next}
          src={process.env.PUBLIC_URL + "/images/Intro/P2/next.png"}
          alt="next"
          onClick={()=>scrollToGo("Go")}
        />
    </Container>
  );
};

export default Envelope;
