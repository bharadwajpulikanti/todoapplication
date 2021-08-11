import React from 'react'

function Person({personProps}) { // destructuring props inside function parameters
    return (
        <div>
            <h2>I am {personProps.name} aka {personProps.aka}</h2>
        </div>
    )
}

export default Person
