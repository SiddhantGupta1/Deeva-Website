import React from 'react';
import './Wardrobe.css'
import Trending from '../../icons/Trending.svg'
import TrendingBG from '../../icons/TrendingBG.svg'
import { Link } from 'react-router-dom'

function wardrobe(){

    return(
      <div className="wardrobe">
            <div className="wardrobe-heading">Wardrobe</div>
               <div className="wardrobe-rope"></div>

                  <Link to='/wardrobe/Trending' className="trending-frame">
                     <img className="trendingBG" src={TrendingBG} alt=""/>
                     <img className="trending-img" src={Trending} alt=""/>
                     <p className="trending">Trending</p>
                     <p className="trending-text">Around 350 global On - Trending works.</p>
                  </Link>
                  <Link to='/wardrobe/Ethnic' className="ethnic-frame">
                     <img className="ethnicBG" src={TrendingBG} alt=""/>
                     <img className="ethnic-img" src={Trending} alt=""/>
                     <p className="ethnic">Ethnic</p>
                     <p className="ethnic-text">Around 350 global On - Trending works.</p>
                  </Link>
                  <Link to='/wardrobe/Party' className="party-frame">
                     <img className="partyBG" src={TrendingBG} alt=""/>
                     <img className="party-img" src={Trending} alt=""/>
                     <p className="party">Party</p>
                     <p className="party-text">Around 350 global On - Trending works.</p>
                  </Link>
                  <Link to='/wardrobe/Puja' className="puja-frame">
                     <img className="pujaBG" src={TrendingBG} alt=""/>
                     <img className="puja-img" src={Trending} alt=""/>
                     <p className="puja">Puja</p>
                     <p className="puja-text">Around 350 global On - Trending works.</p>
                  </Link>
                  
      </div>

    )
}

export default wardrobe;