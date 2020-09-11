import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: green;
  color: #fff;
  border-color: green;
  &:hover {
    background: blue;
  }
  
  `;

class App extends Component {
  state = {
    greeting: `Hello World I'm from state`,
    showPersons: true,
    persons: [
      { id: 100, name: `Neil Coutinho`, age: 32 },
      { id: 101, name: `Karen Coutinho`, age: 31 },
      { id: 102, name: `Isabelle Coutinho`, age: 22 }
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

  deletePerson(index) {
   console.log({index})
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    

    this.setState({
      persons: persons
    });

  }


  nameChangeHandler = ($event, index) => {
    const person = {
      ...this.state.persons[index]
    };

    const persons = [...this.state.persons];

    person.name = $event.target.value;

    persons[index] = {...person}

    this.setState({
      persons: persons
    })
  }



  render() {

    let persons = null;
    

    if (this.state.showPersons) {



     persons = (
        <div>

          {

            this.state.persons.map((person, index) => {
              
              return (
                <Person
                name={person.name}
                a={person.a}
                index={index}
                key={person.id}
                deleteHandler={() => this.deletePerson(index)}
                nameChangeHandler={($e) => this.nameChangeHandler($e, index)}
              />
              )

            })

          }

        </div>
      )
    }

    const classes = [];

    if(this.state.persons.length < 2) {
      classes.push('color-red');
    } else {
      classes.push('color-green')
    }

    return (
     
        <div className="App">
          {this.state.greeting}
          <button
            onClick={this.onClickHandler.bind(this, "button")}>BUTTON</button>

          <p>
            <ButtonStyled onClick={this.togglePersons}>Toggle Persons List</ButtonStyled>
          </p>

      <h4 className={classes.join(' ')}>No of persons: {this.state.persons.length}</h4>

          {persons}
        </div>
    
      
    )

  }


}

export default App;