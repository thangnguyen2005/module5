import React, { Component } from 'react';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Sidebar 
                    {this.props.msg}
                </h1>
            </div>
        );
    }
}
