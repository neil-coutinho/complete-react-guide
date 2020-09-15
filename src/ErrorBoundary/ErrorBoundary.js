const { Component } = require("react");

import React, { Component } from 'react';

class ErrorBoundary extends Component {

    render() {
        return '<h1>Something went wrong</h1>';
    }

}

export default ErrorBoundary;