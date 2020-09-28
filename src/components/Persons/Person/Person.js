import React, { useEffect } from 'react';
import styled from 'styled-components';


const PersonWrapper = styled.div`
  background: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px;
`;


const person = (props) => {
  //USE EFFECT A
  useEffect(() => {
    console.log('useEffect A called')
  })

  //USE EFFECT B WILL BE CALLED ONLY ONCE
  useEffect(() => {
    console.log('useEffect B called once per person')
  },[])


  //  console.log(props)
  console.log('Person.js')
  const style = {
    textAlign: 'left',
    '@media (maxWidth: 767px)': {
      textAlign: 'center'
    }
  }

  

  return (
    <PersonWrapper>
      <div style={style} className="Person">
        <p>{props.index} => Hi! my name is {props.name} and I am {props.age} years old</p>
        {props.children}
        {/* <p><button onClick={props.onClickHandler}>Change Greeting</button> </p>*/}

        <button onClick={props.deleteHandler}>Delete</button>

        <div><input type="text" onChange={props.nameChangeHandler} value={props.name} /></div>
      </div>
    </PersonWrapper>


  )

}


export default person