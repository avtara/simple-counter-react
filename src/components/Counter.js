  
import React, { Component } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if(storage) return JSON.parse(storage);
  return{ count : 0};
}

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = getStateFromLocalStorage();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment (){
    this.setState((state,props) =>{ 
      const { max ,counter } = props;
      if(state.count <= max){
        return {count : this.state.count + counter}
      }
    }, () => {
      localStorage.setItem('counterState', JSON.stringify(this.state));
      document.title = `${this.state.count}`
    });
  }

  decrement (){
    this.setState({count : this.state.count - 1});
  }

  reset (){
    this.setState({count : 0});
  }

  render() {
    const {count} = this.state;

    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset }>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;