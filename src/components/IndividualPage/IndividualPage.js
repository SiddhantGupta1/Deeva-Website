import React, { useState } from 'react'
import './IndividualPage.css'
import Header from '../Header'
import Footer from '../Footer'
import Section from './LastSection'
import Body from './IndividualBody'
import BG from '../../icons/IndividualBG vector.svg'
import LeftBtn from '../../icons/Arrow.svg'
import LikeBtn from '../../icons/Like Btn.svg'
import FilledLikeBtn from '../../icons/Filled Like Btn.svg'
import CartBtn from '../../icons/Add to Hanger.svg'
import product1 from '../../icons/Product1.svg'
import product2 from '../../icons/Product2.svg'
import { Link} from 'react-router-dom'

var likeNumber = 1;
var slideNumber = -1;
function Individual(props) {

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

    const user = {
        userName: "Ankush",
        address: ["delhi street, europe city, vizag nagaram ", "bombay street, europe city, vizag nagaram "]
    }

    const [pics, setPics] = useState([product1,product2, product1,product2,product1,product2]);
    const [current, setCurrent] = useState(0)
    const [like, setLike] = useState(LikeBtn)
    const [disable, setDisable] = useState(true)

    const [cart, setCart] = useState({});

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
        if(likeNumber%2===0) 
            setLike(FilledLikeBtn)
        else
            setLike(LikeBtn)
    }

    let array = [];

    const handleAddToCart = (name) => {
        setCart(name)
        array.push(cart)
        console.log(array)
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

                <Link  to ={`/demo?name=${product?.name}&price=${dprice}`}
                    // to={{
                    //     pathname: `/demo`,
                    //     product , dprice, user
                    // }}
                    
                >
                    <div id="buy-now-btn">
                    Buy Now
                    </div>
                </Link>

                <button id="add-to-cart-btn" onClick={ () => {handleAddToCart(props.match.params.name) }}>
                    <div style={{marginRight:"10px"}}>Add to Hanger</div>
                    <img style={{marginTop:"-5px"}} src={CartBtn} alt=""/>
                </button>

            </div>
            <Body pro = {props.match.params.name} product = {product} about={about} dprice = {dprice} user={user}/>
            <Section />
            <div style={{float:"left", marginBottom:"60px", width:"100%", height:"10px"}}></div>
            <Footer />
            <Header />
        </div>
    )
}

export default Individual;