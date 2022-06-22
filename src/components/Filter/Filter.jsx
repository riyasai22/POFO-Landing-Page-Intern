import React from "react";
import "./Filter.css";
import Portfolio from "../../data/portfolio.json";
import Card from "./Card/Card";
import FilterButton from "./FilterButton/FilterButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const Filter = () => {
  // eslint-disable-next-line
  const [data, setData] = useState(Portfolio);
  const [filtered, setFiltered] = useState(Portfolio);
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <div className="filter-container container">
      <FilterButton
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setFiltered={setFiltered}
        filtered={filtered}
        data={data}
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="filter-options"
      >
        <AnimatePresence>
          {filtered.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Filter;
