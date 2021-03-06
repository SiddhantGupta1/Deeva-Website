import React from 'react'
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
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <div className="Section7-frame">
                    <div className="Section7-heading">Most Searched</div>
                    
                    <div className="Section7-rope"></div>
                    <div className="Section7-contents">
                        {items.map((e,i) => (
                            <a href={`/others/Most Searched#Product${i}`} key={i} style={{margin:"0 46px 0 0"}}>
                                <img className="Section7-img" src={e.img} alt=""/>
                                <div className="Section7-prices">
                                    <div className="Section7-price">&#8377;{e.price}</div>
                                    <div className="Section7-Dprice">&#8377;{e.dprice}</div>
                                </div>
                                <div className="Section7-comments">Last Bought on<br/>{e.comment}</div>
                            </a>
                        ))}
                    </div>    
                </div>
            </div>

            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <div className="Section7-frame">
                    <div className="Section7-heading">More to Explore</div>
                    
                    <div className="Section7-rope" style={{width:"87.237%"}}></div>
                    <div className="Section7-contents">
                        {items.map((e,i) => (
                            <a href={`others/More to Explore#Product${i}`} key={i} style={{margin:"0 46px 0 0"}}>
                                <img className="Section7-img" src={e.img} alt=""/>
                                <div className="Section7-prices">
                                    <div className="Section7-price">&#8377;{e.price}</div>
                                    <div className="Section7-Dprice">&#8377;{e.dprice}</div>
                                </div>
                                <div className="Section7-comments">Last Bought on<br/>{e.comment}</div>
                            </a>
                        ))}
                    </div>    
                </div>
            </div>

            <div  style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <div className="Section7-frame">
                    <div className="Section7-heading">Recently Explored</div>
                    
                        <div className="Section7-rope" style={{width:"85.748%"}}></div>
                        <div className="Section7-contents">
                            {items.map((e,i) => (
                                <a href={`/others/Recently Explored#Product${i}`} key={i} style={{margin:"0 46px 0 0"}}>
                                    <img className="Section7-img" src={e.img} alt=""/>
                                    <div className="Section7-prices">
                                        <div className="Section7-price">&#8377;{e.price}</div>
                                        <div className="Section7-Dprice">&#8377;{e.dprice}</div>
                                    </div>
                                    <div className="Section7-comments">Last Bought on<br/>{e.comment}</div>
                                </a>
                            ))
                            }
                    </div>    
                </div>
            </div>

        </div>
        
    )
}

export default Section7;