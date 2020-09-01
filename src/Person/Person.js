import React from 'react';
const person = (props) => {
    console.log(props)
    return (
       <div>
        <p>Hi! my name is {props.name} and I am {props.age} years old</p>
        {props.children}
        <p><button onClick={props.clickHandlerFn}>Change Greeting</button></p>
       </div>
        
    )
   
}


export default person