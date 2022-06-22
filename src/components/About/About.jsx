import React from "react";

import Image2 from "../../assets/banner-bg.jpg";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import "./About.css";
const About = () => {
  return (
    <div
      className="about-container container background"
      // style={{ backgroundImage: `url(${Image2})` }}
    >
      <div className="left"></div>
      <div className="right">
        <h3 className="caption-pink caption-s">
          Easy way to build perfect websites
        </h3>
        <h2 className="header">
          Beautifully handcrafted templates for your website
        </h2>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum
          has been the industry's standard dummy text ever since. Lorem Ipsum is
          simply dummy text.
        </p>
        <div className="right-features">
          <div className="right-feature" data-aos="fade-up">
            <BorderColorOutlinedIcon />
            <h3 className="subheader"> Modern Framework </h3>
            <p className="desc">
              Lorem Ipsum is simply text the printing and typesetting standard
              industry.
            </p>
          </div>
          <div className="right-feature" data-aos="fade-up">
            <DevicesOutlinedIcon />

            <h3 className="subheader"> Live Website Builder </h3>
            <p className="desc">
              Lorem Ipsum is simply text the printing and typesetting standard
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
