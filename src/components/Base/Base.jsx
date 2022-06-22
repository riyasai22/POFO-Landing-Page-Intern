import React from "react";
import "./Base.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Base = () => {
  return (
    <div className="base-container container">
      <p className="caption-s">London based highly creative studio </p>
      <div className="logo">
        <img src="/img/logo.png" alt="logo" />
      </div>
      <p className="caption-s">
        On social networks
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </p>
    </div>
  );
};

export default Base;
