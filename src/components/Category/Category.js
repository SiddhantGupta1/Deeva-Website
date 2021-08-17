import React,{useState} from 'react'
import './Category.css'
import Header from '../Header'
import Footer from '../Footer'
import Body from './TrendingBody'
import Filter from './TrendingFilter'
import Section from './LastSection'
import { Link, useParams } from 'react-router-dom'

function CategoryPage(){

    const headings=["Taant", "Kasavu", "Banaras", "Kanjeevaram", "Bomkai", "Sambhalpuri", "Pathani", "Bandhani"];
    const [height, setHeight] = useState(1000)
    const Params = useParams();

    console.log(Params.query);

    return(
        <div className="Category">
            
                <div className="Category-headings">
                    {headings.map((e,i) => (
                        <Link key={i} to={'/category/'+e} style={{textDecoration:"none", color:"#7E7E7E"}}>
                            {e===Params.query ? (
                            <div className="Category-heading">{e}</div>
                            ) : (
                                <div >{e}</div>
                            )}
                        </Link>
                    ))}
                </div>

                <Filter height={height} />
                <Body setHeight={setHeight}/>

                <div className="Category-help">
                    <div className="Category-help-heading">Help or Having trouble in finding what you want ?</div>
                    <Link to="/contact us" className="Category-help-link">Contact us and Ask your Queries</Link>
                </div>
                    
                <Section />
                <Footer />
                <Header />
            
        </div>
    )
}

export default CategoryPage;