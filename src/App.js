import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = () => {

  const [personState, setPersonStateFn] = useState({
      
   
    persons : [
        { name: `Neil Coutinho`, age: 32}
      ]
  });

  const [greetingState, setGreetingStateFn] = useState({
      
    greeting: `Hello World I'm from state`,
    
  });

  //console.log(personState, setStateFn)

  const onClickHandler = () => {
    setGreetingStateFn({
         greeting: `I have been changed through state`
       });
  }

  return (
    <div className="App">
      { greetingState.greeting }
      <button onClick={onClickHandler}>BUTTON</button>
      <Person name={personState.persons[0].name} age="32"/>
      <Person name="Karen Coutinho" age="31"/>
      <Person name="Isabelle Coutinho" age="2"><p>I am a baby</p></Person>
    </div>
  )
  // state = {
  //   greeting: `Hello World I'm from state`,
  //   persons : [
  //     { name: `Person Coutinho`, age: 32}
  //   ]
  // }

  // onClickHandler = () => {

  //  this.setState({
  //    greeting: `I have been changed through state`
  //  })
  // }

  // render() {

    

  // }


}

export default app;