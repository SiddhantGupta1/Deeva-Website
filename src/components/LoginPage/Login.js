import React from 'react'
import './Login.css'

function Login(){

    return(

        <div class = "main-bg">

            <div class="Logo-position">
                <div class = "bg">
                    
                </div>
            </div>

            <div class = "above-cred">
                U just let in, We’ll make sure u stay in there! 😌
            </div>

            <div class="input-config">
                
                <input type="text" class="input-email" placeholder="Enter Email Address"/>
                <input type="text" class="input-paswd" placeholder="Enter Password"/>
                
                 <div class="forget"><a href>forgot something?</a></div>

                 <button class="login-btn"> Login </button>


            </div>    

            <div class = "below-cred">
            Don’t have time to fill the details? Aah! That’s okay, just login through socials and Shoppp!😉😌
            </div>

            <button class="google-btn"> G </button>
            <button class="fb-btn"> FB </button>

            


        </div>
    )
}

export default Login;
