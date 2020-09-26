import React, {Component} from 'react';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props)
  }

  getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {
    return (
       
    
        this.props.persons.map((person, index) => {

              
            return (

              <ErrorBoundary  key={person.id}>
                <Person
                  name={person.name}
                  a={person.a}
                  index={index}
                
                  deleteHandler={() => this.props.delete(index)}
                  nameChangeHandler={($e) => this.props.change($e, index)}
                />
              </ErrorBoundary>

              
            )

          })


    )
  }

  
    
}

export default Persons;