import React,{useState} from 'react'
import './WardrobePage.css'
import Header from '../Header'
import Footer from '../Footer'
import Body from './TrendingBody'
import Filter from './TrendingFilter'
import Section from './LastSection'
import { Link, useParams } from 'react-router-dom'

function WardrobePage(){

    const headings=["Trending", "Ethnic", "Party", "Puja", "Western"];
    const [height, setHeight] = useState(1000)
    const Params = useParams();

    console.log(Params.query);

    return(
        <div className="Trending">
            
                <div className="Trend-headings">
                    {headings.map((e,i) => (
                        <Link key={i} to={'/wardrobe/'+e} style={{textDecoration:"none", color:"#7E7E7E"}}>
                            {e===Params.query ? (
                            <div className="Trend-heading">{e}</div>
                            ) : (
                                <div >{e}</div>
                            )}
                        </Link>
                    ))}
                </div>

                <Filter height={height} />
                <Body setHeight={setHeight}/>

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

export default WardrobePage;