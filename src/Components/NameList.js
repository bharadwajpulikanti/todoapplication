import React from 'react'
import Person  from './Person'
function NameList() {
    const personsList = [
       {
           id:1,
           name : "Bruce",
           aka : "BatMan"

       },
       {
           id : 2,
           name : "Clark",
           aka : "SuperMan"
       },
       {
           id : 3,
           name : "Diana",
           aka : "WonderWoman"
       }
    ]

    const namesList = ['Bruce','Clark','Diana']
    const names =  namesList.map((name,index)=><h1 key={index}> {index} {name}</h1>)
    return (  //whenever we need to use javascript methods or variable inside JSX , they need to be included in {}
        <div>
            {
           names
           // personsList.map(person => <Person key={person.id} personProps={person}/>) 
            // here we are iterating the 'personsList' array and passing the each object in the 'personsList' as 'person' 
            //  to the 'Person' component using the props as 'personProps'
            }
        </div>
    )
}

export default NameList
