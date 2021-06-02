import React from 'react'
import './LastSection.css'
import Demo from '../../icons/Saree Pic.svg'

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
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <div className="LastSection-frame">
                    <div className="LastSection-heading">Related to your search</div>
                    
                        <div className="LastSection-rope" style={{width:"82.85%"}}></div>
                        <div className="LastSection-contents">
                            {items.map((e,i) => (
                                <div key={i} style={{margin:"0 46px 0 0"}}>
                                    <img className="LastSection-img" src={e.img} alt=""/>
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

            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <div className="LastSection-frame">
                    <div className="LastSection-heading">More Trending</div>
                    
                        <div className="LastSection-rope" style={{width:"87.7%"}}></div>
                        <div className="LastSection-contents">
                            {items.map((e,i) => (
                                <div key={i} style={{margin:"0 46px 0 0"}}>
                                    <img className="LastSection-img" src={e.img} alt=""/>
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

        </div>
        
    )
}

export default LastSection;