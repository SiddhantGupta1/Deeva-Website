import React,{useState} from 'react'
import './Section6.css'
import LeftBtn from "./../../icons/Arrow.svg";
import Brand from "./../../icons/Brand.svg";
import {Link} from 'react-router-dom'

var slideNumber = -1;
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
      const len = items.length
      const [current, setCurrent] = useState(0)
      const [disable, setDisable] = useState(true)
      const [disable1, setDisable1] = useState(false)

      const prevSlide = () => {
        setCurrent(current === 0 ? len-1 : current - 1)
        current!==1 ? setDisable(false) : setDisable(true)
        
        const move = document.getElementById("brands-slide")
        move.style.transform = `translateX(${-160*(slideNumber)}px)`
        move.style.transition = "1s"
    
        slideNumber--;
        setDisable1(false)
      }

      const nextSlide = () => {
        setCurrent(current === len-1 ? 0 : current + 1 )
        current===len-8 ? setDisable1(true) : setDisable1(false) 
    
        const move = document.getElementById("brands-slide")
        move.style.transform = `translateX(${-160*(current+1)}px)`
        move.style.transition = "1s"
    
        slideNumber=current;
        setDisable(false)
      }
    

    return(
        <div className="Section6">
            <div className="Section6-heading">Top Brands</div>
            <div className="Section6-rope"></div>
            <div className="top-brands">

                <button disabled={disable} onClick={prevSlide} className="brands-left-btn">
                    <img src={LeftBtn} alt=""/>
                </button>
                <div className="brands-list">
                  <div id="brands-slide">
                      {items.map((item,i) => (
                          <Link to="/others/Top Brands" key={i} className="brands-home">
                              <img className="brands-img" src={item.image} alt="" />
                              <p className="brands-text">{item.text}</p>
                          </Link>
                      ))}
                    </div>
                </div>
                <button disabled={disable1} onClick={nextSlide} className="brands-right-btn">
                    <img style={{transform: "rotate(180deg)"}} src={LeftBtn} alt="" />
                </button>

            </div>
        </div>
    )
}

export default Section6;