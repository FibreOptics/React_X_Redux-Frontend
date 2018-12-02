import React, { Component } from 'react';
import TopNavBar from '../../Components/TopNavbar';
//import Home from '../../Components/Home';


import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../redux/actions/postActions'

class Lobby extends Component {
//state of chat ready to send
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    //const { list } = this.state;
    const list = this.props.posts;
    return (
      <div className="App">
        <TopNavBar/>
        {//<Home/>
        }
        <h1>List of Items</h1>
        {list.length ? (
          <div>{list.map((item) => {
            return(
              <div>{item}</div>);
            })}
          </div>) : (
            <div><h2>No List Items Found</h2></div>
          )
        }
      </div>
    );
  }
}

Lobby.propTypes = {
  fetchPosts:PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  //statename same as in rootReduc(index) posts
  //getting items same in the postReduc
  posts: state.posts.items 
});

export default connect(mapStateToProps,{fetchPosts})(Lobby);