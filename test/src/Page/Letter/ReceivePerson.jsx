import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import styles from "./style.module.scss";
const ReceivePerson = ({ShowNext,display="block"}) => {
  // {ShowNext}
  const [personData, setPersonData] = useState({name:"",pic:""})
  const [personList, setPersonList] = useState([
    {
      name: "dad",
      click: true,
      img: "/images/Letter/click.png",
      hoverImg: "/images/Letter/choose.png",
    },
    {
      name: "mom",
      click: true,
      img: "/images/Letter/click.png",
      hoverImg: "/images/Letter/choose.png",
    },
    {
      name: "grandpa",
      click: true,
      img: "/images/Letter/click.png",
      hoverImg: "/images/Letter/choose.png",
    },
    {
      name: "grandma",
      click: true,
      img: "/images/Letter/click.png",
      hoverImg: "/images/Letter/choose.png",
    },
  ]);

  const SetClick = (name,index,reset = false) => {
    if (reset) {
      setPersonList(
        personList.map((x) => {
          return x.name === name ? { ...x, click: false } : { ...x };
        })
      );
    } else {
      setPersonList(
        personList.map((x) => {
          return x.name === name
            ? { ...x, click: true }
            : { ...x, click: false };
        })    
      );
      setPersonData({...personData,pic:personList[index].name})
    }
  };

  return (
    <Container fluid  style={{display:`${display}`}}>
      <Row>
        <label>請輸入收件人</label>
      </Row>
      <Row>
      {/* style={{ margin: "2em" }} */}
        {personList.map((person, index) => {
          return (
            <Col key={index} className="col-6">
              <img
                className={styles.letterImg}
                src={person.click ? process.env.PUBLIC_URL+person.hoverImg : process.env.PUBLIC_URL+person.img}
                alt="choose"
                // onTouchStart={() => SetClick(person.name)}
                // onTouchEnd={() => SetClick(person.name, true)}
                onClick={() => SetClick(person.name,index)}
                // onMouseDown={() => SetClick(person.name)}
                // onMouseLeave={() => SetClick(person.name, true)}
              />
            </Col>
          );
        })}
      </Row>
      <Row className="justify-content-center">
        <Col  xs="3">
          我想寄給:
        </Col>
        <Col xs="4">
          <input style={{width:"80%"}} placeholder="輸入名稱"
          onChange={e=> setPersonData({...personData,name:`${e.target.value}`})}
          ></input>
        </Col>
        <Col  xs="3">
          {/* onClick={ShowNext(personData.name,personData.pic)} */}
        <Button variant="contained" color="primary" onClick={()=>ShowNext(personData.name,personData.pic)}>
            寄信
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ReceivePerson;
