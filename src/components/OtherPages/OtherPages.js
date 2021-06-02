import React,{useState} from 'react'
import './OtherPages.css'
import Header from '../Header'
import Footer from '../Footer'
import Body from './TrendingBody'
import Filter from './TrendingFilter'
import Section from './LastSection'
import { Link, useParams } from 'react-router-dom'

function OtherPages(){

    const [height, setHeight] = useState(1000)
    const Params = useParams();

    console.log(Params.query);

    return(
        <div className="OtherPages">
            
                <div className="OtherPages-headings">
                    
                        <div to={'/others/'+Params.query}>
                            <div className="OtherPages-heading">{Params.query}</div>
                        </div>
                
                </div>

                <Filter height={height} />
                <Body setHeight={setHeight}/>

                <div className="OtherPages-help">
                    <div className="OtherPages-help-heading">Help or Having trouble in finding what you want ?</div>
                    <Link to="/contact us" className="OtherPages-help-link">Contact us and Ask your Queries</Link>
                </div>
                    
                <Section />
                <Footer />
                <Header />
            
        </div>
    )
}

export default OtherPages;