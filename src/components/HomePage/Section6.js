import React,{useEffect, useState} from 'react'
import './Section6.css'
import LeftBtn from "./../../icons/Arrow.svg";
import Brand from "./../../icons/Brand.svg";

function Section6(){

    const items = [
        {
          image: Brand,
          text: "Taant",
        },
        {
          image: Brand,
          text: "Kasavu",
        },
        {
          image: Brand,
          text: "Kanjeevaram",
        },
        {
          image: Brand,
          text: "Bomkai",
        },
        {
          image: Brand,
          text: "Sambalpuri",
        },
        {
          image: Brand,
          text: "Paithani",
        },
        {
          image: Brand,
          text: "Bandhani",
        },
        {
          image: Brand,
          text: "Bandhani",
        },
        {
          image: Brand,
          text: "Bandhani",
        },
        
      ];


    return(
        <div className="Section6">
            <div className="Section6-heading">Top Brands</div>
            <div className="Section6-rope"></div>
            <div className="top-brands">

                <button className="brands-left-btn">
                    <img src={LeftBtn} />
                </button>
                <div className="brands-list">
                    {items.map((item) => (
                        <div className="brands">
                            <img className="brands-img" src={item.image} />
                            <p className="brands-text">{item.text}</p>
                        </div>
                    ))}
                </div>
                <button className="brands-right-btn">
                    <img style={{transform: "rotate(180deg)"}} src={LeftBtn} />
                </button>

            </div>
        </div>
    )
}

export default Section6;