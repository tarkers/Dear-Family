import React, { useState } from "react";
import Slider from "react-touch-drag-slider";
import { Pagination } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
const Shape = ({ShowNext,display="block"}) => {
  const [index, setIndex] = useState(0);
  const images = [
    { url: "/images/Story/shape.png", title: "dd" },
    { url: "/images/Letter/choose.png", title: "dd" },
    { url: "/images/Story/shape.png", title: "dd" },
    { url: "/images/Story/shape.png", title: "dd" },
    { url: "/images/Letter/choose.png", title: "dd" },
    { url: "/images/Letter/choose.png", title: "dd" },
    { url: "/images/Story/shape.png", title: "dd" },
    { url: "/images/Story/shape.png", title: "dd" },
    { url: "/images/Letter/choose.png", title: "dd" },
    { url: "/images/Story/shape.png", title: "dd" },
  ];
  const changeItem = (e, num) => {
    setIndex(num-1);
  };
  return (
    <Container style={{display:`${display}`}}>
      <Row>
        <Col className="justify-content-center mb-2 mt-5">
          <label>左右滑動選擇款式</label>
        </Col>
      </Row>
      <Row>
        <Col style={{ height: "70vh",width:"100%"  }}>
          <Slider
            onSlideComplete={(i) => {
              console.log("finished dragging, current slide is", i);
              setIndex(i);
            }}
            onSlideStart={(i) => {
              console.log("started dragging on slide", i);
            }}
            activeIndex={index}
            threshHold={100}
            transition={0.5}
            scaleOnDrag={true}
          >
            {images.map(({ url, title }, i) => (
              <img src={process.env.PUBLIC_URL+url} key={i} alt={title}  onClick={(e)=>{ShowNext(title)}} />
            ))}
          </Slider>
        </Col>
      </Row>
      <Row>
        <Col
          className="mb-3"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <Pagination count={10} page={index+1} color="primary" onChange={changeItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default Shape;
