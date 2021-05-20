import React from 'react'
import './Address.css'
import Logo from '../../icons/Deeva Black Logo.svg'
import Arrow from '../../icons/Arrow.svg'
import {Link} from 'react-router-dom'

const Address = () => {
    function toggle1(){
        const slide = document.getElementById('recently-delivered')
        slide.style.transform = 'translateX(106%)'
        const active0 = document.getElementById('recently-delivered-btn')
        active0.style.color = '#646363'
        const active1 = document.getElementById('saved-address-btn')
        active1.style.color = '#000000'
    }
    function toggle0(){
        const slide = document.getElementById('recently-delivered')
        slide.style.transform = 'translateX(0%)'
        const active0 = document.getElementById('saved-address-btn')
        active0.style.color = '#646363'
        const active1 = document.getElementById('recently-delivered-btn')
        active1.style.color = '#000000'
    }
    return (
        <div className="AddressPage">
            <div className="AddressPage-path">Home&ensp; &gt; &ensp; Select Address</div>
            <div style={{width:"100%", display:"flex", flexDirection: "column", alignItems: "center", marginLeft:"70px"}}>
                <img src={Logo} alt="Deeva Logo" style={{width:"142px", height:"57px", mixBlendMode:"darken"}} />
                <div className="AddressPage-heading" >Where to deliver the order ?</div>
                
                <div className="Address-card">
                    <div className="Address-card-instruction">Choose an address where you want us to deliver your order, and click on ‘Go to Payment Page’ .<br/>You can also add a new address.</div>
                    <div style={{display:"flex", justifyContent:"center"}}>

                        <div className="AddressPage-toggle">
                            <button onClick={toggle0} id="recently-delivered-btn" >Recently Delivered</button>
                            <button onClick={toggle1} id="saved-address-btn" >Saved Addresses</button>
                            <div style={{display:"flex"}}>   
                                <div id="recently-delivered" ></div>
                                <div id="saved-address" ></div>
                            </div>
                            <div className="AddressPage-toggle-line"></div>
                        </div>

                    </div>

                    <div style={{display:"flex",overflow:"scroll"}}>
                            
                        <div id="recent-addresses">
                            <h1>hell</h1>
                        </div>

                        <div id="saved-addresses">
                            <h1>HELL</h1>
                        </div>

                    </div>

                </div>

                <div className="Address-privacy">Conditions of Use | Privacy Notice © 2021-2029, Deeva.in, Inc. and its affiliates</div>
            </div>

            <div className="AddressPagebtn">
                <Link to="/payment"><button><img style={{transform:"rotate(180deg)"}} src={Arrow} alt="" /></button></Link>
                <div>Go to<br/> Payment Page</div>
            </div>
        </div>
    )
}

export default Address