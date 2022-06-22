import React from "react";
import "./Examples.css";
import LaptopChromebookTwoToneIcon from "@mui/icons-material/LaptopChromebookTwoTone";
import ViewCompactTwoToneIcon from "@mui/icons-material/ViewCompactTwoTone";
import CameraAltTwoToneIcon from "@mui/icons-material/CameraAltTwoTone";

const Examples = () => {
  const example = [
    {
      title: "Modern Framework",
      desc:
        "Lorem Ipsum is simply text the printing and typesetting standard industry.",
      icon: <LaptopChromebookTwoToneIcon />,
    },
    {
      title: "Web Interactive",
      desc:
        "Lorem Ipsum is simply text the printing and typesetting standard industry.",
      icon: <ViewCompactTwoToneIcon />,
    },
    {
      title: "Graphic Design",
      desc:
        "Lorem Ipsum is simply text the printing and typesetting standard industry.",
      icon: <CameraAltTwoToneIcon />,
    },
  ];
  return (
    <div className="example-container example">
      <div className="example-list">
        {example.map((item, index) => (
          <div className="example-card" key={index}>
            {item.icon}
            <div className="example-desc">
              <h3 className="subheader">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples;
