import React,{useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createFileName } from "use-react-screenshot";
import CircularProgress from "@mui/material/CircularProgress";
import styles from './style.module.scss'
const axios = require("axios");

const Main = () => {
  const params = useParams().id;
  const navigate =useNavigate();
  const[move,setmove]=useState(false)
  const Download = (image, { name = "img", extension = "jpg" } = {}) => {
    console.log(image);
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    console.log(a);
    a.target = "_blank";
    a.click();
    
    navigate(`/`);
    // 
    // window.location.href="https://tarkers.github.io/Dear-Family"
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
     
    </div>
  );
};

export default Main;
