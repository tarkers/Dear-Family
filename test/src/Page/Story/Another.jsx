import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
const Another = ({ ToSend, other, ShowNext, display = "block" }) => {
  // console.log(other)
  return (
    <Container
      fluid
      className={styles.PDiv}
      style={{
        display: `${display}`,
        padding: "0",
        backgroundColor: "#ae4439",
      }}
    >
      <img
        style={{ position: "absolute",top:0,right:0, width: "93%", height: "auto" }}
        src={process.env.PUBLIC_URL + "/images/Story/Another/back.png"}
        alt="back"
      />
      <div style={{ position: "relative" }}>
        <div style={{ width: "100%", height: "80vh" }}></div>

        <img
          className={styles.AnotherNext}
          // className={styles.letterImg}
          src={process.env.PUBLIC_URL + `/images/Story/Another/next.png`}
          alt="choose"
        />
        {/* First */}
        <div
          className={styles.AnotherFirst}
          onClick={() => {
            ShowNext(other.first);
          }}
        >
          <img
            style={{ height: "80%" }}
            // className={styles.letterImg}
            src={
              process.env.PUBLIC_URL +
              `/images/Story/Another/${other.gender}/${other.first}.png`
            }
            alt="choose"
          />
          <div>
            <img
              style={{ height: "3vh", width: "auto", marginTop: "3vh" }}
              // className={styles.letterImg}
              src={
                process.env.PUBLIC_URL +
                `/images/Story/Another/Text/${other.first}.png`
              }
              alt="choose"
            />
          </div>
        </div>
        {/* Second */}
        <div
          className={styles.AnotherSecond}
          onClick={() => {
            ShowNext(other.second);
          }}
        >
          <img
            style={{ height: "80%" }}
            // className={styles.letterImg}
            src={
              process.env.PUBLIC_URL +
              `/images/Story/Another/${other.gender}/${other.second}.png`
            }
            alt="choose"
          />
          <div>
            <img
              style={{ height: "3vh", width: "auto", marginTop: "3vh" }}
              // className={styles.letterImg}
              src={
                process.env.PUBLIC_URL +
                `/images/Story/Another/Text/${other.second}.png`
              }
              alt="choose"
            />
          </div>
        </div>
        {/* send */}
        <div className={styles.AnotherSend} onClick={() => ToSend()}>
          <img
            style={{ height: "80%" }}
            // className={styles.letterImg}
            src={process.env.PUBLIC_URL + "/images/Story/Another/Pic/Send.png"}
            alt="choose"
          />
          <div>
            <img
              style={{ height: "3vh", width: "auto", marginTop: "1vh" }}
              src={
                process.env.PUBLIC_URL + "/images/Story/Another/Text/Send.png"
              }
              alt="choose"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Another;
