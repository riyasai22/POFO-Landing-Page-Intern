import React from "react";
import "./Section.css";
import PlayCircleOutlineTwoToneIcon from "@mui/icons-material/PlayCircleOutlineTwoTone";

const Section = () => {
  return (
    <div className="section-container container">
      <div className="section-section">
        <img src="/img/image.jpg" alt="lady" />
      </div>
      <div className="section-section">
        <h3 className="caption-s caption-pink">
          Wide range of web development services
        </h3>
        <h2 className="header">
          Responsive, convenient and multipurpose theme
        </h2>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since. Lorem Ipsum has been the industry's standard dummy text ever
          since. Lorem Ipsum is printing and typesetting simply dummy text.
        </p>
        <button className="btn btn-colored-light">
          <PlayCircleOutlineTwoToneIcon />
          ABOUT COMPANY
        </button>
      </div>
    </div>
  );
};

export default Section;
