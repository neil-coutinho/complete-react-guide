import React from 'react';
const person = (props) => {
  //  console.log(props)
    return (
       <div>
        <p>{props.index} => Hi! my name is {props.name} and I am {props.age} years old</p>
        {props.children}
        {/* <p><button onClick={props.onClickHandler}>Change Greeting</button> </p>*/}
        
        <button onClick={props.deleteHandler}>Delete</button>
       
        <div><input type="text" onChange={props.nameChangeHandler} value={props.name}/></div>
       </div>
        
    )
   
}


export default person