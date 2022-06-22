import React from "react";
import "./Advantages.css";
import Image6 from "../../assets/background.jpg";
import DoneTwoToneIcon from "@mui/icons-material/DoneTwoTone";
import PlayCircleOutlineTwoToneIcon from "@mui/icons-material/PlayCircleOutlineTwoTone";

const Advantages = ({ filteredOption }) => {
  const filteredList = filteredOption[0].list;
  const Alignment = filteredOption[0].alignment;
  const Background = filteredOption[0].background;
  return (
    <div
      className="container advantages-container background"
      style={{
        flexDirection: Alignment === "left" ? "row" : "row-reverse",
        backgroundImage: Background === true ? `url(${Image6})` : " ",
      }}
    >
      <div className="advantage-wrapper">
        <h2
          className={filteredOption[0].dark === true ? "header dark" : "header"}
        >
          {filteredOption[0].header}
        </h2>
        <p className="desc">
          {filteredOption[0].desc ? filteredOption[0].desc : " "}
        </p>
        <div className="advantage-list">
          {filteredList.map((item, index) => (
            <p className="advantage desc" key={index}>
              <DoneTwoToneIcon
                style={{
                  color: `${filteredOption[0].svgColor}`,
                }}
              />
              {item}
            </p>
          ))}
        </div>
        <button
          className={
            filteredOption[0].dark === true
              ? "btn btn-colored-dark"
              : "btn btn-colored-light"
          }
        >
          <PlayCircleOutlineTwoToneIcon />
          {filteredOption[0].btnContent}
        </button>
      </div>
      <div className="advantage-img">
        <img src={filteredOption[0].image} alt="" />
      </div>
    </div>
  );
};

export default Advantages;
