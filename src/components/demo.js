import React from 'react'
import {useLocation} from 'react-router-dom'
import queryString from 'query-string';

const Demo = () => {

    let location = useLocation();
    const parsed = queryString.parse(location.search);
    
    return(
        <div className="Ethnic">
            <h1>Demo</h1>
            <h1>{parsed?.name}</h1>
            <h1>{parsed?.price}</h1>
        </div>
    )
}


export default Demo;