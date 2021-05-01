import React from 'react';
import './../styles/Wardrobe.css'
import Trending from './../icons/Trending.svg'
import TrendingBG from './../icons/TrendingBG.svg'

function Wardrobe(){


    return(
      <div className="wardrobe">
            <div className="wardrobe-heading">Wardrobe</div>
               <div className="wardrobe-rope"></div>
               <div>

                  <div className="trending-frame">
                     <img className="trendingBG" src={TrendingBG}/>
                     <img className="trending-img" src={Trending}/>
                     <p className="trending">Trending</p>
                     <p className="trending-text">Around 350 global On - Trending works.</p>
                  </div>
                  <div className="ethnic-frame">
                     <img className="ethnicBG" src={TrendingBG}/>
                     <img className="ethnic-img" src={Trending}/>
                     <p className="ethnic">Trending</p>
                     <p className="ethnic-text">Around 350 global On - Trending works.</p>
                  </div>
                  <div className="party-frame">
                     <img className="partyBG" src={TrendingBG}/>
                     <img className="party-img" src={Trending}/>
                     <p className="party">Trending</p>
                     <p className="party-text">Around 350 global On - Trending works.</p>
                  </div>
                  <div className="puja-frame">
                     <img className="pujaBG" src={TrendingBG}/>
                     <img className="puja-img" src={Trending}/>
                     <p className="puja">Trending</p>
                     <p className="puja-text">Around 350 global On - Trending works.</p>
                  </div>


               </div>
      </div>

    )
}

export default Wardrobe;