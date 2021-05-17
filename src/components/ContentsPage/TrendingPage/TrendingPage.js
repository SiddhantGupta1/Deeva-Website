import React from 'react'
import './TrendingPage.css'
import Header from './../../Header'
import Footer from './../../Footer'
import Body from './TrendingBody'
import Filter from './TrendingFilter'
import Section from './LastSection'
import { Link } from 'react-router-dom'

function TrendingPage(){

    const headings=["Trending", "Ethnic", "Party", "Puja", "Western"];

    return(
        <div className="Trending">
            
                <div className="Trend-headings">
                    {headings.map(e => (
                        <Link to={'/wardrobe/'+e} className="Trend-heading">{e}</Link>
                    ))}
                </div>

                <Filter />
                <Body />

                <div className="Trend-help">
                    <div className="trend-help-heading">Help or Having trouble in finding what you want ?</div>
                    <Link to="/contact us" className="trend-help-link">Contact us and Ask your Queries</Link>
                </div>
                    
                <Section />
                <Footer />
                <Header />
            
        </div>
    )
}

export default TrendingPage;