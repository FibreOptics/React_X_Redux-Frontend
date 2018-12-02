import React, { Component } from 'react';

import Routes from './route/Routes';

//redux
import {Provider} from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}


export default App;
