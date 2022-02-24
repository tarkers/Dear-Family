import React, { useState } from "react";
import Gender from './Gender'
import Another from './Another'
import Kind from './Kind'
import StoryPic from './StoryPic'
const Main = () => {
  const [page, SetPage] = useState({
    Gender: { show: "block", person: "" },
    Kind: { show: "none", kind:"" },
    StoryPic: { show: "none" },
    Another: { show: "none" },
  });
  const ToStoryPic=(kind)=>{
    SetPage({
      ...page,
      Kind: { show: "none", kind: kind },
      StoryPic: { show: "block",  },
    })
  }
  const ToKind=(person)=>{
    SetPage({
      ...page,
      Gender: { show: "none", person: person },
      Kind: { show: "block",  },
    })
  }
  const ToAnother=()=>{
    SetPage({
      ...page,
      StoryPic: { show: "none"},
      Another: { show: "block",  },
    })
  }
  return (
    <>
      <Gender display={page.Gender.show} ShowNext={ToKind} />
      <Kind display={page.Kind.show} ShowNext={ToStoryPic} person={page.Gender.person}/>
      <StoryPic  display={page.StoryPic.show}  ShowNext={ToAnother} kind={page.Kind.kind}/>
      <Another display={page.Another.show} ShowNext={ToStoryPic} />
    </>
  )
}

export default Main