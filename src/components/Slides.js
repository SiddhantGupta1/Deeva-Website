import React,{useState} from 'react'
import './../styles/Slides.css'
import DemoPic from './../icons/Demo.svg'
import LeftBtn from './../icons/Arrow.svg'

function Slides() {

    const number=[DemoPic,DemoPic,DemoPic,DemoPic,DemoPic,DemoPic,DemoPic];
    const text=["Taant","Kasavu","Kanjeevaram","Bomkai","Sambalpuri","Paithani","Bandhani"];

    return(

        <div className="slides">
            
            <div className="type-list">
                {number.map(number => (
                    <li>
                        <img className="types" src={number} />
                    </li>
                ),10)}
                {text.map(text => (
                    <li>
                        <p className="types-text">{text}</p>
                    </li>
                ),10)}
            </div>
            <button className="types-left-btn">
                <img src={LeftBtn}/>
            </button>
            <button className="types-right-btn">
                <img style={{transform: "rotate(180deg)"}} src={LeftBtn}/>
            </button>
        </div>

    );
}

export default Slides;