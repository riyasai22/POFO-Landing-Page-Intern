import React from "react";

import Slider from "../components/Slider/Slider";
import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import Function from "../components/Function/Function";
import Desc from "../components/Desc/Desc";
import Filter from "../components/Filter/Filter";
import Advantages from "../components/Advantanges/Advantages";
import ProductType from "../components/ProductType/ProductType";
import Service from "../components/Services/Service";
import Section from "../components/Section/Section";
import Examples from "../components/Examples/Examples";

import Option from "../data/advantage.json";
import Digital from "../components/Digital/Digital";
import Counter from "../components/Counter/Counter";
import Video from "../components/Video/Video";
import Partners from "../components/Partners/Partners";
import Client from "../components/Client/Client";
import Blogs from "../components/Blogs/Blogs";
import Base from "../components/Base/Base";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const filteredOption1 = Option.filter((item) => item.id === "1");
  const filteredOption2 = Option.filter((item) => item.id === "2");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Function />
      <Desc />
      <Filter />
      <Advantages filteredOption={filteredOption1} />
      <ProductType />
      <Service />
      <Advantages filteredOption={filteredOption2} />
      <Section />
      <Examples />
      <Digital />
      <Counter />
      <Video />
      <Partners />
      <Client />
      <Blogs />
      <Base />
    </div>
  );
};

export default Home;
