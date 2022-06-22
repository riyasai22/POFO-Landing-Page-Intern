import React from "react";
import "./Service.css";
const service = [
  {
    image: "/img/image2.jpg",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    caption: "Design and Development",
    sub: "600+ We created web design",
  },
  {
    image: "/img/image2.jpg",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    caption: "Design and Development",
    sub: "600+ We created web design",
  },
  {
    image: "/img/image2.jpg",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    caption: "Design and Development",
    sub: "600+ We created web design",
  },
];
const Service = () => {
  return (
    <div className="service-container container">
      <h3 className="caption">WHAT WE DO</h3>
      <h2 className="header">OUR SERVICES</h2>
      <div className="service-list">
        {service.map((item, index) => {
          return (
            <div className="service-card" key={index}>
              <div className="service-card-inner">
                <div className="service-card-front">
                  <div className="service-img">
                    <img src={item.image} alt="service" />
                  </div>
                </div>
                <div className="service-card-back">
                  <p className="desc">{item.desc}</p>
                </div>
              </div>
              <div className="service-desc">
                <p className="caption-s">{item.caption}</p>
                <p className="desc">{item.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
