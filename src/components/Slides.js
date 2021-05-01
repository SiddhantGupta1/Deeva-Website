import React, { useState } from "react";
import "./../styles/Slides.css";
import DemoPic from "./../icons/Demo.svg";
import LeftBtn from "./../icons/Arrow.svg";

function Slides() {
  const items = [
    {
      image: DemoPic,
      text: "Taant",
    },
    {
      image: DemoPic,
      text: "Kasavu",
    },
    {
      image: DemoPic,
      text: "Kanjeevaram",
    },
    {
      image: DemoPic,
      text: "Bomkai",
    },
    {
      image: DemoPic,
      text: "Sambalpuri",
    },
    {
      image: DemoPic,
      text: "Paithani",
    },
    {
      image: DemoPic,
      text: "Bandhani",
    },
    {
      image: DemoPic,
      text: "Bandhani",
    },
    {
      image: DemoPic,
      text: "Bandhani",
    },
    
  ];

  return (
    <div className="slides">
        <button className="types-left-btn">
            <img src={LeftBtn} />
        </button>
        <div className="type-list">
            {items.map((item) => (
                <div className="types">
                    <img className="types-img" src={item.image} />
                    <p className="types-text">{item.text}</p>
                </div>
            ))}
      </div>
      
        <button className="types-right-btn">
            <img style={{transform: "rotate(180deg)"}} src={LeftBtn} />
        </button>
    </div>
  );
}

export default Slides;