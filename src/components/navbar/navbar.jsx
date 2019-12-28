import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand font-weight-bold" href="#">{this.props.header}</a>


            </nav>

        )
    }
}