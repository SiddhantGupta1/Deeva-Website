import React,{useState,useEffect} from 'react'
import './../styles/Body.css'
import Slides from './Slides'
import Sale from './../icons/Sale.svg'
import Wardrobe from './Wardrobe'
import Cards from './Cards'
import AD from './../icons/Since 1964.svg'

function Body(){


    return(
        <div className="body">
            <h1 style={{color:"white", margin:"0 0 10px 0" }}>Deeva</h1>
            <Slides />

            <div style={{background:"#FFFCF8", float:"left", width:"100%", height:"100%"}}>
                <img className="sale" src={Sale} />
            </div>

            <div className="wardrobe-frame">
                <Wardrobe />
            </div>
            <Cards /> 
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

            
                <img className="AD" src={AD} />
            

        </div>
    )
}

export default Body;



