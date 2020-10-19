import React, { Component, Fragment } from 'react';


class FragClass extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
        <Fragment>
             <p>{this.props.message}</p>
             <p>This message is not from props</p>
        </Fragment>
       
        )
        
    }

}

export default FragClass;