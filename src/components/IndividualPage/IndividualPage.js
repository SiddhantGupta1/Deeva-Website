import React, { useState } from 'react'
import './IndividualPage.css'
import Header from './../Header'
import Footer from './../Footer'
import Section from './LastSection'
import BG from './../../icons/IndividualBG vector.svg'
import LeftBtn from './../../icons/Arrow.svg'
import LikeBtn from './../../icons/Like Btn.svg'
import FilledLikeBtn from './../../icons/Filled Like Btn.svg'
import CartBtn from './../../icons/Add to Hanger.svg'
import product1 from './../../icons/Product1.svg'
import product2 from './../../icons/Product2.svg'

function Individual() {

    const pics = [product2,CartBtn, product1, LikeBtn, BG,LeftBtn];
    const [current, setCurrent] = useState(0)
    const [like, setLike] = useState(LikeBtn)
    const len = pics.length

    const nextSlide = () =>{
        setCurrent(current === len-1 ? 0 : current + 1 )
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? len-1 : current - 1)
    }
    

    if(!Array.isArray(pics) || len <= 0){
        return null;
    }

    const LikeButton = () =>{
        setLike(FilledLikeBtn);
    }

    return(
        <div className="Individual">
            <img className="productBG" src={BG}/>
            <div className="product-images">

                <button onClick={prevSlide} id="product-left-btn">
                    <img src={LeftBtn} />
                </button>
                
                <div className="product-img">
                    {pics.map((pics, index) =>(
                        <div className={index === current ? 'slide active' : 'slide'} key={index} >
                            
                            {index === current && (
                                <img id={pics} className="product-image" src={pics}/>
                            )}

                        </div>
                    ))}
                        
                    
                </div>
                <button onClick={nextSlide} id="product-right-btn">
                    <img style={{transform:"matrix(-1, 0, 0, 1, 0, 0)"}} src={LeftBtn} />
                </button>
                
                <button onClick={LikeButton} id="product-like-btn">
                    <img className="product-like-btn" src={like} />
                </button>

                <button id="buy-now-btn">Buy Now</button>

                <button id="add-to-cart-btn">
                    <div style={{marginRight:"10px"}}>Add to Hanger</div>
                    <img style={{margin:"-5px 0 0 0"}} src={CartBtn} />
                </button>

            </div>
            <Section />
            <Footer />
            <Header />
        </div>
    )
}

export default Individual;

{/* 

                <button id="product-left-btn">
                    <img className="product-left-btn" src={LeftBtn} />
                </button>




                <button id="product-right-btn">
                    <img className="product-right-btn" src={LeftBtn} />
                </button>
                
                <button id="product-like-btn">
                    <img className="product-like-btn" src={LikeBtn} />
                </button>

                <button id="add-to-cart-btn">
                    <div className="add-to-hanger">Add to Hanger</div>
                    <img className="add-to-cart-btn" src={CartBtn} />
                </button>
                
                <button id="buy-now-btn">Buy Now</button>
*/}


{/*

        const pic = document.getElementById(pics[current])
        pic.style.transform = `translateX(${-350}px) scale(1.2)`
        if(current>=1){
            const pi = document.getElementById(pics[current-1])
            pi.style.transform = "translateX(0) scale(1)"
        }
        pic.addEventListener('transitionend', () =>{
            pic.style.transition = 'none'
        })

*/}