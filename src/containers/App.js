import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import styled from 'styled-components';


const ButtonStyled = styled.button`
  background-color: ${props => props.count < 2 ? 'red' : 'green'};
  color: #fff;
  border-color: green;
  &:hover {
    background: ${props => props.count < 2 ? 'black' : 'lightGreen'};;
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

  
  /**
   * 
   * @param {*} name 
   */
  onClickHandler = (name) => {
    console.log(name)
    this.setState({
      greeting: `I have been changed through state by ${name}`
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
  //  console.log({index})
  //  console.log(this);
  //  console.log(this.state.persons);
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    

    this.setState({
      persons: persons
    });

  }


  nameChangeHandler = ($event, index) => {
    console.log(this)
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
       

         <Persons persons={this.state.persons} change={this.nameChangeHandler} delete={(index) => this.deletePerson(index)}/>

       
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
            <ButtonStyled count={this.state.persons.length} onClick={this.togglePersons}>Toggle Persons List</ButtonStyled>
          </p>

      <h4 className={classes.join(' ')}>No of persons: {this.state.persons.length}</h4>

          {persons}
        </div>
    
      
    )

  }


}

export default App;