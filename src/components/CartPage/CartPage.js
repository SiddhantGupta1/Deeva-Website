import React,{useState, useCallback} from 'react'
import './CartPage.css'
import Header from './../Header'
import Footer from './../Footer'
import Hanger from './../../icons/Add to Hanger.svg'
import TrendImage from './../../icons/Trend Image.svg'
import Assured from './../../icons/Deeva Assured.svg'
import Return from './../../icons/30 Days Return.svg'

function CartPage(){

    const demo = [
        {
            image: TrendImage,
            fullName: "Neeva Yellow",
            name: "Neeva",
            dprice: 999,
            price: 1550,
            dicount: 35,
        },
        {
            image: TrendImage,
            fullName: "Neeva Yellow",
            name: "Neeva",
            dprice: 999,
            price: 1550,
            dicount: 35,
        },
        {
            image: TrendImage,
            fullName: "Neeva Yellow",
            name: "Neeva",
            dprice: 999,
            price: 1550,
            dicount: 35,
        },
        {
            image: TrendImage,
            fullName: "Neeva Yellow",
            name: "Neeva",
            dprice: 999,
            price: 1550,
            dicount: 35,
        },
    ];

    var discount = 1200;
    var delivery = "Free";
    var total = 5000;

    return(
        <div className="Cart">
            <img className="cart-page-hanger" src={Hanger} alt=""/>
            <a className="cart-page-hanger-text">Deeva Hanger</a>
            <div style={{width:"100%"}}>
                <div className="CartHanger">
                    
                    {demo.map(e => (
                        <div className="CartHanger-list">
                                
                        </div>
                    ))}
                    <button className="CartHanger-remove-btn">Remove All</button>
                    
                </div>

                <div className="CartHanger-bill">
                    <div id="CartHanger-bill">Sub Total</div>
                    {demo.map(e => (
                        <div className="CartHanger-bill-item">
                            <a>{e.fullName}</a>
                            <a style={{float:"right"}}>&#8377;{e.price.toLocaleString("en-US")}</a>
                        </div>
                    ))}
                    <div id="CartHanger-bill-discount">-&#8377;{discount.toLocaleString("en-US")}</div>
                    <div className="CartHanger-bill-charges" >Discount Amount</div>
                    <div id="CartHanger-bill-delivery">{delivery.toLocaleString("en-US")}</div>
                    <div className="CartHanger-bill-charges">Delivery Charges</div>
                    <div className="CartHanger-bill-divider"></div>
                    <div className="CartHanger-bill-total">Total Amount</div>
                    <div className="CartHanger-bill-total-price">&#8377;{total.toLocaleString("en-US")}</div>
                    <button className="CartHanger-bill-btn">Checkout</button>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <img src={Return} alt=""/>
                        <img src={Assured} alt=""/>
                    </div>
                </div>
            </div>
{/*_____________________________________________________LIKED____________________________________________________________ */}
            
            <div className="CartLiked-heading">Liked</div>
            <div style={{width: "100%"}}>
                <div className="CartHanger">
                    {demo.map(e => (
                        <div className="CartHanger-list">
                                    
                        </div>
                    ))}
                </div>

                <div className="CartHanger-bill">
                    <div id="CartHanger-bill">Sub Total</div>
                    {demo.map(e => (
                        <div className="CartHanger-bill-item">
                            <a>{e.fullName}</a>
                            <a style={{float:"right"}}>&#8377;{e.price.toLocaleString("en-US")}</a>
                        </div>
                    ))}
                    <div id="CartHanger-bill-discount">-&#8377;{discount.toLocaleString("en-US")}</div>
                    <div className="CartHanger-bill-charges" >Discount Amount</div>
                    <div id="CartHanger-bill-delivery">{delivery.toLocaleString("en-US")}</div>
                    <div className="CartHanger-bill-charges">Delivery Charges</div>
                    <div className="CartHanger-bill-divider"></div>
                    <div className="CartHanger-bill-total">Total Amount</div>
                    <div className="CartHanger-bill-total-price">&#8377;{total.toLocaleString("en-US")}</div>
                    <button className="CartHanger-bill-btn">Checkout</button>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <img src={Return} alt=""/>
                        <img src={Assured} alt=""/>
                    </div>

                </div>
            </div>

            <div className="CartBuyAgain-heading">Buy Again</div>
            <div style={{width: "100%"}}>
                <div className="CartHanger">
                    {demo.map(e => (
                        <div className="CartHanger-list">
                                    
                        </div>
                    ))}
                </div>

                <div className="CartHanger-bill">
                    <div id="CartHanger-bill">Sub Total</div>
                    {demo.map(e => (
                        <div className="CartHanger-bill-item">
                            <a>{e.fullName}</a>
                            <a style={{float:"right"}}>&#8377;{e.price.toLocaleString("en-US")}</a>
                        </div>
                    ))}
                    <div id="CartHanger-bill-discount">-&#8377;{discount.toLocaleString("en-US")}</div>
                    <div className="CartHanger-bill-charges" >Discount Amount</div>
                    <div id="CartHanger-bill-delivery">{delivery.toLocaleString("en-US")}</div>
                    <div className="CartHanger-bill-charges">Delivery Charges</div>
                    <div className="CartHanger-bill-divider"></div>
                    <div className="CartHanger-bill-total">Total Amount</div>
                    <div className="CartHanger-bill-total-price">&#8377;{total.toLocaleString("en-US")}</div>
                    <button className="CartHanger-bill-btn">Checkout</button>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <img src={Return} alt=""/>
                        <img src={Assured} alt=""/>
                    </div>

                </div>
            </div>
            
            <div style={{marginBottom:"125px"}}></div>
            <Footer />
            <Header/>
        </div>
    )
}

export default CartPage;
{/*


*/}