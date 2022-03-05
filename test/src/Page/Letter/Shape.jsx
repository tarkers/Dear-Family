import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Born from "../../BornLetter.json";
import Strong from "../../StrongLetter.json";
import Grow from "../../GrowLetter.json";



const Shape = ({ ShowNext,param, display = "block" }) => {
  const InitData = () => {
    switch (param.kind) {
      case "Born":
        return Born;
      case "Grow":
        return Grow;
      case "Strong":
        return Strong;
      default:
        return Born;
    }
  };
  const data = InitData();

  // useEffect(() => {

  // }, []);
  return (
    <Container
      style={{
        display: `${display}`,
        overflowX: "hidden",
        backgroundColor: "rgb(249, 243, 238)",
        height:"100vh"
      }}
      fluid
    >
      <Row>
        <Col style={{ padding: 0 }}>
          <img
            src={process.env.PUBLIC_URL + data.Cloud}
            alt="cloud"
            style={{ height: "5vh" }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center mb-2 mt-5">
          <img
            src={process.env.PUBLIC_URL + "/images/Letter/Kind/bar.png"}
            alt="bar"
            style={{ height: "6vh" }}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "5vh", width: "100%" }}>
          <div className="d-flex flex-row" style={{ overflow: "auto" }}>
            {data[param.person].map((image, i) => (
              <Col
                key={i}
                className="justify-content-center d-flex flex-column bd-highlight m-3"
              >
                <div className="mb-3">
                  <img
                    src={process.env.PUBLIC_URL + data.Title[i]}
                    alt="title"
                    style={{ height: "6vh", width: "auto" }}
                    // style={{ height: "6vh", width: "auto" }}
                    onClick={() => console.log(image)}
                  />
                </div>
                <div className="mb-3">
                  <img
                    src={process.env.PUBLIC_URL + image}
                    alt="picurl"
                    style={{ width: "28vw", height: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/Letter/Kind/pen.png"}
                    alt="pen"
                    className={styles.clickPen}
                    onClick={() => ShowNext(i)}
                  />
                </div>
              </Col>
              // <img src={process.env.PUBLIC_URL+url} key={i} alt={title}  onClick={(e)=>{ShowNext(title)}} />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={styles.shapeIcon}>
          <img
            style={{ width: "15vw", height: "auto" }}
            src={process.env.PUBLIC_URL + "/images/Letter/iconyellow.png"}
            alt="icon"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Shape;
