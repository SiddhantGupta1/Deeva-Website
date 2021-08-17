import React,{useState, useEffect, useRef} from 'react';
import './IndividualDropdowns.css';
import {Popper, ClickAwayListener, MenuList, Grow } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { StylesProvider } from "@material-ui/core/styles";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating1 from './../../icons/1Rating.svg';
import Rating2 from './../../icons/2Rating.svg';
import Rating3 from './../../icons/3Rating.svg';
import Rating4 from './../../icons/4Rating.svg';
import Rating5 from './../../icons/5Rating.svg';
import { makeStyles } from '@material-ui/core/styles';

const IndividualDropdowns = () => {

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


    const labels = {
        0: Rating1,
        0.5: Rating1,
        1: Rating1,
        1.5: Rating2,
        2: Rating2,
        2.5: Rating3,
        3: Rating3,
        3.5: Rating4,
        4: Rating4,
        4.5: Rating5,
        5: Rating5,
      };

      const useStyles = makeStyles({
        root: {
          float: 'left',
          margin: '10px',
        },
      });

      const [value, setValue] = useState(5);
      const [hover, setHover] = useState(-1);
      const classes = useStyles();
/*______________________________________________________________________________________________________________ */

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



    return (
        <div>
            <button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className="Individual-product-rate"
                    >
                        Rate the Product
                </button>
                <Popper style={{position:"relative", zIndex:"10"}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList className="Individual-product-rate-dropdown" autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <bold onClick={handleClose} style={{}}></bold>
                                <dt>Rate Your Experience</dt>
                                {value !== null && <img ml={2} src={labels[hover !== -1 ? hover : value]} alt="" />}
                                <StylesProvider injectFirst>
                                <div className={classes.root}>
                                    <Rating 
                                        precision={0.5} 
                                        size="large" 
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />} 
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                    />
                                </div>
                                </StylesProvider>
                                <button onClick={()=>{handleClose(); }} type="submit">Submit</button>
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
                    className="Individual-product-review"
                    >
                        Review the Product
                </button>
                <Popper style={{position:"relative", zIndex:"10"}} open={open1} anchorEl={anchorRef1.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        
                            <ClickAwayListener onClickAway={handleClose1}>
                            <MenuList className="Individual-product-review-dropdown" autoFocusItem={open1} id="menu-list-grow" onKeyDown={handleListKeyDown1}>
                                Hello
                            </MenuList>
                            </ClickAwayListener>
                        
                        </Grow>
                    )}
                </Popper>


        </div>
    )
}

export default IndividualDropdowns
