import React, { useRef, useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
const Kind = ({ ToStory, display = "block" }) => {
  const dragHeightRef = useRef();
  const [modal, setModal] = useState(false);
  const envelopeRef = useRef();
  const [pos, _] = useState([
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
      ToStory(name);
    } else {
      setModal(true);
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
      <div className={styles.LeftCloud}>
        <img
          src={process.env.PUBLIC_URL + "/images/Story/Kind/leftcloud.png"}
          alt="left"
        />
      </div>
      <div className={styles.KindCenterPic}>
        <img
          src={process.env.PUBLIC_URL + "/images/Story/Kind/choice.png"}
          alt="select"
        />
      </div>
      <Row>
        <Col className={styles.KindBottom + " justify-content-center"}>
          <img
            style={{ width: "25vw " }}
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
      <Modal
        size="sm"
        className={styles.ModalStyle}
        centered={true}
        show={modal}
        onHide={() => setModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body closeButton style={{ textAlign: "center",fontSize:"25px",fontWeight:"bold" }}>
          請下拉至最底部
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Kind;
