import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";
const Loading = ({ display, ToEnvelope }) => {
  return (
    <Container
      fluid
      className={styles.containerDiv}
      style={{ backgroundColor: "#ae4439", display: `${display}` }}
    >
      <div>
        <img
          className={styles.logoPic}
          src={process.env.PUBLIC_URL + "/images/Intro/P1/name.png"}
          alt="logopic"
          onClick={ToEnvelope}
        />
        <img
          className={styles.envelopePic}
          src={process.env.PUBLIC_URL + "/images/Intro/P1/envelope.png"}
          alt="envelope"
        />
        <img
          className={styles.HeartPic}
          src={process.env.PUBLIC_URL + "/images/Intro/P1/heart.png"}
          alt="heart"
        />
      </div>
      <img
        className={styles.P1Click}
        src={process.env.PUBLIC_URL + "/images/Intro/P1/click.png"}
        alt="heart"
        onClick={ToEnvelope}
      />
    </Container>
    // <Envelope/>
  );
};

export default Loading;
