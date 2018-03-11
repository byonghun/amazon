import React, { Component } from 'react'
import Header from './Components/header'

// still need to add auto imports
export default class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
        <p>Website</p>
      </div>
    );
  }
}
