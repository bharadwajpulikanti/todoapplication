import React from 'react'

// function Greet(props){
//     return(
//         <div>
//             <h1>
//                 Hello {props.name}
//             </h1>
//         </div>
//     )
// }

/////////// Arrow Function
// const Greet = (props)=>{ return ( <div>
//     <h1>
//         Hello {props.name}
//     </h1>
// </div>)}

/////////// Simplified Arrow Function

const Greet = (props)=> <h1> Hello {props.name} </h1>

//export const Greet = (props)=> <h1> Hello {props.name} </h1> ////Named Export

export default Greet //default export