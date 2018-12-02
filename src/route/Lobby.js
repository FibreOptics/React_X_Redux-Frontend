import React, { Component } from 'react'
import Frdlist from './components/Friendslist';
import Recent from './components/RecentChat';
import Chatbox from './components/Chatbox'
//GET Frd action
//import {getNcheck} from '../redux/actionsFire/loginAction'

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ren : <div>Hello</div>
    };
  }
  componentDidMount(){
    //this.props.getNcheck();
  }
  chat = () => {
    this.setState({ren: <Chatbox/>})
  }
  renFrdlist = () => {
    this.setState({ren : <Frdlist/>})
  }
  renRecent = () => {
    this.setState({ren : <Recent/>})
  }
  render() {
    return (
      <div>
        <button onClick={this.renFrdlist}>Friends</button>
        <button onClick={this.renRecent}>Recent</button>
        {this.state.ren}
      </div>
    )
  }
}

Lobby.defaultProps = {
  auth: false,
  friendlist: false,
  recentchat:false
};

export default Lobby;