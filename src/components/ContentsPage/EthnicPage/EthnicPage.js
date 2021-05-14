import React from 'react'
import './EthnicPage.css'
import {useLocation} from 'react-router-dom'

const EthnicPage = () => {

    const {query} = useLocation()
    const hell = query.ids
    console.log(hell)

    return(
        <div className="Ethnic">
            <h1>Ethnic</h1>
            <h1>{hell}</h1>
            
        </div>
    )
}

export default EthnicPage;