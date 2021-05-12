import React,{useState, useEffect} from 'react'
import './LastSection.css'
import Demo from './../../icons/Saree Pic.svg'

function LastSection() {
    
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
            <div className="LastSection-frame">
                <div className="LastSection-heading">More from the Manufacturer</div>
                
                    <div className="LastSection-rope" style={{width:"79.44%"}}></div>
                    <div className="LastSection-contents">
                        {items.map(e => (
                            <div style={{margin:"0 46px 0 0"}}>
                                <img className="LastSection-img" src={e.img} />
                                <div className="LastSection-prices">
                                    <div className="LastSection-price">&#8377;{e.price}</div>
                                    <div className="LastSection-Dprice">&#8377;{e.dprice}</div>
                                </div>
                                <div className="LastSection-comments">Last Bought on<br/>{e.comment}</div>
                            </div>
                        ))
                        }
                </div>    
            </div>

            <div className="LastSection-frame">
                <div className="LastSection-heading">Recommended for You</div>
                
                    <div className="LastSection-rope" style={{width:"82.65%"}}></div>
                    <div className="LastSection-contents">
                        {items.map(e => (
                            <div style={{margin:"0 46px 0 0"}}>
                                <img className="LastSection-img" src={e.img} />
                                <div className="LastSection-prices">
                                    <div className="LastSection-price">&#8377;{e.price}</div>
                                    <div className="LastSection-Dprice">&#8377;{e.dprice}</div>
                                </div>
                                <div className="LastSection-comments">Last Bought on<br/>{e.comment}</div>
                            </div>
                        ))
                        }
                </div>    
            </div>

            <div className="LastSection-frame">
                <div className="LastSection-heading">More Trending</div>
                
                    <div className="LastSection-rope" style={{width:"87.7%"}}></div>
                    <div className="LastSection-contents">
                        {items.map(e => (
                            <div style={{margin:"0 46px 0 0"}}>
                                <img className="LastSection-img" src={e.img} />
                                <div className="LastSection-prices">
                                    <div className="LastSection-price">&#8377;{e.price}</div>
                                    <div className="LastSection-Dprice">&#8377;{e.dprice}</div>
                                </div>
                                <div className="LastSection-comments">Last Bought on<br/>{e.comment}</div>
                            </div>
                        ))
                        }
                </div>    
            </div>


        </div>
        
    )
}

export default LastSection;