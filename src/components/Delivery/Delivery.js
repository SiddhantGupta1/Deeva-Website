import React from 'react'
import  './Delivery.css'
import Frame from '../../Frame.png'
import img1 from '../../icons/img1.svg'
import img2 from '../../icons/img2.svg'
import img3 from '../../icons/img3.svg'
import img4 from '../../icons/img4.svg'
import Header from '../Header'
import Footer from '../Footer'

function Delivery() {
    return (
        <div class = "main-bg" >
             <Header/>
            <img src = {Frame}></img>
            <div class ="nav">
              <a href = '#'> Home </a>  
              &nbsp;&gt;&nbsp; 
              <a href = '#'> Your Account </a>
              &nbsp;&gt;&nbsp;  
              <a href = '#'> Your Orders </a>
              &nbsp;&gt;&nbsp;  
              <a href = '#'> Order Id. #13486 </a>
            </div>

           

            <div class = "headline">Delivery by 10th June</div>
            
            <div class='box-up'>
                <div class='delivery-adds'>Delivery</div>
               
            </div>

            <div class='box-down'>

                <div class ='img1'> <img src = {img1}></img> </div>
                <div class ='img2'> <img src = {img2}></img> </div>
                <div class ='img3'> <img src = {img3}></img> </div>
                <div class ='img4'> <img src = {img4}></img> </div>

            </div>

            <Footer/>
            <Header/>

        </div>
    )
}

export default Delivery;