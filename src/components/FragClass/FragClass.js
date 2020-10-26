import React, { Component, Fragment } from 'react';


class FragClass extends Component {

    constructor(props) {
        super(props)
        this.elementRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.elementRef)
    }
    
    render() {
        return (
        <Fragment>
             <p>{this.props.message}</p>
             <p ref={this.elementRef}> This message is not from props</p>
        </Fragment>
       
        )
        
    }

}

export default FragClass;