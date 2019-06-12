import React, { Component } from 'react';
import Friend from './friend';

export default class FilteredFriendList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.list.length === nextProps.list.length ) {
            return false ;
        } else {
            return true ;
        }     
    }

    render() {
        let friends = this.props.list.map(
            (friend) =>  <Friend key={friend.email} friend={friend} />
        );
        return (
            <ul>
                {friends}
            </ul>
        );
    }
}