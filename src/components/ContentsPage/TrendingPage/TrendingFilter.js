import React from 'react'
import './TrendingFilter.css'

function  TrendingFilter(){

    function toggle1(){
        const slide = document.getElementById('filter');
        slide.style.transform = 'translateX(101%)';

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

{/*_____________________________PRICE BUTTONS________________________________ */}
    const price = ["All Prices", "Below ₹600", "₹1k - ₹2k", "Below ₹2000", "₹2000 - ₹5000", "Above ₹5000"];
    function handlePrice(prie){
        
        for(var i=0; i<price.length; i++)
        {
            if(prie!=price[i])
            {
                const notClicked = document.getElementById(price[i])
                notClicked.style.background = "#FFFAF2"
            }
        }
        const clicked = document.getElementById(prie)
        clicked.style.background = '#FFD706'
    }

{/*_____________________________BRAND________________________________ */}
    const brand = ["All Brands", "Admiryn","Max Fashion","Biba","W for Women","Aurelia","Fab India","Allen Solly"];
    function handleBrand(bran){
        
        for(var i=0; i<brand.length; i++)
        {
            if(bran!=brand[i])
            {
                const notClicked = document.getElementById(brand[i]);
                notClicked.style.background = "#FFFAF2";
            }
        }
        const clicked = document.getElementById(bran)
        clicked.style.background = '#FFD706'
    }

{/*_____________________________DELIVERY________________________________ */}
    const delivery = ["2-4 days", "Pay on Delivery", "Bulk", "Scheduled date"];
    function handleDelivery(deliver){
        
        for(var i=0; i<delivery.length; i++)
        {
            if(deliver!=delivery[i])
            {
                const notClicked = document.getElementById(delivery[i]);
                notClicked.style.background = "#FFFAF2";
            }
        }
        const clicked = document.getElementById(deliver)
        clicked.style.background = '#FFD706'
    }

{/*_____________________________STYLE________________________________ */}
    const style = ["All Styles", "Half Saree","With Blouse Material", "Without Blouse Material"];
    function handleStyle(styl){
        
        for(var i=0; i<style.length; i++)
        {
            if(styl!=style[i])
            {
                const notClicked = document.getElementById(style[i])
                notClicked.style.background = "#FFFAF2"
            }
        }
        const clicked = document.getElementById(styl)
        clicked.style.background = '#FFD706'
    }

{/*_____________________________WEAVE TYPE________________________________ */}
    const weave = ["Taant", "Kasavu", "Kanjeevaram", "Bomkai", "Benaras", "Bandhani", "Sambhalpuri", "All"];
    function handleWeave(weav){
        
        for(var i=0; i<weave.length; i++)
        {
            if(weav!=weave[i])
            {
                const notClicked = document.getElementById(weave[i])
                notClicked.style.background = "#FFFAF2"
            }
        }
        const clicked = document.getElementById(weav)
        clicked.style.background = '#FFD706'
    }

{/*_____________________________SORT________________________________ */}
    const featured = ["Featured", "Price : Low to High", "Price : High to Low", "Reviews"];
    function handleFeatured(feature){
        
        for(var i=0; i<featured.length; i++)
        {
            if(feature!=featured[i])
            {
                const notClicked = document.getElementById(featured[i])
                notClicked.style.background = "#FFFAF2"
            }
        }
        const clicked = document.getElementById(feature)
        clicked.style.background = '#FFD706'
    }

    return  (
        <div className="TrendingFilter">

             <div className="FilterSort">
                <div id="filter" className="filter"></div>
                <div id="sort" className="sort"></div>
                <button onClick={toggle0} className="filter-btn">Filter</button>
                <button onClick={toggle1} className="sort-btn">Sort</button>
             </div>

             <div style={{display:"flex",overflow:"hidden"}}>
                <div id="filter-content" className="filter-content">
                    
                    <div className="price-heading">Price</div>
                    <div className="price">
                        {price.map(price=>(
                            <button onClick={()=>{handlePrice(price); }} id={price} className="prices">{price}</button>
                        ))}
                    </div>
                    
                    <div className="brand-heading">Brand</div>
                    <div className="brand">
                        {brand.map(brand=>(
                            <button onClick={()=>{handleBrand(brand); }} id={brand} className="brands">{brand}</button>
                        ))}
                    </div>

                    <div className="delivery-heading">Delivery</div>
                    <div className="delivery">
                        {delivery.map(delivery=>(
                            <button onClick={()=>{handleDelivery(delivery); }} id={delivery} className="deliverys">{delivery}</button>
                        ))}
                    </div>

                    <div className="style-heading">Style</div>
                    <div className="style">
                        {style.map(style=>(
                            <button onClick={()=>{handleStyle(style); }} id={style} className="styles">{style}</button>
                        ))}
                    </div>

                    <div className="weave-heading">Weave Type</div>
                    <div className="weave">
                        {weave.map(weave=>(
                            <button onClick={()=>{handleWeave(weave); }} id={weave} className="weaves">{weave}</button>
                        ))}
                    </div>

                    
                </div>
                <div id="sort-content" className="sort-content">
                    
                    <div className="featured">
                        {featured.map(featured=>(
                            <button onClick={()=>{handleFeatured(featured); }} id={featured} className="featureds">{featured}</button>
                        ))}
                    </div>

                </div>
             </div>
        </div>
    )
}

export default TrendingFilter;