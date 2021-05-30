import React from 'react'
import  './YourOrders.css'
import Header from '../Header'
import pic from '../../icons/Trend Image.svg'

function YourOrders() {


    return (
        <div className="YourOrders">
            <div className="YourOrders-path">Home&ensp; &gt; &ensp; Your Orders</div>


            <div className="YourOrders-heading">Your Orders</div>
    
            <div className="Dropdown"> 
                <select name="time">
                    <option>Overlast 1 month</option>
                    <option>Overlast 3 months</option>
                    <option>Overlast 6 months</option>
                    <option>Overlast 12 months</option>
                </select>
            </div>

            <div className="box"> 
                <div className="text">Neeva</div>
                <div className="text-below">Neeva Yellow Taant Fashion</div>

                <div> <img className="pic" src={pic} alt=""/> </div>

                <div className="ordered-on">Ordered on 29th May 2021 </div>
                <div className="arrow1"> </div>
                <div className="delivery-by"> Delivery by 1st June 2021</div>
                <div className="arrow2"> </div>
                <div className="return-policy"> Return Policy Active till 1st July 2021 </div>

                <a href ="#"> <div className="review"> ⭐Rate and Review your Purchase</div></a>

                <div className="price">₹ 999</div>
                <div className="offer">
                    <strike>₹1550  </strike>
                      (35% Off)
                 </div>

                <div className="track-button">
                    <button><b>Track Product</b></button>
                </div>

                <div className="cancel-order">
                    <button><b>Cancel Order</b></button>
                </div>

            </div>

            <div className="box"> 
                <div className="text">Neeva</div>
                <div className="text-below">Neeva Yellow Taant Fashion</div>

                <div> <img className="pic" src = {pic} alt=""/> </div>

                <div className="ordered-on">Ordered on 29th May 2021 </div>
                <div className="arrow1"> </div>
                <div className="delivery-by"> Delivery by 1st June 2021</div>
                <div className="arrow2"> </div>
                <div className="return-policy"> Return Policy Active till 1st July 2021 </div>

                <a href ="#"> <div className="review"> ⭐Rate and Review your Purchase</div></a>

                <div className="price">₹ 999</div>
                <div className="offer">
                    <strike>₹1550  </strike>
                      (35% Off)
                 </div>

                <div className="track-button">
                    <button><b>Track Product</b></button>
                </div>

                <div className="cancel-order">
                    <button><b>Cancel Order</b></button>
                </div>

            </div>

            <div className="box"> 
                <div className="text">Neeva</div>
                <div className="text-below">Neeva Yellow Taant Fashion</div>

                <div> <img className="pic" src = {pic} alt=""/> </div>

                <div className="ordered-on">Ordered on 29th May 2021 </div>
                <div className="arrow1"> </div>
                <div className="delivery-by"> Delivery by 1st June 2021</div>
                <div className="arrow2"> </div>
                <div className="return-policy"> Return Policy Active till 1st July 2021 </div>

                <div className="review"> ⭐Rate and Review your Purchase</div>

                <div className="price">₹ 999</div>
                <div className="offer">
                    <strike>₹1550  </strike>
                      (35% Off)
                 </div>

                <div className="track-button">
                    <button><b>Track Product</b></button>
                </div>

                <div className="cancel-order">
                    <button><b>Cancel Order</b></button>
                </div>

            </div>


            <Header/>

         
        </div>
    )
}

export default YourOrders;