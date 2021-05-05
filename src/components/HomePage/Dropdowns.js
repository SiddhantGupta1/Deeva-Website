import React,{useState, useRef, useEffect}  from 'react';
import {Popper, ClickAwayListener, Paper, MenuItem, MenuList, Grow } from '@material-ui/core';
import './Dropdowns.css';
import DownArrow from './../../icons/Down Arrow.svg'

function Dropdowns(){
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

//___________________________________________________________________________________________________________________
//___________________________________________________________________________________________________________________
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
        <div style={{display:"flex", WebkitFlexDirection:"row"}}>
            <button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            className="user"
            >
                <p className="user-text">Hiii Ankush</p>
                <img className="downArrow" src={DownArrow} />
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


            <button
            ref={anchorRef1}
            aria-controls={open1 ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle1}
            className="budget-store"
            >
                <p className="budget-store-text">Budget Store</p>
                <img className="downArrow" src={DownArrow} />
            </button>
            <Popper open={open1} anchorEl={anchorRef1.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                
                    <ClickAwayListener onClickAway={handleClose1}>
                    <MenuList className="budget-store-dropdown" autoFocusItem={open1} id="menu-list-grow" onKeyDown={handleListKeyDown1}>
                        <MenuItem onClick={handleClose1}>Profile</MenuItem>
                        <MenuItem onClick={handleClose1}>My account</MenuItem>
                        <MenuItem onClick={handleClose1}>Logout</MenuItem>
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
            className="content"
            >
                <p className="content-text">Content</p>
                <img className="downArrow" src={DownArrow} />
            </button>
            <Popper open={open2} anchorEl={anchorRef2.current} role={undefined} transition disablePortal >
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                
                    <ClickAwayListener onClickAway={handleClose2}>
                    <MenuList className="content-dropdown" autoFocusItem={open2} id="menu-list-grow" onKeyDown={handleListKeyDown2}>
                        <MenuItem onClick={handleClose2}>Profile</MenuItem>
                        <MenuItem onClick={handleClose2}>My account</MenuItem>
                        <MenuItem onClick={handleClose2}>Logout</MenuItem>
                    </MenuList>
                    </ClickAwayListener>
                
                </Grow>
            )}
            </Popper>

      </div>
    )
}

export default Dropdowns;

