import React, { useState, useEffect, useRef } from "react";
import Loading from "./Loading";
import Envelope from "./Envelope";
import Go from "./Go";
import Gender from "./Gender";
import Kind from "./Kind";
import { setData } from "../../sound";
import { useSearchParams } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
const Main = () => {
  const navigate = useNavigate();
  const soundRef = useRef();
  const btnRef = useRef();
  const [searchParams] = useSearchParams();
   /* IF Get The Gender Link auto scroll to link*/
   const InitPage = () => {
    if (searchParams.get("section") === "Gender") {
      return {
        Loading: { show: "block" },
        Envelope: { show: "block" },
        Go: { show: "block" },
        Gender: { show: "block" },
        Kind: { show: "none" },
      };
    } else {
      return {
        Loading: { show: "block" },
        Envelope: { show: "none" },
        Go: { show: "none" },
        Gender: { show: "none", gender: null },
        Kind: { show: "none" },
      };
    }
  };
  const [move, canMove] = useState(false);
  const [muted, setmuted] = useState(false);
  const [page, SetPage] = useState(InitPage);
  useEffect(() => {
    scrollTo(searchParams.get("section"), 1000);
    setTimeout(() => {
      // setmuted(false)
      console.log("click_Button")
      btnRef.current.click();
    }, 5000);
  }, []);
  useEffect(() => {
   if(!muted){
     soundRef.current.play()
   }
  }, [muted]);
  const scrollTo = (element, delay = 300, smooth = "easeOutQuad") => {
    SetPage({ ...page, [element]: { show: "block" } });
    scroller.scrollTo(element, {
      duration: 300,
      delay: delay,
      smooth: smooth,
    });
  };

  const ToKind = (gender) => {
    SetPage({
      ...page,
      Kind: { show: "block" },
      Gender: { show: "block", gender: gender },
    });
    scroller.scrollTo("Kind", {
      duration: 300,
      delay: 300,
      smooth: "easeOutQuad",
    });
  };
  const ToEnvelope = () => {
    setmuted(false)
    soundRef.current.play();
    SetPage({ ...page, Envelope: { show: "block" } });
    scroller.scrollTo("Envelope", {
      duration: 300,
      delay: 300,
      smooth: "easeOutQuad",
    });
  };

  const ToStory = (name) => {
    navigate(`/story?kind=${name ?? "Born"}&gender=${page.Gender.gender}`);
  };
  return (
    <>
      <div>
        <button
          ref={btnRef}
          onClick={() => {
            canMove(true);
            // setmuted(false)
            soundRef.current.play();
            console.log("playbyClick");
          }}
          style={{ display: "none" }}
        ></button>
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
              // setmuted(false);
            }, 1000);
          }}
          onLoadStart={() => {
            canMove(false);
          }}
          muted={muted}
          // controls
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
      <div className={styles.BCIcon + " d-flex justify-content-end"}>
        <img
          src={
            muted
              ? process.env.PUBLIC_URL + "/images/mute.png"
              : process.env.PUBLIC_URL + "/images/play.png"
          }
          alt="volume"
          onClick={() => {
            if(muted){
              soundRef.current.play()
            }
            setmuted(!muted)
          }}
        />
      </div>

      <Loading display={page.Loading.show} scrollToEnvelope={scrollTo} ToEnvelope={ToEnvelope}/>
      <Element name="Envelope" className="element">
        <Envelope display={page.Envelope.show} scrollToGo={scrollTo} />
      </Element>
      <Element name="Go" className="element">
        <Go display={page.Go.show} toGender={scrollTo} />
      </Element>
      <Element name="Gender" className="element">
        <Gender display={page.Gender.show} ToKind={ToKind} />
      </Element>
      <Element name="Kind" className="element">
        <Kind display={page.Kind.show} ToStory={ToStory} />
      </Element>
    </>
  );
};

export default Main;
