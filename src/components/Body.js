import React,{useState,useEffect} from 'react'
import './../styles/Body.css'
import Slide from './Slide'
import Sale from './../icons/Sale.svg'

function Body(){



    return(
        <div className="body">
            <h1 style={{color:"white", margin:"0" }}>Deeva</h1>
            <Slide />
            <div style={{position:"absolute", background:"#FFFCF8", width:"100%",height:"217px"}}>
                <img className="sale" src={Sale} />
            </div>
        </div>
    )
}

export default Body;