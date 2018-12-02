import React, { Component } from 'react';
import { BrowserRouter,Route, Switch ,Redirect} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Lobby from './Lobby';
import ErrorRoute from './ErrorPage';
import {connect} from 'react-redux';

class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={()=>(this.props.auth ? <Redirect to="/Lobby"/>: <SignIn/>)}/>
            <Route exact path='/Lobby' component={Lobby}/>
            <Route exact path='/SignUp' component={SignUp}/>
            <Route component={ErrorRoute}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

Routes.defaultProps = {
    auth: false
};
  
const mapStateToProps = state => (
  {
    auth : state.login.auth
  }
)

export default connect(mapStateToProps)(Routes);
