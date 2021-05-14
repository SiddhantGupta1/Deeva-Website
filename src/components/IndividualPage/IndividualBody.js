import React from 'react'
import './IndividualBody.css'
import Rating from '@material-ui/lab/Rating';
import { StylesProvider } from "@material-ui/core/styles";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Demo from './../../icons/Individual Demo.svg'
import Star from './../../icons/Star.svg'
import Assured from './../../icons/Deeva Assured.svg'
import Return from './../../icons/30 Days Return.svg'

const IndividualBody = () => {
    const about = ["Care Instructions: Dry in Shade<br />Fabric : Banarasi Silk , Pattern/Print Type : Woven Design Saree Length:-5.5Mtr,Blouse Length:-0.8Mtr. Blouse is attached with saree. No Separate Blouse. Blouse to be cut from saree. Blouse is an unstitched Fabric.", "Banarasi sarees originate from the city of Varanasi (Uttar Pradesh). These are well known for the Mughal Era inspired designs in golden as well as silver brocade or Zari.", "Sarees are never out of trend and made for every occasion and setting in a huge variety on the basis of fabric, design, purpose and colour.They easily glam up your look on any and every occasion. Sarees do take a little extra time to be draped but it has a matchless comparison when it comes to elegance and style. They are a must have clothing item in every woman's wardrobe."]
    const product = {
        name: "Neeva",
        fullName: "Neeva Yellow Taant Fashion",
        rating: 4.1,
        discount: 35,
        price: 1550,
        reviews: 2504,
        stock: true,
    }
    const dprice = Math.round( product.price - (product.price*product.discount/100) );
    
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth()+1;
    let day = newDate.getDay();
    console.log(day,date,month)

    return (
        <div className="IndividualBody">
            <div className="Individual-1">
                <div className="Individual-about-heading">From the Manufacture - NEEVA</div>

                <div className="Individual-about-1" dangerouslySetInnerHTML={{__html: about[0]}} />
                <img className="Individual-about-1-img" src={Demo} alt=""/>

                <img className="Individual-about-2-img" src={Demo} alt=""/>
                <div className="Individual-about-2">{about[1]}</div>
            
                <div className="Individual-about-3">{about[2]}</div>
                <img className="Individual-about-3-img" src={Demo} alt=""/>
            </div>

            <div className="Individual-2">
                
                
                <div className="Individual-product-rating">
                    <img src={Star} alt=""/>
                    <a id="Individual-product-rating">{product.rating}</a>
                </div>

                <div className="Individual-product-heading">{product.name}</div>
                
                <StylesProvider injectFirst>
                    <Rating 
                        defaultValue={product.rating}
                        precision={0.1} 
                        size="medium" 
                        readOnly 
                        emptyIcon={<StarBorderIcon fontSize="inherit" />} 
                        id="Individual-product-rating-star"
                    />
                </StylesProvider>
                <div className="Individual-product-sub-heading">{product.fullName}</div>
                
                <a className="Individual-product-reviews">{product.reviews}<br />CustomerReviews</a>
                
                <div className="Individual-product-dprice">&#8377;{dprice}</div>
                <a className="Individual-product-price">&#8377;{product.price}</a>
                <a className="Individual-product-discount">( {product.discount}% Off )</a>
                {product.stock==true ? <a style={{color:"#6CAE00",fontSize:"12px", lineHeight:"18px"}}>In Stock</a> : <a style={{color:"#C91414",fontSize:"12px", lineHeight:"18px"}}>Not In Stock</a> }

                <img className="Individual-product-30-return" src={Return} alt=""/>
                <img className="Individual-product-assured" src={Assured} alt=""/>

                <div className="Individual-product-delivery-by">Delivery by <a style={{fontWeight:"500"}}>Wednesday, 28 April</a> &emsp;&ensp;<a style={{color:"#6CAE00"}}>Free</a></div>

                <div className="Individual-product-list-heading">Offers Available on this Item</div>
                <ul id="Individual-list">
                    <li className="Individual-list">&nbsp;Pay with Axis Card and get 20% discount.</li>
                    <li className="Individual-list">&nbsp;Bank Offer 10% off on ICICI Bank Cards, up to ₹500. On orders of ₹1000 and aboveT&C</li>
                    <li className="Individual-list">&nbsp;Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</li>
                    <li style={{height:"45px"}} className="Individual-list">&nbsp;Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition applyT&C</li>
                </ul>

                <div className="Individual-product-delivery-to">Delivery to</div>
                <div id="Individual-product-delivery-to">

                </div>

                <div className="Individual-product-rate-review">Rate & Review the Product</div>
                <button className="Individual-product-rate">Rate the Product</button>
                <button className="Individual-product-review">Review the Product?</button>

                <div className="Individual-product-experiences-heading">Read all the Customer Experiences with the Product</div>
                <div className="Individual-product-experiences">

                </div>

            </div>

            <div id="Individual-product-divider"></div>
        </div>
    )
}

export default IndividualBody;
