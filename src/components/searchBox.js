import React, { Component, Fragment } from 'react';

export default class SearchBox extends Component {
    onChange = (event) => {
        event.preventDefault() ;
        let newText = event.target.value.toLowerCase() ;
        this.props.handleChange(newText) ;
    };

    render() {
        return (
            <Fragment>
                <input type="text" placeholder="Search" 
                    onChange={this.onChange} />
            </Fragment>
        );
    }
}