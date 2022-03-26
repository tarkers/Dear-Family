import React, { useState, useRef,useEffect } from "react";
import Shape from "./Shape";
import ReceivePerson from "./ReceivePerson";
import Send from "./Send";
import QRcode from "./QRcode";
import Intro from "./Intro";
import styles from './style.module.scss'
import { Outlet, useSearchParams,useNavigate } from "react-router-dom";
const Main = ({setMusic}) => {
  // const btnRef = useRef();
  // const soundRef = useRef();
  const [searchParams, _] = useSearchParams();
  const [GK,SetGK]=useState({gender:searchParams.get("gender"),kind: searchParams.get("kind")})
  const gender = searchParams.get("gender");
  const kind = searchParams.get("kind");
  const navigate = useNavigate();
  const [page, SetPage] = useState({
    Intro: { show: "block" },
    Shape: { show: "none", shape: "" },
    /*
    gender: send gender
    name :receive name
    reveivePerson : reveivePerson
    shape: card shape
    */
    ReceivePerson: { show: "none", name: "user", reveivePerson: "mom" },
    Send: { show: "none", link: "" },
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
    SetPage({
      ...page,
      Send: { show: "none", link: link },
      QRcode: { show: "block" },
    });
  };
  const ToReceivePerson = (shape) => {
    SetPage({
      ...page,
      Shape: { show: "none", shape: (shape + 1).toString() },
      ReceivePerson: { ...page.ReceivePerson, show: "block" },
    });
    // console.log(shape, "ttt");
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
      Send: { ...page.Send, show: "block" },
    });
  };
  useEffect(() => {
    setMusic("Intro")
  }, []);
  const playMusic=()=>{
    ToShape();
  }
  const ToBack=()=>{
    if(page.QRcode.show==="block"){
      SetPage({
        ...page,
        Send: { ...page.Send, show: "block" },
        QRcode: {...page.QRcode, show: "none" },
      });
    }else if(page.Send.show==="block"){
      SetPage({
        ...page,
        ReceivePerson: { ...page.ReceivePerson, show: "block" },
        Send: {...page.Send, show: "none" },
      });
    }else if(page.ReceivePerson.show==="block"){
      SetPage({
        ...page,
        Shape: { ...page.Shape, show: "block" },
        ReceivePerson: {...page.ReceivePerson, show: "none" },
      });
    }else if(page.Shape.show==="block"){
      SetPage({
        ...page,
        Intro: { ...page.Intro, show: "block" },
        Shape: {...page.Shape, show: "none" },
      });
    }else if(page.Intro.show==="block"){
      navigate(`/story?kind=${kind ?? "Born"}&gender=${gender}`)
    }
  }
  return (
    <> 
       <div className={styles.BackIcon + " d-flex justify-content-start"}>
        <img
          src={process.env.PUBLIC_URL + "/images/Letter/backIcon.png"}
          alt="back"
          onClick={() =>ToBack()}
        />
      </div>
    <Intro display={page.Intro.show}  playMusic={playMusic}/>
      <Shape
        display={page.Shape.show}
        ShowNext={ToReceivePerson}
        param={GK}
        ChangeKind={(v)=>SetGK({...GK,kind:v})}
      />
      <ReceivePerson display={page.ReceivePerson.show} ShowNext={ToLetter} />
      <Send
        display={page.Send.show}
        data={{
          name: page.ReceivePerson.name,
          reveivePerson: page.ReceivePerson.reveivePerson,
          kind: GK.kind,
          gender: GK.gender,
          shape: page.Shape.shape,
        }}
        ShowNext={ToQRcode}
      />
      <QRcode display={page.QRcode.show} imageLink={page.Send.link} />
      <Outlet />
    </>
  );
};

export default Main;
