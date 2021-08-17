import React from 'react'
import './Login.css'
import Logo from '../../icons/Golden Logo.svg'

const Login = () => {

    
    const loginbutton = () => {
        const container = document.getElementById('login-container');
        container.classList.add('right-panel-active');

    }
    const signinbutton = () => {
        const container = document.getElementById('login-container');
        container.classList.remove('right-panel-active');

    }
    
    return (
        <div className="login-page">
            <div className="login-container" id="login-container">
                <div className="form-container sign-up-container">
                    <form className="login-form">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google"></i></a>
                            <a href="#" className="social"><i className="fab fa-twitter"></i></a>
                        </div>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />     
                        <div className="login-button">
                            <button id="login-btn-s">Sign Up</button>
                            <button id="login-btn1" type="reset">Reset</button>
                        </div>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className="login-form">
                        <img src={Logo} alt="" />
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google"></i></a>
                            <a href="#" className="social"><i className="fab fa-twitter"></i></a>
                        </div>
                        
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        
                        <a href="#" className="forgot-password">Forgot your password?</a>
                        <button id="login-btn-l" className="login-btn2">Login</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="login-overlay">
                        <div className="overlay-panel overlay-left" >
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={signinbutton} className="ghost" id="signIn">Login</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>You just let in.<br /><br />
                            We'll make sure you stay in there!</p>
                            <button onClick={loginbutton} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
