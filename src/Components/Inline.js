import React from 'react'

const inlineStyle = {
    color : 'blue',
    fontSize : '80px'
}



function Inline() {// in inline styling, styles are not specified as strings, 
    //but they are specified as objects where key is camelcased version of style and value is string

    
    return (
        <div>
            <h1 style={inlineStyle}>Inline</h1>
        </div>
    )
}

export default Inline
