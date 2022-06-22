import React from 'react'
import "./Desc.css";
import Image3 from "../../assets/lady-side.jpg";
import Image4 from "../../assets/man-side.jpg";
import PlayCircleOutlineTwoToneIcon from "@mui/icons-material/PlayCircleOutlineTwoTone";
const Desc = () => {
  return (
    <div className="container desc-container ">
      <div className="desc-wrapper">
        <div className="desc-card">
          <div
            className="background desc-pic "
            style={{ backgroundImage: `url(${Image3})` }}
          ></div>
          <div className="desc-about">
            <h3 className="desc-caption caption-s">Build perfect websites</h3>
            <h2 className="medheader desc-medheader">
              Unlimited power and customization possibilities
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. Lorem Ipsum has been the industry's standard dummy
              text ever since. Lorem Ipsum is simply dummy text.
            </p>
            <button className="btn btn-border desc-btn">
              <PlayCircleOutlineTwoToneIcon />
              READ MORE
            </button>
          </div>
        </div>
        <div className="desc-card">
          <div
            className="desc-pic background"
            style={{ backgroundImage: `url(${Image4})` }}
          ></div>
          <div className="desc-about">
            <h3 className="desc-caption caption-s">Build perfect websites</h3>
            <h2 className="medheader desc-medheader">
              Unlimited power and customization possibilities
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. Lorem Ipsum has been the industry's standard dummy
              text ever since. Lorem Ipsum is simply dummy text.
            </p>
            <button className="btn btn-border desc-btn">
              <PlayCircleOutlineTwoToneIcon />
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
