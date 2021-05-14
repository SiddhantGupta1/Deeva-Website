import React, { useState } from 'react'
import './IndividualPage.css'
import Header from './../Header'
import Footer from './../Footer'
import Section from './LastSection'
import Body from './IndividualBody'
import BG from './../../icons/IndividualBG vector.svg'
import LeftBtn from './../../icons/Arrow.svg'
import LikeBtn from './../../icons/Like Btn.svg'
import FilledLikeBtn from './../../icons/Filled Like Btn.svg'
import CartBtn from './../../icons/Add to Hanger.svg'
import product1 from './../../icons/Product1.svg'
import product2 from './../../icons/Product2.svg'
import { Link } from 'react-router-dom'

var likeNumber = 1;
var slideNumber = -1;
function Individual() {

    const [pics, setPics] = useState([product1,product2, product1,product2,product1,product2]);
    const [current, setCurrent] = useState(0)
    const [like, setLike] = useState(LikeBtn)
    const [disable, setDisable] = useState(true)
    const len = pics.length
    

    const nextSlide = () =>{
        setCurrent(current === len-1 ? 0 : current + 1 )
        setPics([...pics, pics[current]])
        const move = document.getElementById("product-img")
        move.style.transform = `translateX(${-302*(current+1)}px)`
        move.style.transition = "1.5s"

        slideNumber=current;
        setDisable(false)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? len-1 : current - 1)
        current!==1 ? setDisable(false) : setDisable(true)
        
        const move = document.getElementById("product-img")
        move.style.transform = `translateX(${-302*(slideNumber)}px)`
        move.style.transition = "1.5s"

        slideNumber--;
    }
    

    if(!Array.isArray(pics) || len <= 0){
        return null;
    }

    const LikeButton = () =>{
        likeNumber++;
        if(likeNumber%2==0) 
            setLike(FilledLikeBtn)
        else
            setLike(LikeBtn)
        console.log(likeNumber)
    }

    return(
        <div className="Individual">
            <img className="productBG" src={BG} alt=""/>
            <div className="product-images">

                <button disabled={disable} onClick={prevSlide} id="product-left-btn">
                    <img src={LeftBtn} alt=""/>
                </button>
                
                <div className="product-img">
                    <div id="product-img">
                        {pics.map((pics, index) =>(
                            <div id={"slide"+index} className={index === current+2 ? 'slide active' : 'slide'} key={index} >
                                <img id={pics} className="product-image" src={pics} alt=""/>
                                
                            </div>
                        ))}
                    </div>
                    
                </div>
                <button onClick={nextSlide} id="product-right-btn">
                    <img style={{transform:"matrix(-1, 0, 0, 1, 0, 0)"}} src={LeftBtn} alt=""/>
                </button>
                
                <button onClick={LikeButton} id="product-like-btn">
                    <img className="product-like-btn" src={like} alt=""/>
                </button>

                <Link 
                    to={{
                        pathname: '/ethnic',
                        query: {id: 'hello', ids: 'HELLO'}
                    }} 
                    id="buy-now-btn"
                >
                    Buy Now
                </Link>

                <button id="add-to-cart-btn">
                    <div style={{marginRight:"10px"}}>Add to Hanger</div>
                    <img style={{margin:"-5px 0 0 0"}} src={CartBtn} alt=""/>
                </button>

            </div>
            <Body />
            <Section />
            <div style={{float:"left", marginBottom:"60px", width:"100%", height:"10px"}}></div>
            <Footer />
            <Header />
        </div>
    )
}

export default Individual;