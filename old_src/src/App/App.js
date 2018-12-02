import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Lobby from './pages/Lobby';
import RegisterPage from './pages/RegisterPage';
//redux
import {Provider} from 'react-redux';
import store from './redux/store';
//import {createStore, applyMiddleware} from 'redux';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Auth}/>
          <Route path='/lobby' component={Lobby}/>
          <Route path='/register' component={RegisterPage}/>
        </Switch>
      </div>
    )
    return (
      <Provider store={store}>
        <Switch>
          <App/>
        </Switch>
      </Provider>
    );
  }
}

export default App;
