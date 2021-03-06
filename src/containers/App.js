import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import styled from 'styled-components';
import Cockpit from '../components/Cockpit/Cockpit'


const ButtonStyled = styled.button`
  background-color: ${props => props.count < 2 ? 'red' : 'green'};
  color: #fff;
  border-color: green;
  &:hover {
    background: ${props => props.count < 2 ? 'black' : 'lightGreen'};;
  }
  
  `;

class App extends Component {

  constructor(props) {
    super(props)
    console.log('App.js constructor')
  }

  state = {
    greeting: `Hello World I'm from state`,
    showPersons: true,
    persons: [
      { id: 100, name: `Neil Coutinho`, age: 32 },
      { id: 101, name: `Karen Coutinho`, age: 31 },
      { id: 102, name: `Isabelle Coutinho`, age: 22 }
    ]
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App js getDerivedStateFromProps', props, state)
    return state
  }

  componentDidMount() {
    console.log('App.js componentDidMount')
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

    persons[index] = { ...person }

    this.setState({
      persons: persons
    })
  }




  render() {
    console.log('App.js render')
    let persons = null;


    if (this.state.showPersons) {



      persons = (


        <Persons persons={this.state.persons} change={this.nameChangeHandler} delete={(index) => this.deletePerson(index)} />


      )
    }

    const classes = [];

    if (this.state.persons.length < 2) {
      classes.push('color-red');
    } else {
      classes.push('color-green')
    }

    return (

      <div className="App">
        <Cockpit greeting={this.state.greeting}
         onClickHandler={() => this.onClickHandler('button')}
         personsLength={this.state.persons.length}
         classes={classes.join('')}
        />
        <p>
          <ButtonStyled count={this.state.persons.length} onClick={this.togglePersons}>Toggle Persons List</ButtonStyled>
        </p>

       

        {persons}
      </div>


    )

  }


}

export default App;