import React from 'react';
import Bio from '../Bio/Bio';
const person = (props) => {
    return (
       <div>
        <p>Hi! my name is {props.name} and I am {props.age} years old</p>
        {props.children}
        <Bio/>
       </div>
        
    )
   
}


export default person