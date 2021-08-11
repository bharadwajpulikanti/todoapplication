import React, { Component } from 'react'
class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true,

        }
    }
    
clickEventHandler(){
    this.setState((prevState,props)=>({
        isLoggedIn : !(prevState.isLoggedIn)
    }),()=>{console.log("IsLoggedIn : ",this.state.isLoggedIn)})
}

render(){


    return this.state.isLoggedIn &&  <div><h1>Logged In</h1> <button onClick={()=>this.clickEventHandler()}>Click</button></div> 

    //  return this.state.isLoggedIn ? 
    // <div><h1>Logged In</h1> <button onClick={()=>this.clickEventHandler()}>Click</button></div> 
    // : <div><h1>Log In</h1> <button onClick={()=>this.clickEventHandler()}>Click</button></div>



    // let message
    // if(this.state.isLoggedIn === true){
    //     message =<div>Logged in</div>
    // }else{
    // message = <div>Login</div>
    // }
    // return(
    //     <div>
    //         <h1>{message}</h1>
    //          <button onClick={()=>this.clickEventHandler()}>Click</button>
    //     </div>
    // )
}

//     render() {
// if(this.state.isLoggedIn === true){
//         return (
            
//             <div>
//                 <h1>Log In</h1>
//                 <button onClick={()=>this.clickEventHandler()}>Click</button>
//             </div>
//         )
//     }
//     else{
//      return (
            
//             <div>
//                 <h1>Logged In</h1>
//                 <button onClick={()=>this.clickEventHandler()}>Click</button>
//             </div>
//         )
// }
// }

}

export default ConditionalRendering
