import React from "react";
import "./Partners.css";
import logo1 from "../../assets/logo/logo-1.png";
import logo2 from "../../assets/logo/logo-2.png";
import logo3 from "../../assets/logo/logo-3.png";
import logo4 from "../../assets/logo/logo-4.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

const Partners = () => {
  return (
    <div className="partners-container container">
      <Splide
        options={{
          arrows: false,
          pagination: true,
          drag: "free",
          gap: "3rem",
          perPage: 3,

          breakpoints: {
            900: {
              perPage: 1,
              type: "loop",
            },
          },
        }}
      >
        <SplideSlide>
          <div
            className="partner-card background partner-pic"
            style={{ backgroundImage: `url(${logo1})` }}
          ></div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="partner-card background partner-pic"
            style={{ backgroundImage: `url(${logo2})` }}
          ></div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="partner-card background partner-pic"
            style={{ backgroundImage: `url(${logo3})` }}
          ></div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="partner-card background partner-pic"
            style={{ backgroundImage: `url(${logo4})` }}
          ></div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Partners;
