import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    greeting: `Hello World I'm from state`,
    showPersons: false,
    persons: [
      { name: `Neil Coutinho`, age: 32 }
    ]
  }

  onClickHandler = (name) => {
    console.log(name)
    this.setState({
      greeting: `I have been changed through state by ${name}`
    })
  }

  onNameChangeHandler(event) {

    this.setState({

      persons: [{
        name: event.target.value, age: 32
      }]
    })
  }


  togglePersons = () => {

    let currentState = this.state.showPersons;

    this.setState(
      {
        showPersons: !currentState
      });
  }



  render() {

    let persons = null;

    if (this.state.showPersons) {
     persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age="32"
            onNameChange={(e) => this.onNameChangeHandler(e)}
          />
          <Person name="Karen Coutinho" age="31"
            onNameChange={this.onNameChangeHandler.bind(this)}
            clickHandlerFn={() => this.onClickHandler(`Karen Coutinho`)}
          />
          <Person name="Isabelle Coutinho" age="2"

            onClickHandler={this.onClickHandler.bind(this, "Isabelle Coutinho")}

          ><p>I am a baby</p></Person>
        </div>
      )
    }

    return (
      <div className="App">
        {this.state.greeting}
        <button
          onClick={this.onClickHandler.bind(this, "button")}>BUTTON</button>

        <p>
          <button onClick={this.togglePersons}>Toggle Persons List</button>
        </p>

        {persons}
      </div>
    )

  }


}

export default App;