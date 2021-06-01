import React from 'react'
import './Delivery.css'
import {useLocation} from 'react-router-dom'
import queryString from 'query-string';
import img1 from '../../icons/Delivery1.svg'
import img2 from '../../icons/Delivery2.svg'
import img3 from '../../icons/Delivery3.svg'
import img4 from '../../icons/Delivery4.svg'
import Return from '../../icons/30 Days Return.svg'
import Assured from '../../icons/Deeva Assured.svg'
import Header from '../Header'
import Footer from '../Footer'


const width = 98.5;
const Delivery = ({deliver, orders}) => {

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


    let clock = setInterval(() => {
        clearInterval(clock)
        clock = null

        document.getElementById('Delivery-line').style.width = `${width}%`
        if(width>=98.3){
            document.getElementById('point1').style.background = "#FFD706"
            document.getElementById('point2').style.background = "#FFD706"
            document.getElementById('point3').style.background = "#FFD706"
            document.getElementById('point4').style.background = "#FFD706"
        }
        else if(width>=61.4){
            document.getElementById('point1').style.background = "#FFD706"
            document.getElementById('point2').style.background = "#FFD706"
            document.getElementById('point3').style.background = "#FFD706"
        }
        else if(width>=27.4){
            document.getElementById('point1').style.background = "#FFD706"
            document.getElementById('point2').style.background = "#FFD706"
        }
        else{
            document.getElementById('point1').style.background = "#FFD706"
        }
        
    }, 10)

    return (
        <div className="DeliveryPage" >

            <div className="DeliveryPage-path"><a href="/">Home</a>&ensp; &gt; &ensp; <a href="/your orders">Your Orders</a>&ensp; &gt; &ensp; Order Id. #68413</div>
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
                            <img src={Assured} alt="Deeva Assured"/>
                            
                        </div>

                    </div>

                </div>


                <div className="DeliveryPage-frame2">

                    <div style={{width:"100%", padding:"0 77px 0 32px", transform:"translateY(138px)"}}>
                        <div className="Delivery-line"></div>
                        <div id="Delivery-line"></div>
                    </div>


                    <div style={{display:"flex", justifyContent:"space-between", transform:"translateY(0px)"}}>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", transform:"translateY(2px)"}}>
                            <img src={img1} alt="" style={{transform:"translateY(7px)"}}/>
                            <div id="point1" className="Delivery-line-point"></div>
                            <dt>Ordered</dt>
                            <article>29th January</article>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", transform:"translateY(21px)"}}>
                            <img src={img2} alt="" style={{transform:"translateY(11px)"}}/>
                            <div id="point2" className="Delivery-line-point"></div>
                            <dt>Packed</dt>
                            <article>30th January</article>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", transform:"translateY(18px)"}}>
                            <img src={img3} alt="" style={{transform:"translateY(8px)"}}/>
                            <div id="point3" className="Delivery-line-point"></div>
                            <dt>Dispatched</dt>
                            <article>31st January</article>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", transform:"translateY(8.5px)"}}>
                            <img src={img4} alt="" style={{transform:"translateY(9.5px)"}}/>
                            <div id="point4" className="Delivery-line-point"></div>
                            <dt>Delivery</dt>
                            <article>1st February</article>
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            <Footer/>
            <Header/>
        </div>
    )
}

export default Delivery;