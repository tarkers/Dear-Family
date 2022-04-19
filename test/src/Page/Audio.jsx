import React, { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
const Audio = forwardRef((props, ref) => {
  const { src, LoadingComplete, navigateBack } = props;
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const timerRef = useRef();
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (ref.current != null) ref.current.play();
    }, 4000);
    if (playing) {
      clearInterval(timerRef.current);
    }
    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      if (playing) clearInterval(timerRef.current);
    };
  }, [ref, playing]);
  useEffect(() => {
    ref.current.load();
    ref.current.volume = 0.7;
  }, [src, ref]);

  return (
    <div className={styles.BCIcon}>
      <div className={" d-flex justify-content-end"}>
        <img
          src={
            muted
              ? process.env.PUBLIC_URL + "/images/mute.png"
              : process.env.PUBLIC_URL + "/images/play.png"
          }
          alt="volume"
          onClick={() => {
            setMuted(!muted);
          }}
        />
      </div>
      <div>
        <audio
            // controls
          playsInline
          style={{ width: 0 }}
          onPause={() => {
            // console.log("pause");
            setPlaying(false);
          }}
          onPlay={() => setPlaying(true)}
          ref={ref}
          onCanPlay={() => {
            // console.log("canplaytest");
            // ref.current.play();
          }}
          onLoadStart={() => {
            // console.log("onloadstatr!");
            ref.current.pause();
          }}
          onChange={() => console.log("change")}
          // onLoadedData={() => console.log("loadeddatat")}
          // onLoadedMetadata={() => console.log("loadedmetadatat")}
          onLoad={() => {
            console.log("onload!");
          }}
          muted={muted}
          // controls
          loop={true}
        />
      </div>
      {/* {!playing && (
        <div className={styles.loadingDiv}>
          <CircularProgress
            className={styles.LoadingBar}
            color="inherit"
            thickness={5}
            size={150}
          />
        </div>
      )} */}
    </div>
  );
});
Audio.propTypes = {
  src: PropTypes.string,
  LoadingComplete: PropTypes.func,
  navigateBack: PropTypes.func,
};

Audio.defaultProps = {
  src: null,
  LoadingComplete: null,
  navigateBack: null,
};
export default Audio;
