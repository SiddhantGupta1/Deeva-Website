import React,{useState, useEffect} from 'react'
import './../../styles/HomePageCSS/ForYou.css'
import Demo from './../../icons/Saree Pic.svg'
import Hanger from './../../icons/Golden Hanger.svg'

function ForYou() {
    
    const items = [
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
        {
            img: Demo,
            price: 1500,
            dprice: 999,
        },
    ];

    return(

        <div className="ForYou-frame">
            <div className="ForYou-heading">For You</div>
            <div className="ForYou">
                <div className="ForYou-rope"></div>
                <div className="ForYou-content">
                    {items.map(e => (
                        <div style={{margin:"0 46px 0 0"}}>
                            <img className="ForYou-hanger" src={Hanger} />
                            <img className="ForYou-img" src={e.img} />
                            <div className="ForYou-prices">
                                <div className="ForYou-price">&#8377;{e.price}</div>
                                <div className="ForYou-Dprice">&#8377;{e.dprice}</div>
                            </div>
                        </div>
                    ))
                    }
                </div>    
            </div>
        </div>
    )
}

export default ForYou;