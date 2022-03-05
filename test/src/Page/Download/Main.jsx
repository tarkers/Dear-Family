import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createFileName } from "use-react-screenshot";
import { IconButton } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
const axios = require("axios");

const Main = () => {
  const params = useParams().id;
  const navigate =useNavigate();
  const Download = (image, { name = "img", extension = "jpg" } = {}) => {
    console.log(image);
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    console.log(a);
    // a.target = "_blank";
    a.click();
    navigate(`/`);
  };
  const SetLink = () => {
    axios
      .get(`https://dear-family-server.herokuapp.com/letters/${params}`)
      .then((resp) => {
        let data = "";
        data = resp.data;
        console.log(data);
        Download(data.image, { name: data.name });
      })
      .catch((error) => {
        console.log(error);
      });
    return true;
  };

  return (
    <div>
      {SetLink()}
    {/* <button onClick={()=>navigate(`/`)}>back to main</button>
      <IconButton
        color="primary"
        aria-label="doenload picture"
        component="span"
        onClick={() => SetLink()}
      >
        <DownloadForOfflineIcon sx={{ fontSize: 60 }} />
      </IconButton> */}
    </div>
  );
};

export default Main;
