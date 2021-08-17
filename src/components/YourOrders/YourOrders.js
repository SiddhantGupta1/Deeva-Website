import React from 'react'
import  './YourOrders.css'
import Header from '../Header'
import Arrow from '../../icons/Your Orders Arrow.svg'
import Star from '../../icons/Golden Star.svg'
import {Link} from 'react-router-dom'

function YourOrders({deliver, orders}) {

    return (
        <div className="YourOrders">
            <div className="YourOrders-path"><a href="/">Home</a>&ensp; &gt; &ensp; Your Orders</div>

            <div className="YourOrders-heading">Your Orders</div>
    
            <div className="YourOrders-content">
                {orders.map((e,i) => (
                    <div key={i} style={{width:"100%", display:"flex", justifyContent:"center"}}>
                        <div className="Order-frame">
                            <div className="YourOrders-img"> 
                                <img src={e.image} alt=""/> 
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <div className="YourOrders-name">{e.name.split(' ').slice(0,1).join(' ')}</div>
                                <div className="YourOrders-fullname">{e.name}</div>
                                
                                <div className="Order-delivery-details">
                                    <dt>Ordered on 29th May 2021</dt>
                                    <img src={Arrow} alt=""/>
                                    <dt>{deliver}</dt>
                                    <img src={Arrow} alt=""/>
                                    <dt>Return Policy Active till 1st July 2021</dt>
                                </div>
                            </div>
                            <div style={{display:"flex",flexDirection:"column", alignItems:"flex-end"}}>
                                <button><img style={{marginRight:"10px"}} src={Star} alt="" />Rate and Review your Purchase</button>
                                
                                <div>
                                    <div id="YourOrders-dprice">&#8377;{e.dprice.toFixed(2)}</div>
                                    <div style={{display:"flex"}}>
                                        <div id="YourOrders-price">&#8377;{e.price}</div>
                                        <div id="YourOrders-discount">({e.discount}% Off)</div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        <div className="YourOrders-btns">
                            <Link to={`/your orders/delivery?id=${e.id}`} style={{textDecoration:"none"}}>
                                <button style={{backgroundColor:"#FFD706"}}>Track Product</button>
                            </Link>
                            <button style={{backgroundColor:"#FFFFFF", marginTop:"10px"}}>Cancel Order</button>
                        </div>
                    </div>

                ))}

            </div>

            <Header/>
        </div>
    )
}

export default YourOrders;