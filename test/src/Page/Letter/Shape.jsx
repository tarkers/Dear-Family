import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Born from "../../BornLetter.json";
import Strong from "../../StrongLetter.json";
import Grow from "../../GrowLetter.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";
const Shape = ({ ShowNext, param, display = "block" }) => {
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
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const data = InitData();
  return (
    <Container
      style={{
        display: `${display}`,
        overflowX: "hidden",
        backgroundColor: "rgb(255, 255, 255)",
        height: "100vh",
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
      <Row style={{ marginTop: 20, position: "relative" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
          pagination={pagination}
        >
          {data[param.gender].map((image, i) => (
            <SwiperSlide
              key={i}
              style={{ padding: "15px" }}
              onClick={() => ShowNext(i)}
            >
              <div style={{width:"25vw"}}>
                <img
                  src={process.env.PUBLIC_URL + data.Title[i]}
                  alt="title"
                  style={{ height: "6vh", width: "auto", margin: "auto" }}
                  onClick={() => console.log(image)}
                />
                <img
                  src={process.env.PUBLIC_URL + image}
                  alt="picurl"
                  style={{
                    height: "auto",
                    width: "inherit",
                    margin: "auto",
                    marginTop: "0px",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
