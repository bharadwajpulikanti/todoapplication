import React from 'react'

class Message extends React.Component{

    constructor(props){ // inorder to use props inside a state need to pass it in constructor as well as in super method
        
    super(props) // inorder to use this key word, we call super method

        this.state = {
            message : `Welcome ${this.props.name}`
        }

        
    }

    clickEvent(){
        this.setState(
            {
                message : "Thankyou for subscribing"
            }
        )
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.clickEvent()}>Subscribe</button>
            </div>
        )
    }
}

export default Message