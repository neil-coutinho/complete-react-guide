import React, { useEffect } from 'react';

const cockpit = (props) => {

    useEffect(() => {
        console.log('Cockpit useEffect')
    }, [props.greeting])

    useEffect(() => {
        console.log('Cockpit useEffect w/o props')
    })

    return (
        <div>
            { props.greeting } 
            
            <p>
            <button onClick={props.onClickHandler}>BUTTON</button> 
            </p>

            <h4 className={props.classes}>No of persons: {props.persons.length}</h4>
        </div>
      
    )
}

export default cockpit