import React, { useState } from "react";
import {  Container } from "react-bootstrap";
import Input from "@mui/material/Input";
import styles from "./style.module.scss";
import classNames from "classnames";
const ReceivePerson = ({ ShowNext, display = "block" }) => {
  // {ShowNext}
  const [personData, setPersonData] = useState({ name: "", person: "mom" });
  const [personList, setPersonList] = useState([
    {
      name: "mom",
      click: false,
      img: "/images/Letter/Receive/mom.png",
      clickimg: "/images/Letter/Receive/mom_1.png",
    },
    {
      name: "dad",
      click: false,
      img: "/images/Letter/Receive/dad.png",
      clickimg: "/images/Letter/Receive/dad_1.png",
    },

    {
      name: "grandpa",
      click: false,
      img: "/images/Letter/Receive/grandpa.png",
      clickimg: "/images/Letter/Receive/grandpa_1.png",
    },
    {
      name: "grandma",
      click: false,
      img: "/images/Letter/Receive/grandma.png",
      clickimg: "/images/Letter/Receive/grandma_1.png",
    },
  ]);

  const SetClick = (name, index, reset = false) => {
    setPersonData({ ...personData, person: name });
    setPersonList(
      personList.map((x) => {
        return x.name === name
          ? { ...x, click: true }
          : { ...x, click: false };
      })
    );
  };
  const SetPerson = (name, index) => {
    const clickStyle = classNames(styles[`Receive${name}`], {
      [styles.notclick]: !personList[index].click,
      [styles.testclick]: personList[index].click,
    });
    return (
      <div className={clickStyle}>
        <img
          src={
            personList[index].click
              ? process.env.PUBLIC_URL + personList[index].clickimg
              : process.env.PUBLIC_URL + personList[index].img
          }
          alt={name}
          onClick={() => SetClick(personList[index].name, index)}
        />
      </div>
    );
  };

  return (
    <Container
      fluid
      style={{ display: `${display}`, padding: 0, position: "relative" }}
    >
      <img
        style={{ width: "100%" }}
        src={process.env.PUBLIC_URL + "/images/Letter/Receive/back.png"}
        alt="back"
      />

      {SetPerson("mom", 0)}
      {SetPerson("dad", 1)}
      {SetPerson("grandpa", 2)}
      {SetPerson("grandma", 3)}

      <div className={styles.LeftLight}>
        <img
        // className={styles.teseeeft}
          src={process.env.PUBLIC_URL + "/images/Letter/Receive/leftlight.png"}
          alt="back"
        />
      </div>
      <div 
      className={styles.RightLight}
      >
        <img
         className={styles.teseeeft}
          src={process.env.PUBLIC_URL + "/images/Letter/Receive/rightlight.png"}
          alt="rightlight"
        />
      </div>
      <div className={styles.ReceiveType}>
        <img
          src={process.env.PUBLIC_URL + "/images/Letter/Receive/name.png"}
          alt="back"
        />
      </div>
      <div className={styles.textStyle}>
        <Input
          placeholder="名字"
          inputProps={{ maxLength: 7, style:{ width: "inherit", fontSize: "2vh", textAlign: "center"} }}
          style={{ width: "25vw",textAlign:"center"}}
          onChange={(e) =>
            setPersonData({ ...personData, name: e.target.value })
          }
        />
      </div>
      <div
        className={styles.clickStyle}
        onClick={() => ShowNext(personData.name, personData.person)}
      />
    </Container>
  );
};

export default ReceivePerson;
