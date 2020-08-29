import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    greeting: `Hello World I'm from state`
  }

  render() {

    return (
      <div className="App">
        { this.state.greeting }
        <Person name="Neil Coutinho" age="32"/>
        <Person name="Karen Coutinho" age="31"/>
        <Person name="Isabelle Coutinho" age="2"><p>I am a baby</p></Person>
      </div>
    )

  }


}

export default App;