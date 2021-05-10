import React from 'react'
import './../styles/Register.css'

function Register(){

    return(
       
        <div class = "main-bg">

            <div class="Logo-position">
                <div class = "bg">
                    
                </div>
            </div>

            <div class = "above-cred">
               <p> U just let in,</p><p> We’ll make sure u stay in there! 😌</p>
            </div>

            <div class="input-config">
                
                <input type="text" class="input-name" placeholder="Enter name"/>
                <input type="text" class="input-email" placeholder="Enter Email Address"/>
                <input type="text" class="input-paswd" placeholder="Enter Password"/>
                
                 <div class="forget"><a href>forgot something?</a></div>

                 <button class="login-btn"> Login </button>


            </div>    

            <button class="convert-btn"> Login </button>

            <div class = "below-cred">
            Don’t have time to fill the details? Aah! That’s okay, just login through socials and Shoppp!😉😌
            </div>

            <button class="google-btn"> <img src = "Frame232.svg"></img> </button>
            <button class="fb-btn"><img src = "./styles/fb.png"></img> </button>

            

        </div>
        )
    }
    
        export default Register;
        