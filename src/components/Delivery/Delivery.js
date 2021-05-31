import React from 'react'
import  './Delivery.css'
import {useLocation} from 'react-router-dom'
import queryString from 'query-string';
import img1 from '../../icons/img1.svg'
import img2 from '../../icons/img2.svg'
import img3 from '../../icons/img3.svg'
import img4 from '../../icons/img4.svg'
import Return from '../../icons/30 Days Return.svg'
import Assured from '../../icons/Deeva Assured.svg'
import Header from '../Header'
import Footer from '../Footer'

function Delivery({deliver, orders}) {

    const user = {
        name: "Ankush Barjata",
        street: "371/73, 55, Fariz E Edroos, Nartha Street, Masjid Bunder (east)",
        city: "Mumbai",
        state: "Maharashtra",
        phone: "02226468414",
        zip: "400009",
        country: "India",
        countryCode: "+91"
    };
    let location = useLocation();
    const parsed = queryString.parse(location.search);
    const id = parsed?.id;
    return (
        <div className="DeliveryPage" >

            <div className="DeliveryPage-path">Home&ensp; &gt; &ensp; Your Orders&ensp; &gt; &ensp; Order Id. #68413</div>
            <div className="DeliveryPage-heading">{deliver.split(' ').slice(0,4).join(' ')}</div>
            
            <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div className="DeliveryPage-frame1">

                    <div className="DeliverPage-user">
                        <dt>Delivery Address</dt>
                        <article>{user.name}</article>
                        <div>Street:&ensp;{user.street}</div>
                        <div>City:&ensp;{user.city}</div>
                        <div>State/Province/Area:&ensp;{user.state}</div>
                        <div>Phone number:&ensp;{user.phone}</div>
                        <div>Zip Code:&ensp;{user.zip}</div>
                        <div>Country calling code:&ensp;{user.countryCode}</div>
                        <div>Country:&ensp;{user.country}</div>
                    </div>

                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div style={{display:"flex"}}>
                            <div className="DeliveryPage-product-names">
                                <dt>{orders[id].name.split(' ').slice(0,1).join(' ')}</dt>
                                <article>{orders[id].name}</article>
                            </div>
                            <div className="DeliveryPage-product-img">
                                <img src={orders[id].image} alt=""/>
                            </div>
                        </div>
                        
                        <div style={{fontSize:"14px", margin:"20px 0"}}>Manufacturer:&ensp;{orders[id].manufacturer}</div>
                       
                        <div className="DeliveryPage-product-details">
                            <div style={{display:"flex", flexDirection:"column", marginRight:"10px"}}>
                                <div className="DeliveryPage-product-price">&#8377;{orders[id].dprice.toFixed(2)}</div>
                                <div className="DeliveryPage-product-prices">
                                    <dt>&#8377;{orders[id].price}</dt>
                                    <article>( {orders[id].discount}% Off )</article>
                                </div>
                            </div>
                            <img src={Return} alt="30 Days Return"/>
                            <img src={Assured} alt="Deeva Assured" />
                            
                        </div>

                    </div>

                </div>

                <div className="DeliveryPage-frame2">

                </div>
            </div>

            <Footer/>
            <Header/>
        </div>
    )
}

export default Delivery;
/**
 * 
<div className='box-up'>
                <div className='delivery-adds'>Delivery</div>
               
            </div>

            <div class='box-down'>

                <div className ='img1'> <img src = {img1} alt="" /> </div>
                <div className ='img2'> <img src = {img2} alt="" /> </div>
                <div className ='img3'> <img src = {img3} alt="" /> </div>
                <div className ='img4'> <img src = {img4} alt="" /> </div>

            </div> 


 */