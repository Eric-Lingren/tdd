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

  incrementCounter = () => {
    if (typeof(this.state.counter) === 'string'){
      this.setState({ counter: 1 })
    } else {
      this.setState({ counter: this.state.counter + 1 })
    }
  }

  decrementCounter = () => {
    console.log(this.state.counter)
    this.state.counter > 0 ? this.setState({ counter: this.state.counter - 1 }) : this.setState({ counter: 'Error -- can not go negative' })
  }

  render() {

    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'> The counter is currently: {this.state.counter} </h1>
        <button data-test='increment-button' onClick={this.incrementCounter}> Increment Count </button>
        <button data-test='decrement-button' onClick={this.decrementCounter}> Decrement Count </button>
        
      </div>
    );
  }
}

export default App;
