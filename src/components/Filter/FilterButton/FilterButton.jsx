import React from 'react';
import { useEffect } from "react";
import "./FilterButton.css";
const FilterButton = ({
  setActiveCategory,
  activeCategory,
  setFiltered,
  data,
}) => {
  useEffect(() => {
    if (activeCategory === 1) {
      setFiltered(data);
      return;
    }
    const filteredItem = () => {
      setFiltered(data.filter((item) => item.tag.includes(activeCategory)));
    };
    filteredItem();
  }, [activeCategory]);
  return (
    <div className="filter-navigation">
      <button
        className={activeCategory === 1 ? "btn btn-active" : "btn"}
        onClick={() => setActiveCategory(1)}
      >
        ALL
      </button>
      <button
        className={activeCategory === 2 ? "btn btn-active" : "btn"}
        onClick={() => setActiveCategory(2)}
      >
        WEB
      </button>
      <button
        className={activeCategory === 3 ? "btn btn-active" : "btn"}
        onClick={() => setActiveCategory(3)}
      >
        ADVERTISING
      </button>
      <button
        className={activeCategory === 4 ? "btn btn-active" : "btn"}
        onClick={() => setActiveCategory(4)}
      >
        BRANDING
      </button>
      <button
        className={activeCategory === 5 ? "btn btn-active" : "btn"}
        onClick={() => setActiveCategory(5)}
      >
        DESIGN
      </button>
      <button
        className={activeCategory === 6 ? "btn btn-active" : "btn"}
        onClick={() => setActiveCategory(6)}
      >
        PHOTOGRAPHY
      </button>
    </div>
  );
};

export default FilterButton;
