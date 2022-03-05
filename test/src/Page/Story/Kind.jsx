import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Kind = ({ ShowNext, person, display = "block" }) => {
  const dragHeightRef = useRef();
  const envelopeRef = useRef();
  const [mute, isMute] = useState(false);
  const [pos, setPos] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const navigate = useNavigate();
  const StopDrag = (e, ui, name) => {
    console.log(ui.y, ui.lastY);
    if (
      dragHeightRef.current.clientHeight - envelopeRef.current.clientHeight <=
      ui.y + 15
    ) {
      ShowNext(name);
    }
  };

  return (
    <Container
      fluid
      className={styles.PDiv}
      style={{
        display: `${display}`,
        backgroundColor: "#F3C89D",
        position: "relative",
      }}
    >
      <Row>
        <Col
          className="d-flex justify-content-between mt-5"
          style={{ marginBottom: "15%" }}
        >
          <img
            style={{
              minHeight: "25px",
              height: "5vw",
              width: "auto",
              paddingLeft: "3%",
            }}
            src={process.env.PUBLIC_URL + "/images/backIcon.png"}
            alt="back"
            onClick={() => navigate("/?section=Gender")}
          />
          <img
            style={{
              minHeight: "25px",
              height: "5vw",
              width: "auto",
              paddingRight: "3%",
            }}
            src={
              mute
                ? process.env.PUBLIC_URL + "/images/mute.png"
                : process.env.PUBLIC_URL + "/images/play.png"
            }
            alt="test"
            onClick={() => isMute(!mute)}
          />
        </Col>
      </Row>
      <div className={styles.LeftCloud}>
        <img
          src={process.env.PUBLIC_URL + "/images/Story/Kind/leftcloud.png"}
          alt="left"
        />
      </div>
      <div className={styles.KindCenterPic}>
        <img
        loading="lazy"
          src={process.env.PUBLIC_URL + "/images/Story/Kind/choice.png"}
          alt="select"
        />
      </div>
      <Row>
        <Col className={styles.KindBottom + " justify-content-center"}>
          <img
            style={{ width: "20vw " }}
            src={process.env.PUBLIC_URL + "/images/Story/Kind/remind.png"}
            alt="test"
          />
        </Col>
      </Row>
      {/* cloud */}
      <div className={styles.RightCloud}>
        <img
          src={process.env.PUBLIC_URL + "/images/Story/Kind/rightcloud.png"}
          alt="right"
        />
      </div>


      <div className={styles.DragBorn} ref={dragHeightRef}>
        <Draggable
          position={pos[0]}
          bounds="parent"
          axis="y"
          onStop={(e, ui) => StopDrag(e, ui, "Born")}
        >
          <div ref={envelopeRef}>
            <img
              style={{ width: "80% " }}
              src={process.env.PUBLIC_URL + "/images/Story/Kind/envelope.png"}
              alt="test"
            />
          </div>
        </Draggable>
      </div>
      <div className={styles.DragGrow}>
        <Draggable
          position={pos[1]}
          bounds="parent"
          axis="y"
          onStop={(e, ui) => StopDrag(e, ui, "Grow")}
        >
          <div>
            <img
              style={{ width: "80% " }}
              src={process.env.PUBLIC_URL + "/images/Story/Kind/envelope.png"}
              alt="test"
            />
          </div>
        </Draggable>
      </div>
      <div className={styles.DragStrong}>
        <Draggable
          position={pos[2]}
          bounds="parent"
          axis="y"
          onStop={(e, ui) => StopDrag(e, ui, "Strong")}
        >
          <div>
            <img
              style={{ width: "80% " }}
              src={process.env.PUBLIC_URL + "/images/Story/Kind/envelope.png"}
              alt="test"
            />
          </div>
        </Draggable>
      </div>
    </Container>
  );
};

export default Kind;
