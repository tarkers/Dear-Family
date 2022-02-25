import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import styles from "./style.module.scss";
const Gender = ({ShowNext,display="block"}) => {
  const [sname, setName]=useState("")
  const [personList, setPersonList] = useState([
    {
      name: "male",
      hover: true,
      img: "/images/Letter/click.png",
      hoverImg: "/images/Letter/choose.png",
    },
    {
      name: "female",
      hover: true,
      img: "/images/Letter/click.png",
      hoverImg: "/images/Letter/choose.png",
    },
  ]);
  const SetClick = (name, reset = false) => {
    setName(name)
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
    <Container style={{display:`${display}`}}>
      <Row>
        <label>選擇角色</label>
      </Row>
      <Row style={{ margin: "2em" }}>
        {personList.map((person, index) => {
          return (
            <Col key={index} className="col-6">
              <img
                className={styles.letterImg}
                src={person.hover ? process.env.PUBLIC_URL+person.hoverImg : process.env.PUBLIC_URL+person.img}
                alt="choose"
                onClick={() => SetClick(person.name)}
              />
            </Col>
          );
        })}
      </Row>
      <Row className="justify-content-center">
        {/* <Col  xs="3">
        我想寄給:
      </Col>
      <Col xs="4">
        <input style={{width:"80%"}} placeholder="輸入名稱"></input>
      </Col> */}
        <Col xs>
        <Button variant="contained" color="primary" onClick={()=>ShowNext(sname)}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Gender;
