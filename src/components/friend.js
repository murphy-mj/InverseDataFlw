import React, { Component } from 'react';

export default class Friend extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false ;
    }

    render() {
        return (
            <li> 
                <h2>{this.props.friend.name}</h2> 
                <a href={'mailto:'+this.props.friend.email}>
                    {this.props.friend.email} </a>
            </li>
        );
    }
}