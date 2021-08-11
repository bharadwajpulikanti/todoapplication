import React from 'react'

const Welcome = (props)=>{
    return React.createElement("div",{id:"id1",className:"myworld"},React.createElement("h1",null,`Hello ${props.name}`));
}

export default Welcome