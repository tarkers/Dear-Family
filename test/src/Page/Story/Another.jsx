import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
const Another = ({ ToSend, other, ShowNext, display = "block" }) => {
  return (
    <Container
      fluid
      className={styles.PDiv}
      style={{
        display: `${display}`,
        padding: "0",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src={process.env.PUBLIC_URL + "/images/Story/Another/back.png"}
          alt="back"
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
              `/images/Story/Another/Pic/${other.first}.png`
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
              `/images/Story/Another/Pic/${other.second}.png`
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
              style={{ height: "3vh", width: "auto", marginTop: "3vh" }}
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
