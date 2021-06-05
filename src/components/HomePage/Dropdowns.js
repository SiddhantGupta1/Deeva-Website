import React,{useState, useRef, useEffect}  from 'react';
import {Popper, ClickAwayListener, MenuItem, MenuList, Grow } from '@material-ui/core';
import './Dropdowns.css';
import DownArrow from './../../icons/Down Arrow.svg'
import {Link} from 'react-router-dom'

var userName = "Chandrashekhara Kumar Borjatu"
function Dropdowns(){
    
    const [open1, setOpen1] = useState(false);
    const anchorRef1 = useRef(null);

    const handleToggle1 = () => {
        setOpen1((prevOpen1) => !prevOpen1);
    };

    const handleClose1 = (event) => {
        if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
        return;
        }

        setOpen1(false);
    };

    function handleListKeyDown1(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen1(false);
        }
    }

    const prevOpen1 = useRef(open1);
    useEffect(() => {
        if (prevOpen1.current === true && open1 === false) {
        anchorRef1.current.focus();
        }

        prevOpen1.current = open1;
    }, [open1]);

//___________________________________________________________________________________________________________________
//___________________________________________________________________________________________________________________
    const [open2, setOpen2] = useState(false);
    const anchorRef2 = useRef(null);

    const handleToggle2 = () => {
        setOpen2((prevOpen2) => !prevOpen2);
    };

    const handleClose2 = (event) => {
        if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
        return;
        }

        setOpen2(false);
    };

    function handleListKeyDown2(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen2(false);
        }
    }

    const prevOpen2 = useRef(open2);
    useEffect(() => {
        if (prevOpen2.current === true && open2 === false) {
        anchorRef2.current.focus();
        }

        prevOpen2.current = open2;
    }, [open2]);


    return(
        <div style={{display:"flex", marginLeft:"2%"}}>


            <button
            ref={anchorRef1}
            aria-controls={open1 ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle1}
            className="user"
            >
                <p className="user-text">Hiii {userName.split(' ').splice(0,1)}</p>
                <img className="downArrow" src={DownArrow} alt="" />
            </button>
            <Popper open={open1} anchorEl={anchorRef1.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                
                    <ClickAwayListener onClickAway={handleClose1}>
                        <MenuList className="user-dropdown" autoFocusItem={open1} id="menu-list-grow" onKeyDown={handleListKeyDown1}>
                            <Link to="/profile"><MenuItem onClick={handleClose1} className="user-dropdown-content" >Your Profile</MenuItem></Link>
                            <Link to="/your orders"><MenuItem onClick={handleClose1} className="user-dropdown-content" >Your Orders</MenuItem></Link>
                            <Link to="/cart"><MenuItem onClick={handleClose1} className="user-dropdown-content" >Wishlist</MenuItem></Link>
                            <MenuItem onClick={handleClose1} className="user-dropdown-content" >Signout</MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                
                </Grow>
            )}
            </Popper>


            <button
            ref={anchorRef2}
            aria-controls={open2 ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle2}
            className="budget-store"
            >
                <p className="budget-store-text">Budget Store</p>
                <img className="downArrow" src={DownArrow} alt=""/>
            </button>
            <Popper open={open2} anchorEl={anchorRef2.current} role={undefined} transition disablePortal >
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                
                    <ClickAwayListener onClickAway={handleClose2}>
                    <MenuList className="budget-store-dropdown" autoFocusItem={open2} id="menu-list-grow" onKeyDown={handleListKeyDown2}>
                        <Link><MenuItem onClick={handleClose2} className="budget-store-dropdown-content" >&#8377;200-&#8377;999</MenuItem></Link>
                        <MenuItem onClick={handleClose2} className="budget-store-dropdown-content" >&#8377;1000-&#8377;2499</MenuItem>
                        <MenuItem onClick={handleClose2} className="budget-store-dropdown-content" >&#8377;2500-&#8377;4999+</MenuItem>
                        <MenuItem onClick={handleClose2} className="budget-store-dropdown-content" >Luxury</MenuItem>
                        <MenuItem onClick={handleClose2} className="budget-store-dropdown-content" >Bulk Purchase</MenuItem>
                    </MenuList>
                    </ClickAwayListener>
                
                </Grow>
            )}
            </Popper>

      </div>
    )
}

export default Dropdowns;

