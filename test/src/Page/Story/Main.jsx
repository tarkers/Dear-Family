import React, { useState, useRef } from "react";
import Another from "./Another";
import Kind from "./Kind";
import { useParams, useNavigate } from "react-router-dom";
import Bornaudio from "../../sound/Born.mp3";
import Strongaudio from "../../sound/Strong.mp3";
import Growaudio from "../../sound/Grow.mp3";
import StoryPic from "./StoryPic";
const Main = () => {
  // let data=Born
  const [audio, setAudio] = useState(Bornaudio);
  const [data, setData] = useState(null);
  const { person } = useParams();
  const navigate = useNavigate();
  const [page, SetPage] = useState({
    Kind: { show: "block", kind: "Born" },
    StoryPic: { show: "none" },
    Another: { show: "none", other: { first: "Born", second: "Grow" } },
  });

  const ToKind = () => {
    SetPage({
      Kind: { show: "block", kind: "" },
      StoryPic: { ...page.StoryPic, show: "none" },
      Another: { ...page.Another, show: "none" },
    });
  };
  const ToStoryPic = (kind) => {
    let tmp = { first: "", second: "" };
   

    switch (kind) {
      case "Born":
        setAudio(Bornaudio)
        tmp = { first: "Grow", second: "Strong" };
        break;

      case "Grow":
        setAudio(Growaudio)
        tmp = { first: "Born", second: "Strong" };
        break;

      case "Strong":
        setAudio(Strongaudio)
        tmp = { first: "Born", second: "Grow" };
        break;
      default:
        tmp = { first: "Grow", second: "Strong" };
    }
    SetPage({
      ...page,
      Kind: { show: "none", kind: kind },
      StoryPic: { show: "block" },
      Another: { show: "none", other: tmp },
    });
  };
  const ToAnother = () => {
    SetPage({
      ...page,
      StoryPic: { show: "none" },
      Another: { ...page.Another, show: "block" },
    });
  };
  const ToSend = () => {
    navigate(`/letter?kind=${page.Kind.kind ?? "Born"}&person=${person}`);
  };
  return (
    <>
      <Kind
        display={page.Kind.show}
        ShowNext={ToStoryPic}
        person={person ?? "Girl"}
      />
      <StoryPic
        display={page.StoryPic.show}
        ToBack={ToKind}
        ShowNext={ToAnother}
        kind={page.Kind.kind}
        test={audio}
      />
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
