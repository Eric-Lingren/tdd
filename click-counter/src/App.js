import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'> The counter is currently {this.state.counter} </h1>
        <button data-test='increment-button' onClick={() => this.setState({ counter: this.state.counter +1 })}> Increment Count </button>
        <button data-test='decrement-button'> Decrement Count </button>
        
      </div>
    );
  }
}

export default App;
