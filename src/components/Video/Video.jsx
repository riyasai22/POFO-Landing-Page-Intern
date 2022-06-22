import React from "react";
import "./Video.css";
import Image8 from "../../assets/man-lady.jpg";
import PlayCircleOutlineTwoToneIcon from "@mui/icons-material/PlayCircleOutlineTwoTone";

const Video = () => {
  return (
    <div
      className="video-container container background"
      style={{ backgroundImage: `url(${Image8})` }}
    >
      <div className="dark-overlay gray">
        <div className="video-svg">
          <PlayCircleOutlineTwoToneIcon />
        </div>

        <h2 className="header video-header">
          Beautiful and easy to use UI, professional animations and drag & drop
          feature
        </h2>
        <p className="desc video-desc">
          With years of experience in the website design and development
          industry ThemeZaa pride ourselves on creating unique, creative and
          quality designs that are developed upon the latest modern coding and
          developing techniques, which are then built using the most up to date,
          structured coding framework so that your development team can take it
          to the next level with ease.
        </p>
        <button className="btn btn-colored-dark">
          <PlayCircleOutlineTwoToneIcon />
          ABOUT COMPANY
        </button>
      </div>
    </div>
  );
};

export default Video;
