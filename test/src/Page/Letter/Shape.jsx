import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Born from "../../BornLetter.json";
import Strong from "../../StrongLetter.json";
import Grow from "../../GrowLetter.json";
import Slider from "react-slick";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Shape = ({ ShowNext, param, display = "block" }) => {
  const Picref = useRef();
  const [shapeCenter, setShapeCenter] = useState(5);
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
  useEffect(() => {
    Picref.current.slickGoTo(shapeCenter);
  }, [shapeCenter]);

  const data = InitData();
  const settings = {
    dots:true,
    // fade: true,
    className: "center",
    centerMode: true,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
  };
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
      <Row className="d-flex p-2 bd-highlight">
        <Col></Col>
      </Row>
      <Row style={{ marginTop: 50, position: "relative" }}>
        <Slider
          ref={Picref}
          {...settings}
          afterChange={(index) => {
            // console.log(index);
            setShapeCenter(index);
            // if (index === 9) {
            //   setShapeCenter(0);
            // } else {
            //   setShapeCenter(index + 1);
            // }
          }}
        >
          {data[param.gender].map((image, i) => (
            <div
              className={
                shapeCenter === i ? styles.ShapeCenter : styles.ShapeOther
              }
              style={{ position: "relative" }}
            >
              <img
                src={process.env.PUBLIC_URL + data.Title[i]}
                alt="title"
                // style={{ width: "6vh", margin: "auto" }}
                onClick={() => console.log(image)}
              />
              <img
                src={process.env.PUBLIC_URL + image}
                alt="picurl"
                // style={{ width: "90%", margin: "auto" }}
              />
            </div>
          ))}
        </Slider>
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
