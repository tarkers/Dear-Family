import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate, } from "react-router-dom";
import Intro from "./Intro";
import Board from "./Board";
const Main = ({ setBoard }) => {
  const navigate =useNavigate();
  useEffect(() => {
    setBoard(true);
    // getThing();
  }, []);
  const toMenu=()=>{
    setBoard(false);
    navigate(`/`)
  }
  const toLast=()=>{
    setBoard(false);
    navigate(-1)
  }
  const [show, setShow] = useState(false);
  return <>{!show ? <Intro toQRcode={()=>toLast()} toMenu={()=>toMenu(`/`)} toBoard={() => setShow(true)} /> : <Board setBoard={setBoard}/>}</>;
};

export default Main;
