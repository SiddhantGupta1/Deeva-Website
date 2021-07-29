import React,{useState} from 'react'
import './Address.css'
import Logo from '../../icons/Deeva Black Logo.svg'
import Arrow from '../../icons/Arrow.svg'
import {Link} from 'react-router-dom'
import {Radio, RadioGroup, FormControlLabel, StylesProvider} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddressForm from './AddressForm'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#FFFFFF',
      outline: 'none',
      borderRadius: '16px',
      overflow: 'auto',
    },
  }));

const Address = () => {

    const userArray = [
        {
            id: 1,
            name: "Ankush",
            address: " delhi street, europe city, vizag nagaram"
        },
        {
            id: 2,
            name: "Siddhant",
            address: " delhi street, europe city, vizag nagaram"
        },
    ];
    const [user, setUser] = useState(userArray)
    const [radio, setRadio] = useState(1) 

    function toggle1(){
        const slide = document.getElementById('recently-delivered')
        slide.style.transform = 'translateX(106%)'
        const active0 = document.getElementById('recently-delivered-btn')
        active0.style.color = '#646363'
        const active1 = document.getElementById('saved-address-btn')
        active1.style.color = '#000000'

        const Rcontent = document.getElementById('recent-addresses')
        Rcontent.style.transform = 'translateX(-100%)'
        const Scontent = document.getElementById('saved-addresses')
        Scontent.style.transform = 'translateX(-100%)'
    }
    function toggle0(){
        const slide = document.getElementById('recently-delivered')
        slide.style.transform = 'translateX(0%)'
        const active0 = document.getElementById('saved-address-btn')
        active0.style.color = '#646363'
        const active1 = document.getElementById('recently-delivered-btn')
        active1.style.color = '#000000'

        const Rcontent = document.getElementById('recent-addresses')
        Rcontent.style.transform = 'translateX(0%)'
        const Scontent = document.getElementById('saved-addresses')
        Scontent.style.transform = 'translateX(0%)'
    }

    function handleRemove(id){
        const temp = user.filter((e) => e.id!==id )
        setUser(temp)
    }

    const classes = useStyles();

    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="AddressPage">
            <div className="AddressPage-path"> <a href="/">Home</a>&ensp; &gt; &ensp; Select Address</div>
            <div style={{width:"100%", display:"flex", flexDirection: "column", alignItems: "center", marginLeft:"70px"}}>
                <img src={Logo} alt="Deeva Logo" style={{width:"142px", height:"57px", mixBlendMode:"darken"}} />
                <div className="AddressPage-heading" >Where to deliver the order ?</div>
                
                <div className="Address-card">
                    <div className="Address-card-instruction">Choose an address where you want us to deliver your order, and click on ‘Go to Payment Page’ .<br/>You can also add a new address.</div>
                    <div style={{display:"flex", justifyContent:"center"}}>

                        <div className="AddressPage-toggle">
                            <button onClick={toggle0} id="recently-delivered-btn" >Recently Delivered</button>
                            <button onClick={toggle1} id="saved-address-btn" >Saved Addresses</button>
                            <div style={{display:"flex"}}>   
                                <div id="recently-delivered" ></div>
                                <div id="saved-address" ></div>
                            </div>
                            <div className="AddressPage-toggle-line"></div>
                        </div>

                    </div>

                    <div style={{display:"flex", overflow:"hidden", marginTop:"40px"}}>
                            
                        <div id="recent-addresses" >
                            {user.map((e,i) => (
                                <div key={i} style={{marginBottom: '50px'}}>
                                    <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)} style={{float:"left"}} >
                                        <StylesProvider injectFirst><FormControlLabel value={e.name} control={<Radio />} /></StylesProvider>
                                    </RadioGroup>
                                    <div style={{display:"flex"}}>
                                        <div style={{display:"flex", flexDirection:"column", width:"77.5%"}}>
                                            <div className="addresses-name">{e.name}</div>
                                            <div className="addresses-address">{e.address}</div>
                                        </div>
                                        <div style={{display:"flex", flexDirection:"column"}}>
                                            <button className="addresses-btn">Edit</button>
                                            <button className="addresses-btn" onClick={() => { handleRemove(e.id) }}>Remove address</button>
                                        </div>
                                    </div>
                                </div>
                                
                            ))}
                        </div>

                        <div id="saved-addresses" >
                            {user.map((e,i) => (
                                <div key={i} style={{marginBottom: '45px'}}>
                                    <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)} style={{float:"left"}} >
                                        <StylesProvider injectFirst><FormControlLabel value={e.name} control={<Radio />} /></StylesProvider>
                                    </RadioGroup>
                                    <div style={{display:"flex"}}>
                                        <div style={{display:"flex", flexDirection:"column", width:"77.5%"}}>
                                            <div className="addresses-name">{e.name}</div>
                                            <div className="addresses-address">{e.address}</div>
                                        </div>
                                        <div style={{display:"flex", flexDirection:"column"}}>
                                            <button className="addresses-btn">Edit</button>
                                            <button className="addresses-btn" onClick={() => { handleRemove(e.id) }}>Remove address</button>
                                        </div>
                                    </div>
                                </div>
                                
                            ))}
                            <button className="saved-address-btn" onClick={handleOpen}>Add Address &nbsp;<span>+</span></button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                className={classes.modal}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <div className={classes.paper}>
                                        <AddressForm  setFormOpen={setOpen}/>
                                    </div>
                                </Fade>
                            </Modal>
                        </div>

                    </div>

                </div>

                <div className="Address-privacy">Conditions of Use | Privacy Notice © 2021-2029, Deeva.in, Inc. and its affiliates</div>
            </div>

            <div className="AddressPagebtn">
                <Link to="/address/payments"><button><img style={{transform:"rotate(180deg)"}} src={Arrow} alt="" /></button></Link>
                <div>Go to<br/> Payment Page</div>
            </div>
        </div>
    )
}

export default Address