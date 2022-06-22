import React from "react";
import "./Counter.css";
import LaptopChromebookTwoToneIcon from "@mui/icons-material/LaptopChromebookTwoTone";
import ViewCompactTwoToneIcon from "@mui/icons-material/ViewCompactTwoTone";
import CameraAltTwoToneIcon from "@mui/icons-material/CameraAltTwoTone";

const Counter = () => {
  const counterDetails = [
    {
      count: 350,
      title: "HAPPY CLIENTS",
      icon: <LaptopChromebookTwoToneIcon />,
    },
    {
      count: 750,
      title: "PHOTO CAPTURE",
      icon: <ViewCompactTwoToneIcon />,
    },
    {
      count: 880,
      title: "WORK COMPLETED",
      icon: <CameraAltTwoToneIcon />,
    },
    {
      count: 670,
      title: "TELEPHONIC TALK",
      icon: <CameraAltTwoToneIcon />,
    },
  ];
  return (
    <div className="counter-container container">
      <div className="counter-list">
        {counterDetails.map((item, index) => (
          <div className="counter-card" key={index}>
            {item.icon}
            <div className="counter-desc">
              <h3 className="header">{item.count}</h3>
              <p className="desc">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
