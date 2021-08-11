import React from 'react'

class GreetClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            message : "Hi",
            status : "available"
        }
    }

    render(){
        const {name,oname} = this.props //destructuring props
        const {message,status} = this.state //destructuring state
        return(
            <div>
                <h1> {message} !!!! I am  {name}, aka {oname}... status-{status} </h1>
            </div>
        )
    }

    
}

export default GreetClass