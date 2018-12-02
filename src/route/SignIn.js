import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/SignIn.css'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNcheck} from '../redux/actionsFire/loginAction'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    if (email && password) {
      this.props.getNcheck(email,password);
    }
  }

  render() {
    console.log(this.props.auth);
    return (
      <div className="page">
        <h3>Login</h3>
          {this.props.auth && <div>You are logged in</div> }
          {this.state.submitted && !this.props.auth&& <div>Wrong email/password</div> }
        <form name='form' onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" 
              value={this.state.email} onChange={this.onChangeText}
              />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" 
            value={this.state.password} onChange={this.onChangeText}
            />
            </div>
            <button>Confirm</button>
            <div><Link to="/SignUp">Register here!</Link></div>
        </form>
      </div>
    )
  }
}

SignIn.defaultProps = {
  auth: false
};

SignIn.propTypes = {
  getNcheck: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
}

const mapStateToProps = state => (
    {
      auth : state.login.auth
    }
  )

export default connect(mapStateToProps //or null
  ,{getNcheck})(SignIn);