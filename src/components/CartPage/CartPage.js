import React,{useState} from 'react'
import './CartPage.css'
import Header from '../Header'
import Footer from '../Footer'
import Hanger from '../../icons/Add to Hanger.svg'
import TrendImage from '../../icons/Trend Image.svg'
import Assured from '../../icons/Deeva Assured.svg'
import Return from '../../icons/30 Days Return.svg'
import FilledLike from '../../icons/Filled Like Btn.svg'
import {Link} from 'react-router-dom'

const CartPage = ({product}) => {
console.log(product[0])
    const demos = [
        {
            id: 1,
            image: TrendImage,
            fullName: "Neeva Yellow Taant Fashion",
            name: "Neeva",
            dprice: 999,
            price: 1550,
            dicount: 35,
            stock: true,
        },
        {
            id: 2,
            image: TrendImage,
            fullName: "Neeva Yellow Taant Fashion",
            name: "Neeva",
            dprice: 999,
            price: 1550,
            dicount: 35,
            stock: true,
        },
        {
            id: 3,
            image: TrendImage,
            fullName: "Neeva Yellow Taant Fashion",
            name: "Neeva",
            dprice: 999,
            price: 1550,
            dicount: 35,
            stock: false,
        },
        {
            id: 4,
            image: TrendImage,
            fullName: "Neeva Yellow Taant Fashion",
            name: "Neeva",
            dprice: 999,
            price: 1550,
            dicount: 35,
            stock: true,
        },
    ];

    var discount = 1200;
    var delivery = "Free";
    var total = 5000;

    const [demo, setDemo] = useState(demos)
    const [quantity, setQuantity] = useState(1)
    const add = () => {
        var increment = quantity + 1
        setQuantity(increment)
    }

    const subtract = (id) => {
        var decrement = quantity - 1
        if(decrement === 0) {
            const newList = demo.filter((e) => e.id!==id )
            setDemo(newList)
        }
        else {
            setQuantity(decrement)
        }
    }


    return(
        <div className="Cart">
            <img className="cart-page-hanger" src={Hanger} alt=""/>
            <dt className="cart-page-hanger-text">Deeva Hanger</dt>
            <div>
                <div style={{width:"100%"}}>
                    <div className="CartHanger">
                        
                        {demo.map(e => (
                            <div className="CartHanger-list">
                                <div className="CartHanger-list-img">
                                    <img src={e.image} alt="" style={{width:"76px", height:"77px", borderRadius:"13px", filter:"drop-shadow(0px 2.85504px 5.71007px rgba(71, 71, 71, 0.25))"}} />
                                </div>

                                <div style={{width:"510px", display:"flex", flexDirection:"column"}}>
                                    <div className="CartHanger-list-name">{e.name}</div>
                                    <div className="CartHanger-list-fullname">{e.fullName}</div>
                                    <div className="CartHanger-list-delivery-by">{ e.stock===true ? <span style={{color:"#6CAE00"}}>Delivery by 3rd may</span> : <span style={{color:"#AE0000"}}>Currently Unavailable</span>}</div>
                                </div>
                                <div className="CartHanger-list-price">
                                    
                                    <div className="CartHanger-list-price-1">
                                        <button onClick={() => { subtract(e.id) }}>-</button>
                                        <dt>{quantity}</dt>
                                        <button onClick={() => { add() }}>+</button>
                                    </div>

                                    <div className="CartHanger-list-price-2">&#8377;{e.dprice.toFixed(2)}</div>
                                    <div className="CartHanger-list-price-3"><span>&#8377;{e.price}</span> &emsp; ( {e.dicount}% Off)</div>
                                </div>

                            </div>
                        ))}
                        <button className="CartHanger-remove-btn">Remove All</button>
                        
                    </div>

                    <div className="CartHanger-bill">
                        <div id="CartHanger-bill">Sub Total</div>
                        {demo.map(e => (
                            <div className="CartHanger-bill-item">
                                <dt>{e.fullName.split(' ').slice(0,2).join(' ')}</dt>
                                <dt>&#8377;{e.price.toLocaleString("en-US")}</dt>
                            </div>
                        ))}
                        <div id="CartHanger-bill-discount">-&#8377;{discount.toLocaleString("en-US")}</div>
                        <div className="CartHanger-bill-discount" >Discount Amount</div>
                        <div id="CartHanger-bill-delivery">{delivery.toLocaleString("en-US")}</div>
                        <div className="CartHanger-bill-delivery">Delivery Charges</div>
                        <div className="CartHanger-bill-divider"></div>
                        <div className="CartHanger-bill-total">Total Amount</div>
                        <div className="CartHanger-bill-total-price">&#8377;{total.toLocaleString("en-US")}</div>
                        <Link to="/address"><button className="CartHanger-bill-btn">Checkout</button></Link>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <img src={Return} alt=""/>
                            <img src={Assured} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
{/*_____________________________________________________LIKED____________________________________________________________ */}
            
            <div style={{display:"flex", flexDirection:"column"}}>
                <div className="CartLiked-heading">Liked</div>
                <div style={{width: "100%"}}>
                    <div className="CartLiked">
                        {demo.map(e => (
                            <div>
                                <div id="CartLiked-like-btn">
                                    <button style={{display: "flex", alignItems: "center", justifyContent: "center", width:"30px", height: "30px"}}>
                                        <img src={FilledLike} alt="" />
                                    </button>
                                </div>
                                <div className="CartHanger-list">
                                    <div className="CartHanger-list-img">
                                        <img src={e.image} alt="" style={{width:"76px", height:"77px", borderRadius:"13px", filter:"drop-shadow(0px 2.85504px 5.71007px rgba(71, 71, 71, 0.25))"}} />
                                    </div>

                                    <div style={{width:"510px", display:"flex", flexDirection:"column"}}>
                                        <div className="CartHanger-list-name">{e.name}</div>
                                        <div className="CartHanger-list-fullname">{e.fullName}</div>
                                        <div className="CartHanger-list-delivery-by">{ e.stock===true ? <span style={{color:"#6CAE00"}}>Delivery by 3rd may</span> : <span style={{color:"#AE0000"}}>Currently Unavailable</span>}</div>
                                    </div>
                                    <div className="CartHanger-list-price">
                                    
                                        <div className="CartHanger-list-price-1">
                                            <button>-</button>
                                            <dt>2</dt>
                                            <button>+</button>
                                        </div>

                                        <div className="CartHanger-list-price-2">&#8377;{e.dprice.toFixed(2)}</div>
                                        <div className="CartHanger-list-price-3"><span>&#8377;{e.price}</span> &emsp; ( {e.dicount}% Off)</div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="CartHanger-bill">
                        <div id="CartHanger-bill">Sub Total</div>
                        {demo.map(e => (
                            <div className="CartHanger-bill-item">
                                <dt>{e.fullName.split(' ').slice(0,2).join(' ')}</dt>
                                <dt style={{float:"right"}}>&#8377;{e.price.toLocaleString("en-US")}</dt>
                            </div>
                        ))}
                        <div id="CartHanger-bill-discount">-&#8377;{discount.toLocaleString("en-US")}</div>
                        <div className="CartHanger-bill-discount" >Discount Amount</div>
                        <div id="CartHanger-bill-delivery">{delivery.toLocaleString("en-US")}</div>
                        <div className="CartHanger-bill-delivery">Delivery Charges</div>
                        <div className="CartHanger-bill-divider"></div>
                        <div className="CartHanger-bill-total">Total Amount</div>
                        <div className="CartHanger-bill-total-price">&#8377;{total.toLocaleString("en-US")}</div>
                        <Link to="/address select"><button className="CartHanger-bill-btn">Checkout</button></Link>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <img src={Return} alt=""/>
                            <img src={Assured} alt=""/>
                        </div>

                    </div>
                </div>
            </div>

{/*_______________________________________________________BUY AGAIN_______________________________________________________ */}

            <div style={{display:"flex", flexDirection:"column"}}>
                <div className="CartBuyAgain-heading">Buy Again</div>
                <div style={{width: "100%"}}>
                    <div className="CartHanger">
                        {demo.map(e => (
                            <div className="CartHanger-list">
                                <div className="CartHanger-list-img">
                                    <img src={e.image} alt="" style={{width:"76px", height:"77px", borderRadius:"13px", filter:"drop-shadow(0px 2.85504px 5.71007px rgba(71, 71, 71, 0.25))"}} />
                                </div>

                                <div style={{width:"510px", display:"flex", flexDirection:"column"}}>
                                    <div className="CartHanger-list-name">{e.name}</div>
                                    <div className="CartHanger-list-fullname">{e.fullName}</div>
                                    <div className="CartHanger-list-delivery-by">{ e.stock===true ? <span style={{color:"#6CAE00"}}>Delivery by 3rd may</span> : <span style={{color:"#AE0000"}}>Currently Unavailable</span>}</div>
                                </div>
                                <div className="CartHanger-list-price">
                                    
                                    <div className="CartHanger-list-price-1">
                                        <button>-</button>
                                        <dt>2</dt>
                                        <button>+</button>
                                    </div>

                                    <div className="CartHanger-list-price-2">&#8377;{e.dprice.toFixed(2)}</div>
                                    <div className="CartHanger-list-price-3"><span>&#8377;{e.price}</span> &emsp; ( {e.dicount}% Off)</div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="CartHanger-bill">
                        <div id="CartHanger-bill">Sub Total</div>
                        {demo.map(e => (
                            <div className="CartHanger-bill-item">
                                <dt>{e.fullName.split(' ').slice(0,2).join(' ')}</dt>
                                <dt style={{float:"right"}}>&#8377;{e.price.toLocaleString("en-US")}</dt>
                            </div>
                        ))}
                        <div id="CartHanger-bill-discount">-&#8377;{discount.toLocaleString("en-US")}</div>
                        <div className="CartHanger-bill-discount" >Discount Amount</div>
                        <div id="CartHanger-bill-delivery">{delivery.toLocaleString("en-US")}</div>
                        <div className="CartHanger-bill-delivery">Delivery Charges</div>
                        <div className="CartHanger-bill-divider"></div>
                        <div className="CartHanger-bill-total">Total Amount</div>
                        <div className="CartHanger-bill-total-price">&#8377;{total.toLocaleString("en-US")}</div>
                        <Link to="/address select"><button className="CartHanger-bill-btn">Checkout</button></Link>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <img src={Return} alt=""/>
                            <img src={Assured} alt=""/>
                        </div>

                    </div>
                </div>
            </div>
            
            <div style={{marginBottom:"125px"}}></div>
            <Footer />
            <Header />
        </div>
    )
}

export default CartPage;