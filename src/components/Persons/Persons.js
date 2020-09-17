import React from 'react';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const Persons = (props) => {
    console.log(props);
    return (
       
    
        props.persons.map((person, index) => {

              
            return (

              <ErrorBoundary  key={person.id}>
                <Person
                  name={person.name}
                  a={person.a}
                  index={index}
                 
                  deleteHandler={() => props.delete(index)}
                  nameChangeHandler={($e) => props.change($e, index)}
                />
              </ErrorBoundary>

              
            )

          })


    )
}

export default Persons;