import React from 'react'
import './EthnicPage.css'
import {useLocation} from 'react-router-dom'

const EthnicPage = () => {

    const {product} = useLocation()
    const {dprice} = useLocation()
    const hell = product.name

    return(
        <div className="Ethnic">
            <h1>Ethnic</h1>
            <h1>{hell}</h1>
            <h1>{product.price}</h1>
            <h1>{dprice}</h1>
        </div>
    )
}

export default EthnicPage;