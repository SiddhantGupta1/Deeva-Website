import React,{useState,useRef,useEffect} from 'react'
import './AddressForm.css'
import DownArrow from './../../icons/Down Arrow.svg'
import Cross from './../../icons/Cross.svg'
import {Popper, ClickAwayListener, MenuItem, MenuList, Grow } from '@material-ui/core';

const AddressForm = ({setFormOpen}) => {

    const states = [
        {
          "abbreviation": "AN",
          "name": "Andaman & Nicobar Islands"
        },
        {
          "abbreviation": "AP",
          "name": "Andhra Pradesh"
        },
        {
          "abbreviation": "AR",
          "name": "Arunachal Pradesh"
        },
        {
          "abbreviation": "AS",
          "name": "Assam"
        },
        {
          "abbreviation": "BR",
          "name": "Bihar"
        },
        {
          "abbreviation": "CG",
          "name": "Chandigarh"
        },
        {
          "abbreviation": "CH",
          "name": "Chhattisgarh"
        },
        {
          "abbreviation": "DH",
          "name": "Dadra & Nagar Haveli"
        },
        {
          "abbreviation": "DD",
          "name": "Daman and Diu"
        },
        {
          "abbreviation": "DL",
          "name": "Delhi"
        },
        {
          "abbreviation": "GA",
          "name": "Goa"
        },
        {
          "abbreviation": "GJ",
          "name": "Gujarat"
        },
        {
          "abbreviation": "HR",
          "name": "Haryana"
        },
        {
          "abbreviation": "HP",
          "name": "Himachal Pradesh"
        },
        {
          "abbreviation": "JK",
          "name": "Jammu and Kashmir"
        },
        {
          "abbreviation": "JH",
          "name": "Jharkhand"
        },
        {
          "abbreviation": "KA",
          "name": "Karnataka"
        },
        {
          "abbreviation": "KL",
          "name": "Kerala"
        },
        {
          "abbreviation": "LD",
          "name": "Lakshadweep"
        },
        {
          "abbreviation": "MP",
          "name": "Madhya Pradesh"
        },
        {
          "abbreviation": "MH",
          "name": "Maharashtra"
        },
        {
          "abbreviation": "MN",
          "name": "Manipur"
        },
        {
          "abbreviation": "ML",
          "name": "Meghalaya"
        },
        {
          "abbreviation": "MZ",
          "name": "Mizoram"
        },
        {
          "abbreviation": "NL",
          "name": "Nagaland"
        },
        {
          "abbreviation": "OR",
          "name": "Odisha"
        },
        {
          "abbreviation": "PY",
          "name": "Puducherry"
        },
        {
          "abbreviation": "PB",
          "name": "Punjab"
        },
        {
          "abbreviation": "RJ",
          "name": "Rajasthan"
        },
        {
          "abbreviation": "SK",
          "name": "Sikkim"
        },
        {
          "abbreviation": "TN",
          "name": "Tamil Nadu"
        },
        {
          "abbreviation": "TS",
          "name": "Telangana"
        },
        {
          "abbreviation": "TR",
          "name": "Tripura"
        },
        {
          "abbreviation": "UP",
          "name": "Uttar Pradesh"
        },
        {
          "abbreviation": "UK",
          "name": "Uttarakhand"
        },
        {
          "abbreviation": "WB",
          "name": "West Bengal"
        }
    ]

    const [input, setInput] = useState({
      name: "",
      number: "",
      address: "",
      area: "",
      landmark: "",
      city: "",
      timing: "",
      state: "Himachal Pradesh"
    })

    const handleChange = e => {
        const {name , value} = e.target
        setInput(prev => ({
          ...prev,
          [name]: value
        }))
    }

    const handleTiming = (e) => {
      setInput(prev =>({
          ...prev,
          timing: e
      }))
      const timing1 = document.getElementById("timing1")
      const timing2 = document.getElementById("timing2")
      if(e==="anytime")
      {
          timing2.style.background = "#F5F0E7"
          timing1.style.background = "#FFD706"
      }
      else if(e==="work")
      {
          timing1.style.background = "#F5F0E7"
          timing2.style.background = "#FFD706"
      }
    }

    const handleAddbtn = () => {
       
      console.log(input)
    }

//_____________________________________DROPDOWN_________________________________________________________________
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
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

//_____________________________________________________________________________________________________________
    
    const handleFormClose = () => {
        setFormOpen(false)
    }




    return (
        <div className="AddressForm">
          <img id="closeAddressForm" src={Cross} alt="Close" onClick={handleFormClose} />
            <h1>Add Address</h1>
            <div className="form-name" >
                <p>Full Name</p>
                <input type="text" placeholder="Enter your Full Name" value={input.name} name="name" onChange={handleChange} />
            </div>
            <div className="form-phone" >
                <p>Mobile Number</p>
                <input type="text" maxLength="10" placeholder="Enter your mobile number" value={input.number} name="number" onChange={handleChange} />
            </div>
            <div className="form-address" >
                <p>Flat, Building no.</p>
                <input type="text" value={input.address} name="address" onChange={handleChange} />
            </div>
            <div className="form-area" >
                <p>Area</p>
                <input type="text" value={input.area} name="area" onChange={handleChange} />
            </div>
            <div className="form-landmark" >
                <p>Landmark</p>
                <input type="text" value={input.landmark} name="landmark" onChange={handleChange} />
            </div>
            <div className="form-city" >
                <p>City</p>
                <input type="text" value={input.city} name="city" onChange={handleChange} />
            </div>
            <div className="form-state" >
                <p>State</p>
                <button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    id="form-state"
                    >
                        { input.state} <img src={DownArrow} alt=""/>
                </button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList className="form-state-dropdown" autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                { states.map(e =>( <MenuItem onClick={ ()=> {setInput(prev=>({...prev, state: e.name}) ); handleClose()}} style={{fontSize:"13px"}} >{e.name}</MenuItem> ))}
                            </MenuList>
                            </ClickAwayListener>
                        
                        </Grow>
                    )}
                </Popper>
            </div>
            <div className="form-timing" >
                <p>Delivery timing preferences</p>
                <button id="timing1" onClick={()=>{handleTiming('anytime')}} >Anytime (8am - 8pm)</button>
                <button id="timing2" onClick={()=>{handleTiming('work')}} >Work (10am - 6pm)</button>
            </div>
            <button disabled={!input.name || !input.number || !input.address || !input.area || !input.landmark || !input.city || !input.state || !input.timing} className="form-add-btn" id="form-add-btn" onClick={()=> {handleAddbtn(); handleFormClose()}} >Add the Address</button>
        </div>
    )
}

export default AddressForm;