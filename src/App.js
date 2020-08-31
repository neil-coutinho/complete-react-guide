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

  onClickHandler = (name) => {
    console.log(name)
   this.setState({
     greeting: `I have been changed through state by ${name}`
   })
  }

  render() {

    return (
      <div className="App">
        { this.state.greeting }
        <button 
        onClick={this.onClickHandler.bind(this,"button")}>BUTTON</button>
        <Person 
        onClickHandler={() => this.onClickHandler(this.state.persons[0].name)} 
        name={this.state.persons[0].name} 
        age="32"/>
        <Person name="Karen Coutinho" age="31"/>
        <Person name="Isabelle Coutinho" age="2"><p>I am a baby</p></Person>
      </div>
    )

  }


}

export default App;