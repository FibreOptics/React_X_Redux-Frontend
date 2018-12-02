import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import './css/SignIn.css'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {regUser} from '../redux/actionsFire/registAction'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      password: '',
      passwordC:'',
      submitted: false,
    };
  }
  
  onChangeText = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
    
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({ submitted: true });
    const { name, email, password } = this.state;
    if (name && email && password) {
      this.props.regUser(name,email,password);
    }
  }

  render() {
    return (
      <div className="page">
        <h3>Register</h3>
        {this.state.submitted && <div></div>}
        {this.state.password === this.state.passwordC ? null : <div>Password does not match</div>}
        <form name='form' onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" 
              value={this.state.email} onChange={this.onChangeText}
              />
            </div>
            <div>
              <label htmlFor="name">Username</label>
              <input type="text" name="name" 
              value={this.state.name} onChange={this.onChangeText}
              />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" 
            value={this.state.password} onChange={this.onChangeText}
            />
            </div>
            <div>
              <label htmlFor="passwordC">Password confirmation</label>
              <input type="text" name="passwordC" 
              value={this.state.passwordC} onChange={this.onChangeText}
              />
            </div>
            <button>Confirm</button>
        </form>
      </div>
    )
  }
}

SignUp.propTypes = {
  regUser: PropTypes.func.isRequired,
  //auth: PropTypes.bool.isRequired,
}

export default connect(null,{regUser})(SignUp);