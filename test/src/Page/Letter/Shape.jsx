import React, { useState } from "react";
import Slider from "react-touch-drag-slider";
// import { Pagination } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import styles from './style.module.scss'
const Shape = ({ ShowNext, display = "block" }) => {
  const kindname = "boy";
  const [index, setIndex] = useState(0);
  const images = {
    boy: [
      {
        url: "/images/Letter/Kind//Boy/1.png",
        title: "/images/Letter/Kind//Title/1.png",
      },
      {
        url: "/images/Letter/Kind//Boy/2.png",
        title: "/images/Letter/Kind//Title/2.png",
      },
      {
        url: "/images/Letter/Kind//Boy/3.png",
        title: "/images/Letter/Kind//Title/3.png",
      },
      {
        url: "/images/Letter/Kind//Boy/4.png",
        title: "/images/Letter/Kind//Title/4.png",
      },
      {
        url: "/images/Letter/Kind//Boy/5.png",
        title: "/images/Letter/Kind//Title/5.png",
      },
      {
        url: "/images/Letter/Kind//Boy/6.png",
        title: "/images/Letter/Kind//Title/6.png",
      },
      {
        url: "/images/Letter/Kind//Boy/7.png",
        title: "/images/Letter/Kind//Title/7.png",
      },
      {
        url: "/images/Letter/Kind//Boy/8.png",
        title: "/images/Letter/Kind//Title/8.png",
      },
      {
        url: "/images/Letter/Kind//Boy/9.png",
        title: "/images/Letter/Kind//Title/9.png",
      },
      {
        url: "/images/Letter/Kind//Boy/10.png",
        title: "/images/Letter/Kind//Title/10.png",
      },
    ],
    girl: [
      {
        url: "/images/Letter/Kind//Girl/1.png",
        title: "/images/Letter/Kind//Title/1.png",
      },
      {
        url: "/images/Letter/Kind//Girl/2.png",
        title: "/images/Letter/Kind//Title/2.png",
      },
      {
        url: "/images/Letter/Kind//Girl/3.png",
        title: "/images/Letter/Kind//Title/3.png",
      },
      {
        url: "/images/Letter/Kind//Girl/4.png",
        title: "/images/Letter/Kind//Title/4.png",
      },
      {
        url: "/images/Letter/Kind//Girl/5.png",
        title: "/images/Letter/Kind//Title/5.png",
      },
      {
        url: "/images/Letter/Kind//Girl/6.png",
        title: "/images/Letter/Kind//Title/6.png",
      },
      {
        url: "/images/Letter/Kind//Girl/7.png",
        title: "/images/Letter/Kind//Title/7.png",
      },
      {
        url: "/images/Letter/Kind//Girl/8.png",
        title: "/images/Letter/Kind//Title/8.png",
      },
      {
        url: "/images/Letter/Kind//Girl/9.png",
        title: "/images/Letter/Kind//Title/9.png",
      },
      {
        url: "/images/Letter/Kind//Girl/10.png",
        title: "/images/Letter/Kind//Title/10.png",
      },
    ],
  };

  const changeItem = (e, num) => {
    setIndex(num - 1);
  };
  return (
    <Container style={{ display: `${display}`, overflowX: "hidden" }} fluid>
      <Row>
        <Col style={{ padding: 0 }}>
          <img
            src={process.env.PUBLIC_URL + "/images/Letter/Kind/cloud.png"}
            alt="bar"
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
        <Col style={{ marginTop:"5vh", width: "100%" }}>
          <div className="d-flex flex-row" style={{ overflow: "auto" }}>
            {images[kindname].map(({ url, title }, i) => (
              <Col index={i} className="justify-content-center d-flex flex-column bd-highlight m-3">
                <div className="mb-3">
                  <img
                    src={process.env.PUBLIC_URL + title}
                    alt="title"
                    style={{ height: "4vh", width: "auto" }}
                  />
                </div>
                <div className="mb-3">
                  <img
                    src={process.env.PUBLIC_URL + url}
                    alt="picurl"
                    style={{ width: "28vw", height: "auto" }}
                  />
                </div>
                <div >
                  <img
                    src={process.env.PUBLIC_URL + "/images/Letter/Kind/pen.png"}
                    alt="pen"
                    className={styles.clickPen}
                    onClick={()=>ShowNext(i)}
                  />
                </div>
              </Col>
              // <img src={process.env.PUBLIC_URL+url} key={i} alt={title}  onClick={(e)=>{ShowNext(title)}} />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col
         className={styles.shapeIcon}
        >
         <img style={{ width: "15vw", height: "auto" }} src={process.env.PUBLIC_URL+"/images/Letter/iconyellow.png"} alt="icon" />
        </Col>
      </Row>
    </Container>
  );
};

export default Shape;
