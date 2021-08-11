import React, { Component } from 'react'
import ChildComponet from './ChildComponet'

 class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : "Parent"
        }
        this.greetParent = this.greetParent.bind(this)// binding greetParent method as we are using this keyword in that method
    }

    greetParent(child){

        alert(`Hello  ${this.state.message} from ${child}`)
    }
    

    render() {
        return (
            <div>
                <ChildComponet greethandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
