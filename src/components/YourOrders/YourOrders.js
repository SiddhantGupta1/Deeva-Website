import React from 'react'
import  './YourOrders.css'
import Header from '../Header'
import pic from '../../icons/Trend Image.svg'



function YourOrders() {
    return (
        <div class = "main-bg">

                <a href ="#" class ="nav"> Home</a>
                <a href ="#" class ="nav"> Account</a>
                <a href ="#" class ="nav"> Orders</a>

            <div class = "headline">Your orders</div>

            <div class = "order"> Orders</div>
            <div class = "cancelled"> Cancelled Orders </div>
            <div class = "divider"> </div>
            <div class = "Dropdown"> 
                <select name="time">
                    <option>Overlast 1 month</option>
                    <option>Overlast 3 months</option>
                    <option>Overlast 6 months</option>
                    <option>Overlast 12 months</option>
                </select>
            </div>

            <div class = "box"> 
                <div class = "text">Neeva</div>
                <div class = "text-below">Neeva Yellow Taant Fashion</div>

                <div> <img class = "pic" src={pic}/> </div>

                <div class = "ordered-on">Ordered on 29th May 2021 </div>
                <div class = "arrow1"> </div>
                <div class = "delivery-by"> Delivery by 1st June 2021</div>
                <div class = "arrow2"> </div>
                <div class = "return-policy"> Return Policy Active till 1st July 2021 </div>

                <a href ="#"> <div class = "review"> ⭐Rate and Review your Purchase</div></a>

                <div class = "price">₹ 999</div>
                <div class = "offer">
                    <strike>₹1550  </strike>
                      (35% Off)
                 </div>

                <div class = "track-button">
                    <button><b>Track Product</b></button>
                </div>

                <div class = "cancel-order">
                    <button><b>Cancel Order</b></button>
                </div>

            </div>

            <div class = "box"> 
                <div class = "text">Neeva</div>
                <div class = "text-below">Neeva Yellow Taant Fashion</div>

                <div> <img class = "pic" src = {pic}/> </div>

                <div class = "ordered-on">Ordered on 29th May 2021 </div>
                <div class = "arrow1"> </div>
                <div class = "delivery-by"> Delivery by 1st June 2021</div>
                <div class = "arrow2"> </div>
                <div class = "return-policy"> Return Policy Active till 1st July 2021 </div>

                <a href ="#"> <div class = "review"> ⭐Rate and Review your Purchase</div></a>

                <div class = "price">₹ 999</div>
                <div class = "offer">
                    <strike>₹1550  </strike>
                      (35% Off)
                 </div>

                <div class = "track-button">
                    <button><b>Track Product</b></button>
                </div>

                <div class = "cancel-order">
                    <button><b>Cancel Order</b></button>
                </div>

            </div>

            <div class = "box"> 
                <div class = "text">Neeva</div>
                <div class = "text-below">Neeva Yellow Taant Fashion</div>

                <div> <img class = "pic" src = {pic}/> </div>

                <div class = "ordered-on">Ordered on 29th May 2021 </div>
                <div class = "arrow1"> </div>
                <div class = "delivery-by"> Delivery by 1st June 2021</div>
                <div class = "arrow2"> </div>
                <div class = "return-policy"> Return Policy Active till 1st July 2021 </div>

                <a href ="#"> <div class = "review"> ⭐Rate and Review your Purchase</div></a>

                <div class = "price">₹ 999</div>
                <div class = "offer">
                    <strike>₹1550  </strike>
                      (35% Off)
                 </div>

                <div class = "track-button">
                    <button><b>Track Product</b></button>
                </div>

                <div class = "cancel-order">
                    <button><b>Cancel Order</b></button>
                </div>

            </div>


            <Header/>

         
        </div>
    )
}

export default YourOrders;