import React from 'react'
import './TrendingPage.css'
import Header from './../../Header'
import Footer from './../../Footer'
import Body from './TrendingBody'
import Filter from './TrendingFilter'
import Section from './LastSection'

function TrendingPage(){

    const headings=["Trending", "Ethnic", "Party", "Puja", "Western"];

    return(
        <div className="Trending">
            
                <div className="Trend-headings">
                    {headings.map(e => (
                        <div className="Trend-heading">{e}</div>
                    ))}
                </div>

                <Filter />
                <Body />

                <div className="Trend-help">
                        
                </div>
                    
                <Section />
                <Footer />
                <Header />
            
        </div>
    )
}

export default TrendingPage;