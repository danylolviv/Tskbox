import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';
import InboxScreen from './components/InboxScreen';
import './index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    );
  }
}

export default App;
