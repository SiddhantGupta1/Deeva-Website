import React from 'react'
import './Section4.css'
import Special1 from './../../icons/Special 1.svg'
import Special2 from './../../icons/Special 2.svg'
import Special3 from './../../icons/Special 3.svg'
import Arrow from './../../icons/Arrow.svg'
import Wedding from './../../icons/Exclusive wedding.svg'
import AppHeading from './../../icons/App Heading.svg'
import App from './../../icons/App.svg'
import AppContent from './../../icons/App Content.svg'

function Section4() {

    const pics=[Special2, Special3, Special1]

    return(
        <div className="Section4">
            <div className="specials-frame">
                <div className="specials-heading">Deeva Specials</div>
                <div className="specials-rope"></div>
                <div className="specials">
                    {pics.map(pics => (
                        <img className="specials-img" src={pics} alt=""/>
                    ))
                    }
                    <button className="specials-btn">
                        <img style={{transform:"rotate(180deg)"}} src={Arrow} alt=""/>
                    </button>
                </div>
            </div>

            <div className="wedding">
                    <img src={Wedding} alt="" />
            </div>

            <div className="App-frame">
                <div className="Deeva-App">
                    <img src={AppHeading} alt=""/>
                    <img src={AppContent} alt=""/>
                    <img src={App} alt=""/>
                </div>  
            </div>

            <div className="App-frame">
                <div className="App-heading">
                    <div className="Deeva-App">
                        <img src={AppHeading} alt=""/>
                        <img src={AppContent} alt=""/>
                        <img src={App} alt=""/>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Section4;