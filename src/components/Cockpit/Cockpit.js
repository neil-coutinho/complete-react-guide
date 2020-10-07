import React, { useEffect } from 'react';

const cockpit = (props) => {

    useEffect(() => {
        console.log('Cockpit useEffect')
    }, [props.greeting])

    return (
        <div>
            { props.greeting } 
            
            <p>
            <button onClick={props.onClickHandler}>BUTTON</button> 
            </p>
        </div>
      
    )
}

export default cockpit