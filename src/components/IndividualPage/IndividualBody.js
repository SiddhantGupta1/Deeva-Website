import React,{useState, useEffect, useRef} from 'react'
import './IndividualBody.css'
import Rating from '@material-ui/lab/Rating';
import { StylesProvider } from "@material-ui/core/styles";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Demo from './../../icons/Individual Demo.svg'
import Star from './../../icons/Star.svg'
import Assured from './../../icons/Deeva Assured.svg'
import Return from './../../icons/30 Days Return.svg'
import DownArrow from './../../icons/Down Arrow.svg'
import {Popper, ClickAwayListener, MenuItem, MenuList, Grow } from '@material-ui/core';


const IndividualBody = ({about , product, dprice, user}) => {
    
    const reviews = [
        {
            name: "Siddhant Gupta",
            rating: 3.5,
            description: "Good floral design with beautiful colour combination and attractive colour which looks great on many occasions and functions at home. The material is soft and comfortable.",

        },
        {
            name: "Siddhant Gupta",
            rating: 3.5,
            description: "Good floral design with beautiful colour combination and attractive colour which looks great on many occasions and functions at home. The material is soft and comfortable.",

        },
    ]


    
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth()+1;
    let day = newDate.getDay();
    console.log(day,date,month)

{/*________________________________________DROPDOWN________________________________________________________________ */}
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

{/*_____________________________________________________________________________________________________________________________________ */}


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


                <button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    id="Individual-product-delivery-to"
                    >
                            { user.address==[] ? <span>Add Address</span> : <a><bold>{user.userName} - </bold>{user.address}</a> }
                            { user.address==[] ? <img style={{display:"none"}} src={DownArrow} alt=""/> : <img src={DownArrow} alt=""/>}
                </button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList className="Individual-product-delivery-dropdown" autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                { user.address!=[] ? user.address.map(e =>( <MenuItem><option>{e}</option></MenuItem> )) : <a>Add Address here</a>}
                            </MenuList>
                            </ClickAwayListener>
                        
                        </Grow>
                    )}
                </Popper>


                <div className="Individual-product-rate-review">Rate & Review the Product</div>
                <button className="Individual-product-rate">Rate the Product</button>
                <button className="Individual-product-review">Review the Product?</button>

                <div className="Individual-product-experiences-heading">Read all the Customer Experiences with the Product</div>
                <div className="Individual-product-experiences">
                    <bold>Top Reviews</bold>
                    {reviews.map((review) => (
                        <div id="Individual-product-experiences">
                            <div></div>
                            <a>{review.name}</a>
                            <StylesProvider injectFirst>
                                <Rating 
                                    defaultValue={review.rating}
                                    precision={0.1} 
                                    size="small" 
                                    readOnly 
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />} 
                                />
                            </StylesProvider>
                            <p>{review.description}</p>
                        </div>
                    ))}
                    
                </div>

            </div>

            <div id="Individual-product-divider"></div>
        </div>
    )
}

export default IndividualBody;

{/*
            <button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            id="Individual-product-delivery-to"
            >
                    { user.address!=[] ? <span>Add Address</span> : <a><bold>{user.userName} - </bold>{user.address}</a> }
                    { user.address==[] ? <img style={{display:"none"}} src={DownArrow} alt=""/> : <img src={DownArrow} alt=""/>}
            </button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList className="user-dropdown" autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                    </ClickAwayListener>
                
                </Grow>
            )}
            </Popper>
*/}








{/*

<div id="Individual-product-delivery-to">
                    { user.address!=[] ? <span>Add Address</span> : <a><bold>{user.userName} - </bold>{user.address}</a> }
                    { user.address==[] ? <img style={{display:"none"}} src={DownArrow} alt=""/> : <img src={DownArrow} alt=""/>}
                </div>
*/}