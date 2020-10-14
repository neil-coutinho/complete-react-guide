import React, {PureComponent} from 'react';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Persons.js getDerivedStateFromProps');
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Persons.js shouldComponentUpdate", nextProps, nextState) //NOTE: must return a boolean
    
  //   if(nextProps.persons != this.props.persons) {
  //     console.log(true)
  //     return true;
  //   } 

  //   console.log(false)

  //   return false;
    
    
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js getSnapshotBeforeUpdate", prevProps, prevState);
    return prevState;
  }

  componentDidUpdate(prevState) {
    console.log("Persons.js componentDidUpdate", prevState);
  }

  render() {
    console.log("Persons.js RENDER")
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