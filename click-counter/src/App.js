import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0,
      wentNegative: false
    }
  }

  incrementCounter = () => {
      this.setState({ counter: this.state.counter + 1, wentNegative: false })
  }

  decrementCounter = () => {
    this.state.counter > 0 ? this.setState({ counter: this.state.counter - 1 }) : this.setState({ wentNegative: true })
  }

  render() {

    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'> The counter is currently: {this.state.counter} </h1>
        <h2 data-test='error-message' style={{color: 'red'}}> {this.state.wentNegative ? 'Error -- Cant go negative' : null } </h2>
        <button data-test='increment-button' onClick={this.incrementCounter}> Increment Count </button>
        <button data-test='decrement-button' onClick={this.decrementCounter}> Decrement Count </button>
        
      </div>
    );
  }
}

export default App;
