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
      <div  >
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
          onClick={ToEnvelope}
        />
        <img
          className={styles.HeartPic}
          src={process.env.PUBLIC_URL + "/images/Intro/P1/heart.png"}
          alt="heart"
        />
      </div>

      {/* <div
        className={styles.P1Pic + " d-flex justify-content-center"}
        onClick={ToEnvelope}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/Intro/P1/name.png"}
          alt="loadPic"
        />

        <div className="d-flex " style={{ position: "relative" }}>
        <img
            className={styles.P1Heart}
            src={process.env.PUBLIC_URL + "/images/Intro/P1/heart.png"}
            alt="heart"
          />
          <img
            className="align-self-end"
            style={{ height: "60%" }}
            src={process.env.PUBLIC_URL + "/images/Intro/P1/envelope.png"}
            alt="envelope"
          />
        </div>
      </div> */}
    </Container>
    // <Envelope/>
  );
};

export default Loading;
