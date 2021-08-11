import React from 'react'

//const GreetProps = ({name,oname,children})=>{ //Destructuring props with in the function Parameters
const GreetProps = (props) => {
    const { name, oname, children } = props // Destructuring props with in the function body
    return (
        <div>
            <h1>Welcome {name} aka {oname}</h1>
            {children}
        </div>
    )
}

export default GreetProps