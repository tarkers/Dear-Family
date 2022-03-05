import React, { useState, useRef } from "react";
import Another from "./Another";
import Kind from "./Kind";
import { useParams, useNavigate } from "react-router-dom";
import Born from "../../BornStory.json";
import Grow from "../../GrowStory.json";
import Strong from "../../StrongStory.json";
import StoryPic from "./StoryPic";
const Main = () => {
  // let data=Born
  const [mute, setMute] = useState(true);
  const [data, setData] = useState(null);
  const { person } = useParams();
  const navigate = useNavigate();
  const [page, SetPage] = useState({
    Kind: { show: "block", kind: "" },
    StoryPic: { show: "none" },
    Another: { show: "none", other: { first: "", second: "" } },
  });
  
  const ToKind = () => {
    SetPage({
      Kind: { show: "block", kind: "" },
      StoryPic: {...page.StoryPic, show: "none" },
      Another: {...page.Another, show: "none" },
    });
  };
  const ToStoryPic = (kind) => {
    let tmp = { first: "", second: "" };
    console.log(kind)
    
    switch (kind) {
      case "Born":
        setData(Born)
        tmp = { first: "Grow", second: "Strong" };
        break;

      case "Grow":
        setData(Grow)
        tmp = { first: "Born", second: "Strong" };
        break;

      case "Strong":
        setData(Strong)
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
      Another: {...page.Another, show: "block" },
    });
  };
  const ToSend = () => {
    navigate(`/letter?kind=${page.Kind.kind ?? "Born"}&person=${person}`);
  };
  return (
    <>
      {/* <button onClick={()=>setMute(!mute)}>test code</button> */}
      <Kind
        display={page.Kind.show}
        ShowNext={ToStoryPic}
        person={person ?? "Girl"}
      />
    {data!==null &&  <StoryPic
        display={page.StoryPic.show}
        ToBack={ToKind}
        ShowNext={ToAnother}
        kind={page.Kind.kind}
        data={data}
      />}
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
