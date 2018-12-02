import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import Register from '../../Components/Register';

class RegisterPage extends Component {
  render() {
    return (
    <div className="App">
      <h1>Dokki</h1>
      <Register/>
    </div>
    );
  }
}
export default RegisterPage;