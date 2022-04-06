import React, { useRef, useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import './styles.scss'
const Kind = ({ToGender, gender,ToStory, display = "block" }) => {
  const dragHeightRef = useRef();
  const Pic_Dict = {
    Upcloud: "/images/Intro/P5/upcloud.png",
    Lowcloud: "/images/Intro/P5/lowcloud.png",
    Boy: "/images/Intro/P5/Boy.png",
    Girl: "/images/Intro/P5/Girl.png",
  };
  const [modal, setModal] = useState(false);
  const envelopeRef = useRef();
  const [pos, _] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
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
      <div className={styles.BackIcon + " d-flex justify-content-start"}>
        <img
          src={process.env.PUBLIC_URL + "/images/backIcon.png"}
          alt="back"
          onClick={() =>  ToGender()}
        />
      </div>
      <div className={styles.KindCenterPic} >
        <img
          src={process.env.PUBLIC_URL + Pic_Dict[gender]}
          alt="select"
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
      <div className={styles.P4Cloud}>
        <img
          className={styles.Up}
          src={process.env.PUBLIC_URL + Pic_Dict.Upcloud}
          alt="Upcloud"
        />
        <img
          className={styles.Low}
          src={process.env.PUBLIC_URL + Pic_Dict.Lowcloud}
          alt="Lowcloud"
        />
      </div>
      <Modal
        className={styles.ModalStyle}
        centered={true}
        show={modal}
        onHide={() => setModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        dialogClassName="modal-90w"
      >
        {/* <Modal.Body  style={{background:"#F9eed6"}}> */}
        <img
          src={process.env.PUBLIC_URL +"/images/Intro/P5/Remind.png"}
          alt="remind"
          style={{width:"100%"}}
        />
        {/* </Modal.Body> */}
      </Modal>
    </Container>
  );
};

export default Kind;
