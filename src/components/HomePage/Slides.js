import React,{useState} from "react";
import "./Slides.css";
import DemoPic from "./../../icons/Demo.svg";
import LeftBtn from "./../../icons/Arrow.svg";
import {Link} from 'react-router-dom'

var slideNumber = -1;

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
      text: "Pathani",
    },
    {
      image: DemoPic,
      text: "Bandhani",
    },
    {
      image: DemoPic,
      text: "Banaras",
    },
    
  ];
  const len = items.length
  const [current, setCurrent] = useState(0)
  const [disable, setDisable] = useState(true)
  const [disable1, setDisable1] = useState(false)

  const prevSlide = () => {
    setCurrent(current === 0 ? len-1 : current - 1)
    current!==1 ? setDisable(false) : setDisable(true)
    
    const move = document.getElementById("types-slide")
    move.style.transform = `translateX(${-160*(slideNumber)}px)`
    move.style.transition = "1s"

    slideNumber--;
    setDisable1(false)
  }
  const nextSlide = () => {
    setCurrent(current === len-1 ? 0 : current + 1 )
    current===len-8 ? setDisable1(true) : setDisable1(false) 

    const move = document.getElementById("types-slide")
    move.style.transform = `translateX(${-160*(current+1)}px)`
    move.style.transition = "1s"

    slideNumber=current;
    setDisable(false)
  }

  return (
    <div className="slides">
        <button disabled={disable} onClick={prevSlide} className="types-left-btn">
            <img src={LeftBtn} alt=""/>
        </button>
        <div className="types-list">
            <div id="types-slide">
              {items.map((item,i) => (
                  <Link to={`/category/${item.text}`} key={i} className="types">
                      <img className="types-img" src={item.image} alt=""/>
                      <p className="types-text">{item.text}</p>
                  </Link>
              ))}
            </div>
        </div>
      
        <button disabled={disable1} onClick={nextSlide} className="types-right-btn">
            <img style={{transform: "rotate(180deg)"}} src={LeftBtn} alt=""/>
        </button>
    </div>
  );
}

export default Slides;