import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  render() {

    return (
      <div className="App">
        Hello World
        <Person name="Neil Coutinho" age="32"/>
        <Person name="Karen Coutinho" age="31"/>
      </div>
    )

  }


}

export default App;