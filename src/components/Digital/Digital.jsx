import React from "react";
import "./Digital.css";
import Image7 from "../../assets/ppl.jpg";
import PlayCircleOutlineTwoToneIcon from "@mui/icons-material/PlayCircleOutlineTwoTone";

const Digital = () => {
  return (
    <div className="digital-container container">
      <div className="digital-section">
        <h3 className="caption-s caption-pink">
          We create premium designs and technology
        </h3>
        <h2 className="header">
          We design brand, digital experience that engage the right customers.
        </h2>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy
          text of the printing and industry. Lorem Ipsum has been the industry's
          standard dummy text ever since. Lorem Ipsum has been the industry.
        </p>
        <button className="btn btn-colored-light">
          <PlayCircleOutlineTwoToneIcon />
          ABOUT COMPANY
        </button>
      </div>
      <div
        className="digital-section background digital-pic"
        style={{ backgroundImage: `url(${Image7})` }}
      ></div>
    </div>
  );
};

export default Digital;
