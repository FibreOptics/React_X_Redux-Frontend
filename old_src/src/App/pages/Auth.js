import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import SignIn from '../../Components/SignIn';

class Auth extends Component {
  render() {
    return (
    <div className="App">
      <h1>Dokki</h1>
      <SignIn/>
    </div>
    );
  }
}
export default Auth;