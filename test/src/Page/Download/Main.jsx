import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createFileName } from "use-react-screenshot";
const axios = require("axios");

const Main = () => {
  const navigate = useNavigate();
  const Download = (image, { name = "img", extension = "jpg" } = {}) => {
    
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    console.log(a);
    a.target = "_blank";
    a.click();
    navigate(`/`);
  };
  const SetLink = () => {
    let params = useParams();
   
    const id = params.id;
    console.log(id);
    axios
      .get(`https://dear-family-server.herokuapp.com/letters/${id}`)
      .then((resp) => {
        let data = "";
        data = resp.data;
        console.log(data);
        Download(data.image, { name: data.name });      
      })
      .catch((error) => {
        console.log(error);
      });
    return "100";
  };

  return (
    <div>
      <label>{SetLink()}1345</label>
    </div>
  );
};

export default Main;
