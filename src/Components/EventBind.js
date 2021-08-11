import React, { Component } from 'react'

 class EventBind extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hi"
        }

        {/*Event Binding in the constructor */}
        // this.eventClickHandler = this.eventClickHandler.bind(this)
    }
    
    // eventClickHandler(){
    //     this.setState((prevState,props) =>({
    //         message : "Good Bye !!!" 
    //     }))
    // }

    //Using Arrow Functions as a Class Property

     eventClickHandler = ()=>{
        this.setState((prevState,props) =>({
                  message : "Good Bye !!!" 
              }))
    }
    
    render() {
        const {message} = this.state
        return (
            <div>
                <h1>{message}</h1>
                {/*binding eventHandler in the render method */}
                {/* <button onClick={this.eventClickHandler.bind(this)}>Click</button> */}

                {/*Event Binding using Arrow functions */}
                {/* <button onClick={()=>this.eventClickHandler()}>Click</button>  */}

                <button onClick={this.eventClickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
