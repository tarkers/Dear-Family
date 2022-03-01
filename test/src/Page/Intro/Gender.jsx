import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
const Gender = ({ ShowNext, display = "block" }) => {
  const navigate = useNavigate();
  const ToStory = () => {
    navigate(`/story/${sname}`);
  };
  const [sname, setName] = useState("");

  const [personList, setPersonList] = useState([
    {
      name: "girl",
      hover: false,
      img: "/images/Story/P4-3.png",
      hoverImg: "/images/Story/P4-5.png",
    },
    {
      name: "boy",
      hover: false,
      img: "/images/Story/P4-4.png",
      hoverImg: "/images/Story/P4-6.png",
    },
  ]);
  const SetClick = (name, reset = false) => {
    setName(name);
    if (reset) {
      setPersonList(
        personList.map((x) => {
          return x.name === name ? { ...x, hover: false } : { ...x };
        })
      );
    } else {
      setPersonList(
        personList.map((x) => {
          return x.name === name
            ? { ...x, hover: true }
            : { ...x, hover: false };
        })
      );
    }
  };
  return (
    <Container
      fluid
      className={styles.PDiv}
      style={{
        display: `${display}`,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Story/PB4.png)`,
      }}
    >
      <Row style={{ height: "30%" }}>
        <label>選擇角色</label>
      </Row>
      <Row className={styles.alignCenter} style={{ marginTop: "1em" }}>
        {personList.map((person, index) => {
          return (
            // <Col key={index} className="col-6">
            <img
              key={index}
              style={person.hover?{ width: "35%", padding: " 10vh 3vh 0 3vh" }:{ width: "30%", padding: " 10vh 3vh 0 3vh" }}
              // className={styles.letterImg}
              src={
                person.hover
                  ? process.env.PUBLIC_URL + person.hoverImg
                  : process.env.PUBLIC_URL + person.img
              }
              alt="choose"
              onClick={() => SetClick(person.name)}
            />
            // </Col>
          );
        })}
      </Row>
      <Row className="justify-content-center" style={{ height: "30%" }}>
        {/* <Col  xs="3">
        我想寄給:
      </Col>
      <Col xs="4">
        <input style={{width:"80%"}} placeholder="輸入名稱"></input>
      </Col> */}
        <Col className={styles.alignCenter}>
          {/* <Button variant="contained" color="primary" onClick={()=>ShowNext(sname)}>
            Next
          </Button> */}
          <img
            className={styles.P4NextPic}
            src={process.env.PUBLIC_URL + "/images/Story/P4-7.png"}
            alt="next"
            onClick={() => ToStory()}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Gender;
