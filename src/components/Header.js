import React,{useState, useRef, useEffect} from 'react';
import './Header.css'
import DeevaLogo from './../icons/deeva purple 1.svg'
import Menu from './../icons/Union.svg'
import Search from './../icons/Search.svg'
import Mic from './../icons/Mic.svg'
import Cart from './../icons/Hanger.svg'
import MenuFrame from './../icons/Frame.svg'
import Dropdowns from './HomePage/Dropdowns'
import {Drawer, List, ListItem} from '@material-ui/core';
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'

function Header() {

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  const link1 = [
    {
      name: "Home",
      links: "home"
    },
    {
      name: "Categories",
      links: "ethnic"
    },
    {
      name: "Wardrobe",
      links: "trending"
    },

  ];

  const link2 = [
    {
      name: "Your Orders",
      links: "party"
    },
    {
      name: "My Hanger",
      links: "cart"
    },
    {
      name: "Profile",
      links: "puja"
    },

  ];

  const link3 = [
    {
      name: "Login",
      links: "login"
    },
    {
      name: "Register",
      links: "cart"
    },
    {
      name: "Settings",
      links: "puja"
    },
    {
      name: "Help and Contact",
      links: "contact us"
    },
    {
      name: "Sign Out",
      links: "puja"
    },

  ];


  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{backgroundImage:{MenuFrame}, height:"100%", width:"320px" }}
    >
      <div className="menu-text">
        Hello Ankush
      </div>
      <List>
        {link1.map((text, index) => (
          <ListItem style={{padding:"0 16px"}} button key={text.name}>
            <Link className="menu-text-links" to={`/${text.links}`}> {text.name} </Link>
          </ListItem>
        ))}
      </List>
      <List>
        {link2.map((text, index) => (
          <ListItem style={{padding:"0 16px"}} button key={text.name}>
            <Link className="menu-text-links" to={`/${text.links}`}>{text.name} </Link>
          </ListItem>
        ))}
      </List>
      <List>
        {link3.map((text, index) => (
          <ListItem style={{padding:"0 16px"}} button key={text.name}>
            <Link className="menu-text-links" to={`/${text.links}`}> {text.name} </Link>
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  return (
      <header>
        <StylesProvider injectFirst>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <button onClick={toggleDrawer(anchor, true)} className="menu"> 
                <img src={Menu} /> 
              </button>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </StylesProvider>

        <img className="deevaLogo" src={DeevaLogo}/>
        <div className="search-bar">
          <img className="search" src={Search}/>
          <input className="searching" type="text" placeholder="Search" />
        </div>
        <button className="voice-search">
            <img src={Mic} />
        </button>
        
        <Dropdowns />
            
        <Link to='/cart' className="cart">
            <img src={Cart} />
            <p className="cart-items">2</p>
        </Link>

      </header>
  );
}

export default Header;
