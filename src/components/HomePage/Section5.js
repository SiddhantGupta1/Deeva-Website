import React,{useState, useEffect} from 'react'
import './Section5.css'
import Demo from './../../icons/Saree Pic.svg'
import Hanger from './../../icons/Golden Hanger.svg'

function Section5() {
    
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

        <div className="Section5-frame">
            <div className="Section5-heading">New in Store</div>
            <div className="Section5">
                <div className="Section5-rope"></div>
                <div className="Section5-content">
                    {items.map(e => (
                        <div style={{margin:"0 46px 0 0"}}>
                            <img className="Section5-hanger" src={Hanger} />
                            <img className="Section5-img" src={e.img} />
                            <div className="Section5-prices">
                                <div className="Section5-price">&#8377;{e.price}</div>
                                <div className="Section5-Dprice">&#8377;{e.dprice}</div>
                            </div>
                        </div>
                    ))
                    }
                </div>    
            </div>
        </div>
    )
}

export default Section5;