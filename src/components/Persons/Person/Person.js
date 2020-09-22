import React from 'react';
import styled from 'styled-components';


const PersonWrapper = styled.div`
  background: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px;
`;


const person = (props) => {
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