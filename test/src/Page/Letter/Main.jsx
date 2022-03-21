import React, { useState, useRef,useEffect } from "react";
import Shape from "./Shape";
import ReceivePerson from "./ReceivePerson";
// import Send from "./Sendor";
import Send from "./Send";
import QRcode from "./QRcode";
import Intro from "./Intro";
import { setData } from "../../sound";
import { Outlet, useSearchParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./style.module.scss";
const Main = () => {
  const btnRef = useRef();
  const soundRef = useRef();
  const [searchParams, _] = useSearchParams();
  const gender = searchParams.get("gender");
  const kind = searchParams.get("kind");
  const [move, canMove] = useState(true);
  const [muted, setmuted] = useState(true);
  const [page, SetPage] = useState({
    Intro: { show: "block" },
    Shape: { show: "none", shape: "" },
    /*
    gender: send gender
    name :receive name
    reveivePerson : reveivePerson
    shape: card shape
    */
    ReceivePerson: { show: "none", name: "", reveivePerson: "" },
    Letter: { show: "none", link: "" },
    QRcode: { show: "none" },
  });
  const ToShape = () => {
    SetPage({
      ...page,
      Intro: { show: "none" },
      Shape: { show: "block", shape: "" },
    });
  };
  const ToQRcode = (link) => {
    // console.log(link)
    SetPage({
      ...page,
      Letter: { show: "none", link: link },
      QRcode: { show: "block" },
    });
  };
  const ToReceivePerson = (shape) => {
    SetPage({
      ...page,
      Shape: { show: "none", shape: (shape + 1).toString() },
      ReceivePerson: { ...page.ReceivePerson, show: "block" },
    });
    console.log(shape, "ttt");
  };
  const ToLetter = (name, reveivePerson) => {
    console.log(name, reveivePerson);
    SetPage({
      ...page,
      ReceivePerson: {
        ...page.ReceivePerson,
        reveivePerson: reveivePerson,
        name: name,
        show: "none",
      },
      Letter: { ...page.Letter, show: "block" },
    });
  };
  useEffect(() => {
    setTimeout(() => {
      btnRef.current.click();
    }, 5500);
  }, []);
  const playMusic=()=>{
    soundRef.current.play();
    ToShape();
  }
  return (
    <>
    {/* <Send  data={{
          name: page.ReceivePerson.name,
          reveivePerson: "Mom",
          kind: kind,
          gender: gender,
          shape: 1,
        }}></Send> */}
     <button
        ref={btnRef}
        onClick={() => {
          canMove(true);
          // setSound({
          //   ...sound,
          //   // muted: false,
          // });
          soundRef.current.play();
          console.log("play");
        }}
        style={{ display: "none" }}
      ></button>
      <div>
        <audio
        className={styles.audioStyle}
          src={setData().music}
          ref={soundRef}
          onCanPlay={() => {
            console.log("canplay");
            canMove(true);
            setTimeout(() => {
              console.log("play");
              soundRef.current.play();
              setmuted(false);
            }, 1000);
          }}
          onLoadStart={() => {
            canMove(false);
          }}
          muted={muted}
          controls
          loop={true}
          // autoPlay
        />
      </div>
      {!move && (
        <div className={styles.loadingDiv}>
          <CircularProgress
            className={styles.LoadingBar}
            color="inherit"
            thickness={5}
            size={150}
          />
        </div>
      )}
     {move && <Intro display={page.Intro.show}  playMusic={playMusic}/>}
      <Shape
        display={page.Shape.show}
        ShowNext={ToReceivePerson}
        param={{ gender: gender, kind: kind }}
      />
      <ReceivePerson display={page.ReceivePerson.show} ShowNext={ToLetter} />
      <Send
        display={page.Letter.show}
        data={{
          name: page.ReceivePerson.name,
          reveivePerson: page.ReceivePerson.reveivePerson,
          kind: kind,
          gender: gender,
          shape: page.Shape.shape,
        }}
        ShowNext={ToQRcode}
      />
      <QRcode display={page.QRcode.show} imageLink={page.Letter.link} />
      <Outlet />
    </>
  );
};

export default Main;
