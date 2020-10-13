import React, { useEffect } from 'react';

const cockpit = (props) => {

    useEffect(() => {
        console.log('Cockpit useEffect')
    }, [props.greeting])

    useEffect(() => {
        console.log('Cockpit useEffect w/o props')
    })

    useEffect(() => {
        console.log('Cockpit useEffect with []')
    },[])

    return (
        <div>
            { props.greeting } 
            
            <p>
            <button onClick={props.onClickHandler}>BUTTON</button> 
            </p>

            <h4 className={props.classes}>No of persons: {props.personsLength}</h4>
        </div>
      
    )
}

export default React.memo(cockpit)