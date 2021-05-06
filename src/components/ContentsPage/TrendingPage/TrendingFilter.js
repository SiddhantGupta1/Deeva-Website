import React from 'react'
import './TrendingFilter.css'

function  TrendingFilter(){

    function toggle1(){
        const slide = document.getElementById('filter');
        slide.style.transform = 'translateX(100%)';

        const filter = document.getElementById('filter-content');
        const sort = document.getElementById('sort-content');
        filter.style.transform = 'translateX(-100%)';
        sort.style.transform = 'translateX(-100%)';
    }
    function toggle0(){
        const slide = document.getElementById('filter');
        slide.style.transform = 'translateX(0%)';

        const sort = document.getElementById('sort-content');
        const filter = document.getElementById('filter-content');
        sort.style.transform = 'translateX(0%)';
        filter.style.transform = 'translateX(0%)';
    }

    return  (
        <div className="TrendingFilter">

             <div className="FilterSort">
                <div  id="filter" className="filter"></div>
                <div id="sort" className="sort"></div>
                <button onClick={toggle0} className="filter-btn">Filter</button>
                <button onClick={toggle1} className="sort-btn">Sort</button>
             </div>

             <div style={{display:"flex",overflow:"hidden"}}>
                <div id="filter-content" className="filter-content">
                    <div style={{float:"left"}}>Filter</div>
                    
                </div>
                <div id="sort-content" className="sort-content">
                    <div style={{float:"left"}}>Sort</div>
                </div>
             </div>
        </div>
    )
}

export default TrendingFilter;