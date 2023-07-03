import React, {useEffect} from 'react';

const Nopage = () => {
    useEffect(()=> {
        document.title = '404'
    })
    return (
        <h1 style={{textAlign:'center'}}>404</h1>
    )
}

export default Nopage