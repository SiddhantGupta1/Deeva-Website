import React from 'react'
import './Section1.css'
import Demo from './../../icons/Saree Pic.svg'
import Btn from './../../icons/Arrow.svg'
import {Link} from 'react-router-dom'

function Cards(){

    const pics=[Demo, Demo, Demo, Demo]

    return(
        <div className="Cards">
            <div className="recommended">
                <div className="recommended-heading">Recommended For You</div>
                <div className="recommended-rope"></div>
                <div>
                    <div className="recommended-content">
                        {pics.map((pics,i) => (
                            <img key={i} className="Cards-contents" src={pics} alt="" />
                        ))}
                    </div>
                </div>
                <Link to="/others/Recommended For You" >
                    <button className="Cards-btn">
                        <img style={{transform: "rotate(180deg)"}} src={Btn} alt="" />
                    </button>
                </Link>
            </div>

            <div className="top-picks">
                <div className="top-picks-heading">Top Picks</div>
                <div className="top-picks-rope"></div>
                <div className="top-picks-content">
                    {pics.map((pics,i) => (
                        <img key={i} className="Cards-contents" src={pics} alt=""/>
                    ))
                    }
                </div>
                <Link to="/others/Top Picks">
                    <button className="Cards-btn">
                        <img style={{transform: "rotate(180deg)"}} src={Btn} alt=""/>
                    </button>
                </Link>
            </div>

            <div className="top-picks">
                <div className="top-picks-heading">Top Picks</div>
                <div className="top-picks-rope"></div>
                <div className="top-picks-content">
                    {pics.map((pics,i) => (
                        <img key={i} className="Cards-contents" src={pics} alt=""/>
                    ))
                    }
                </div>
                <Link to="/others/Top Picks">
                    <button className="Cards-btn">
                        <img style={{transform: "rotate(180deg)"}} src={Btn} alt=""/>
                    </button>
                </Link>
            </div>

            <div className="top-picks">
                <div className="top-picks-heading">Top Picks</div>
                <div className="top-picks-rope"></div>
                <div className="top-picks-content">
                    {pics.map((pics,i) => (
                        <img key={i} className="Cards-contents" src={pics} alt=""/>
                    ))
                    }
                </div>
                <Link to="/others/Top Picks">
                    <button className="Cards-btn">
                        <img style={{transform: "rotate(180deg)"}} src={Btn} alt=""/>
                    </button>
                </Link>
            </div>
        </div>
    )   
}

export default Cards;