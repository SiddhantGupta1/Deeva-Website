import React,{useState,useEffect} from 'react'
import './../styles/Body.css'
import Slides from './Slides'
import Sale from './../icons/Sale.svg'
import Wardrobe from './Wardrobe'


function Body(){

    const Slide = require('./Slides').default;
    const { red, blue, green } = require('@material-ui/core/colors');
    const Button = require('@material-ui/core/Button').default;


    return(
        <div className="body">
            <h1 style={{color:"white", margin:"0" }}>Deeva</h1>
            <Slides />

            <div style={{background:"#FFFCF8", float:"left", width:"100%",height:"217px"}}>
                <img className="sale" src={Sale} />
            </div>

            <div className="hidden-card"></div>
            <div className="card">
                <Wardrobe />
            </div>

        </div>
    )
}

export default Body;



