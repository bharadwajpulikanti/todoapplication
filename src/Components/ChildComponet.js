import React from 'react'

function ChildComponet(props) {
    return (
        <div>
            <button onClick={()=>{props.greethandler('children')}}>Click</button>{/* Calling a  method from parent component  in the child component using props*/}
        </div>
    )
}

export default ChildComponet
