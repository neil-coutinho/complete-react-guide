import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    greeting: `Hello World I'm from state`,
    persons : [
      { name: `Neil Coutinho`, age: 32}
    ]
  }

  onClickHandler = () => {

   this.setState({
     greeting: `I have been changed through state`
   })
  }

  render() {

    return (
      <div className="App">
        { this.state.greeting }
        <button onClick={this.onClickHandler}>BUTTON</button>
        <Person name={this.state.persons[0].name} age="32"/>
        <Person name="Karen Coutinho" age="31"/>
        <Person name="Isabelle Coutinho" age="2"><p>I am a baby</p></Person>
      </div>
    )

  }


}

export default App;