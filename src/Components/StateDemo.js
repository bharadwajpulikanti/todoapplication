import React from 'react'

class StateDemo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementEvent(){
        this.setState({
            count:this.state.count+1
        },()=>{console.log("callback value - ",this.state.count)}) // call back function if we want to execute after state is updated
    }


    incrementSecond(){ // if the value of the state is dependent on the previous value of the state , then pass the argument as a function instead of passing as an object
        this.setState((prevState,props)=>({
           count:prevState.count+props.addVal
        }))
    }

    incrementFive(){
        this.incrementSecond();
        this.incrementSecond();
        this.incrementSecond();
        this.incrementSecond();
        this.incrementSecond();
    }
    render(){
        return(
            <div>
                <div><h3>Counter :: {this.state.count}</h3></div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>

        )
    }
}

export default StateDemo