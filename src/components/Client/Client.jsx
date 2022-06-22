import React from "react";
import "./Client.css";
import ClientData from "../../data/client.json";
import ClientCard from "./ClientCard/ClientCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

const Client = () => {
  return (
    <div className="client-container container">
      <h3 className="caption">WHAT PEOPLE SAY</h3>
      <h2 className="header">CLIENTS WORDS</h2>
      <Splide
        options={{
          arrows: false,
          pagination: true,
          drag: "free",
          gap: "3rem",
          perPage: 3,

          breakpoints: {
            900: {
              perPage: 2,
            },
            700: {
              perPage: 1,
            },
          },
        }}
      >
        {ClientData.map((item, index) => {
          return (
            <SplideSlide key={item.id}>
              <ClientCard item={item} key={index} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Client;
