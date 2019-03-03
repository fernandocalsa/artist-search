import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import SearchArtists from './containers/SearchArtists';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SearchArtists />
      </Provider>
    );
  }
}

export default App;
