import React, { useState, useRef, useEffect } from "react";
import Another from "./Another";
import Kind from "./Kind";
import styles from "./style.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import StoryPic from "./StoryPic";
import { setData } from "../../sound";
const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const gender = searchParams.get("gender");
  const kind = searchParams.get("kind");
  // const [gender, _] = useState(true);
  // const [kind, _] = useState(null);
  const [move, canMove] = useState(null);
  const soundRef = useRef();
  const btnRef = useRef();
  const [sound, setSound] = useState({
    url: setData(kind).music,
    playing: false,
    controls: false,
    light: false,
    volume: 0.7,
    muted: true,
    loop: true,
  });
  useEffect(() => {
    setTimeout(() => {
      btnRef.current.click();
      setSound({
        ...sound,
        muted: false,
      });
    }, 4000);
  }, []);
  const ClearData = (newkind) => {
    // soundRef.current.pause();
    // soundRef.current.currentTime = 0;
    canMove(true);
    setSound({
      url: setData(newkind).music,
      playing: false,
      controls: false,
      light: false,
      volume: 0.8,
      muted: true,
      loop: true,
    });
    // setIndex(initState());
  };
  const initSetup = (newkind) => {
    let tmp = {};
    switch (newkind) {
      case "Born":
        tmp = { first: "Grow", second: "Strong" };
        break;

      case "Grow":
        tmp = { first: "Born", second: "Strong" };
        break;

      case "Strong":
        tmp = { first: "Born", second: "Grow" };
        break;
      default:
        tmp = { first: "Grow", second: "Strong" };
        break;
    }
    return tmp;
  };
  const navigate = useNavigate();
  const [page, SetPage] = useState({
    // Kind: { show: "block", kind: null },
    StoryPic: { show: "block" },
    Another: { show: "none", other: initSetup(kind) },
  });

  const ToKind = () => {
    navigate("/?section=Gender");
    // SetPage({
    //   Kind: { show: "block", kind: null },
    //   StoryPic: { ...page.StoryPic, show: "none" },
    //   Another: { ...page.Another, show: "none" },
    // });
  };
  const ToStoryPic = (newkind) => {
    setSearchParams({
      kind:newkind,
      gender:gender
  })
    ClearData(newkind)
    SetPage({
      // Kind: { show: "block", kind: null },
      StoryPic: { show: "block" },
      Another: { show: "none", other: initSetup(newkind) },
    });
    scroll.scrollToTop();
    // navigate();
    // setSearchParams({
    //   gender: gender,
    //   kind: newkind,
    // });
    // SetPage({
    //   ...page,
    //   // Kind: { show: "none", kind: kind },
    //   StoryPic: { show: "block" },
    //   Another: { show: "none", other: tmp },
    // });
  };
  const playMusic=()=>{
    setSound({...sound,muted:false});
    soundRef.current.play()
  }
  const ToAnother = () => {
    SetPage({
      ...page,
      StoryPic: { show: "none" },
      Another: { ...page.Another, show: "block" },
    });
  };
  const ToSend = () => {
    navigate(`/letter?kind=${kind ?? "Born"}&gender=${gender}`);
  };
  return (
    <>
      <div className={styles.BCIcon + " d-flex justify-content-between"}>
        <img
          src={process.env.PUBLIC_URL + "/images/backIcon.png"}
          alt="back"
          onClick={() => {
            navigate("/?section=Gender");
          }}
        />
        <img
          src={
            sound.muted
              ? process.env.PUBLIC_URL + "/images/mute.png"
              : process.env.PUBLIC_URL + "/images/play.png"
          }
          alt="volume"
          onClick={() => {
            if(sound.muted){
              soundRef.current.play()
            }
            setSound({ ...sound, muted: !sound.muted })
          }}
        />
      </div>
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
          src={setData(kind).music}
          ref={soundRef}
          controls
          onCanPlay={() => {
            console.log("canplay");         
            setTimeout(() => {
              canMove(true);
              console.log("play");
              soundRef.current.play();
              // setSound({...sound,muted:false});
            }, 2000);
          }}
          onLoadedData={
            ()=>{
              canMove(true);
              console.log("load!!!")
            }
          }
          onLoadStart={() => {
            // canMove(false);
          }}
          muted={sound.muted}
          loop={true}
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
      {/* <Kind
        display={page.Kind.show}
        ShowNext={ToStoryPic}
        person={gender ?? "Girl"}
      /> */}
      {console.log(kind)}
      {move && (
        <StoryPic
          display={page.StoryPic.show}
          ShowNext={ToAnother}
          data={setData(kind).json}
          params={{ gender: gender, kind: kind }}
          playMusic={playMusic}
        />
      )}
      <Another
        other={page.Another.other}
        display={page.Another.show}
        ToSend={ToSend}
        ShowNext={ToStoryPic}
      />
    </>
  );
};

export default Main;
