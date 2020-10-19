import React, { useEffect } from 'react';
import Frag  from '../Frag/Frag';
import FragClass from '../FragClass/FragClass';

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

    const fragClassMsg = 'Hello World';

    return (
        <div>
            { props.greeting } 

            <FragClass message={fragClassMsg}/>

            <Frag/>
            
            <p>
            <button onClick={props.onClickHandler}>BUTTON</button> 
            </p>

            <h4 className={props.classes}>No of persons: {props.personsLength}</h4>
        </div>
      
    )
}

export default React.memo(cockpit)