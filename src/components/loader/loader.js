import React, { Component } from 'react';
import Loader from 'react-loader';

import "./loader.css"

export default class ReactLoader extends Component {

    render() {
        return (
            <Loader className="loader" loaded={this.props.loaded}></Loader>
        )
    }
}