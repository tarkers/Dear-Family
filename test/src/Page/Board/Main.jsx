import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Intro from "./Intro";
import Board from "./Board";
const Main = ({ setBoard }) => {
  useEffect(() => {
    setBoard(true);
    // getThing();
  }, []);
  const [show, setShow] = useState(true);
  return <>{!show ? <Intro toBoard={() => setShow(true)} /> : <Board setBoard={setBoard}/>}</>;
};

export default Main;
