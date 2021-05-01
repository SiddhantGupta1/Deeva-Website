import React from 'react'
import './../styles/Cards.css'
import Demo from './../icons/Saree Pic.svg'
import Btn from './../icons/Arrow.svg'

function Cards(){

    const pics=[Demo, Demo, Demo, Demo]

    return(
        <div className="Cards">
            <div className="recommended">
                <div className="recommended-heading">Recommended For You</div>
                <div className="recommended-rope"></div>
                <div className="recommended-content">
                    {pics.map(pics => (
                        <img className="Cards-contents" src={pics} />
                    ))
                    }
                </div>
                <button className="Cards-btn">
                    <img style={{transform: "rotate(180deg)"}} src={Btn} />
                </button>
            </div>

            <div className="top-picks">
                <div className="top-picks-heading">Top Picks</div>
                <div className="top-picks-rope"></div>
                <div className="top-picks-content">
                    {pics.map(pics => (
                        <img className="Cards-contents" src={pics} />
                    ))
                    }
                </div>
                <button className="Cards-btn">
                    <img style={{transform: "rotate(180deg)"}} src={Btn} />
                </button>
            </div>

            <div className="top-picks">
                <div className="top-picks-heading">Top Picks</div>
                <div className="top-picks-rope"></div>
                <div className="top-picks-content">
                    {pics.map(pics => (
                        <img className="Cards-contents" src={pics} />
                    ))
                    }
                </div>
                <button className="Cards-btn">
                    <img style={{transform: "rotate(180deg)"}} src={Btn} />
                </button>
            </div>

            <div className="top-picks">
                <div className="top-picks-heading">Top Picks</div>
                <div className="top-picks-rope"></div>
                <div className="top-picks-content">
                    {pics.map(pics => (
                        <img className="Cards-contents" src={pics} />
                    ))
                    }
                </div>
                <button className="Cards-btn">
                    <img style={{transform: "rotate(180deg)"}} src={Btn} />
                </button>
            </div>
        </div>
    )   
}

export default Cards;