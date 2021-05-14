import React,{useState,useEffect} from 'react'
import './Home.css'
import Slides from './Slides'
import Sale from './../../icons/Sale.svg'
import Wardrobe from './Wardrobe'
import Section1 from './Section1'
import Section3 from './ForYou'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Footer from '../Footer'
import AD from './../../icons/Since 1964.svg'
import AD1 from './../../icons/Paytm.svg'

function Body(){

    const pics = [Sale, AD, Sale, AD1];

    return(
        <div className="body">
            <h1 style={{color:"white", margin:"0 0 5px 0" }}>Deeva</h1>
            <Slides />

            <div className="carousel">
                {pics.map(pics => (
                    <img className="sale" src={pics} alt="AD" />
                ))}
            </div>

            <div className="wardrobe-frame">
                <Wardrobe />
            </div>
            <Section1 />

            <div className="Section2">
                <div className="User">
                    <div className="User-heading">Hi Ankush!</div>
                    <div style={{display:"flex", flexWrap:"wrap"}}>
                        <div className="User-content">
                            <div className="User-content-text">Your Orders</div>
                        </div>
                        <div className="User-content">
                            <div className="User-content-text">Saved</div>
                        </div>
                        <div className="User-content">
                            <div className="User-content-text">Your Wishlist</div>
                        </div>
                        <div className="User-content">
                            <div className="User-content-text">Your Hanger</div>
                        </div>
                    </div>
                </div>
                <img className="AD" src={AD} alt="AD" />
            </div>
            <Section3 />
            <Section4 />
            <Section5 />
            <img className="AD1" src={AD1} alt="AD"/>
            <Section6 />
            <Section7 />
            <Footer />

        </div>
    )
}

export default Body;



