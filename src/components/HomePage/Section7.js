import React,{useState, useEffect} from 'react'
import './Section7.css'
import Demo from './../../icons/Saree Pic.svg'

function Section7() {
    
    const items = [
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"

        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
            comment: "13 Aug 2002"
        },
    ];

    return(

        <div>
            <div className="Section7-frame">
                <div className="Section7-heading">Most Searched</div>
                
                    <div className="Section7-rope"></div>
                    <div className="Section7-contents">
                        {items.map(e => (
                            <div style={{margin:"0 46px 0 0"}}>
                                <img className="Section7-img" src={e.img} />
                                <div className="Section7-prices">
                                    <div className="Section7-price">&#8377;{e.price}</div>
                                    <div className="Section7-Dprice">&#8377;{e.dprice}</div>
                                </div>
                                <div className="Section7-comments">Last Bought on<br/>{e.comment}</div>
                            </div>
                        ))
                        }
                </div>    
            </div>

            <div className="Section7-frame">
                <div className="Section7-heading">More to Explore</div>
                
                    <div className="Section7-rope" style={{width:"87.237%"}}></div>
                    <div className="Section7-contents">
                        {items.map(e => (
                            <div style={{margin:"0 46px 0 0"}}>
                                <img className="Section7-img" src={e.img} />
                                <div className="Section7-prices">
                                    <div className="Section7-price">&#8377;{e.price}</div>
                                    <div className="Section7-Dprice">&#8377;{e.dprice}</div>
                                </div>
                                <div className="Section7-comments">Last Bought on<br/>{e.comment}</div>
                            </div>
                        ))
                        }
                </div>    
            </div>

            <div className="Section7-frame">
                <div className="Section7-heading">Recently Explored</div>
                
                    <div className="Section7-rope" style={{width:"85.748%"}}></div>
                    <div className="Section7-contents">
                        {items.map(e => (
                            <div style={{margin:"0 46px 0 0"}}>
                                <img className="Section7-img" src={e.img} />
                                <div className="Section7-prices">
                                    <div className="Section7-price">&#8377;{e.price}</div>
                                    <div className="Section7-Dprice">&#8377;{e.dprice}</div>
                                </div>
                                <div className="Section7-comments">Last Bought on<br/>{e.comment}</div>
                            </div>
                        ))
                        }
                </div>    
            </div>


        </div>
        
    )
}

export default Section7;