import React, { useState } from 'react';
import Bio from '../Bio/Bio';
const person = (props) => {

   const [personState, updatePersonStateFn ] = useState({
        bio: Math.random()
    })

    const updateBio = () => {
       updatePersonStateFn({
           ...personState,
           bio: `Bio updated at ${Math.random()}`
       }
          
       );
    }



    return (
       <div>
        <p>Hi! my name is {props.name} and I am {props.age} years old</p>
        {props.children}
        <button onClick={updateBio}>Update Bio</button>
        <Bio bio={personState.bio}/>
       </div>
        
    )
   
}


export default person