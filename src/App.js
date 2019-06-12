import React, { Component, Fragment } from 'react';
import FilteredFriendList from './components/filteredFriendList';
import SearchBox from './components/searchBox';
import localCache from './localCache';
let request = require('superagent') ;

class FriendsApp extends Component {
    state = {
        searchText : ''
    };

    componentDidMount() {
        request.get('http://localhost:3001/friends')
            .end( (error, res) => {
                if (res) {
                    let friends = JSON.parse(res.text);
                    localCache.populate(friends);
                    this.setState({}) ; 
                } else {
                    console.log(error );
                }
            }
    )}

    filterFriends = (text) => this.setState({searchText : text})
    
    render() {
        let updatedList = localCache.getAll().filter(
           (friend) =>  friend.name.toLowerCase().search(
                this.state.searchText) !== -1 
        );
        return (
            <Fragment>
                <h1>Friends List</h1>
                <SearchBox handleChange={this.filterFriends} />
                <FilteredFriendList list={updatedList} />
            </Fragment>
        );
    }
}

export default FriendsApp;