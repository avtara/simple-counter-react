  
import React, { useState } from 'react';

const Counter = ({max, counter}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(c => {
      if(c >= max) return;
    return c + counter;
  })};
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset }>Reset</button>
      </section>
    </div>
  );
}


// class Counter extends Component {
//   constructor(props){
//     super(props);
//     this.state = getStateFromLocalStorage();

//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     this.reset = this.reset.bind(this);
//   }

//   increment (){
//     this.setState((state,props) =>{ 
//       const { max ,counter } = props;
//       if(state.count <= max){
//         return {count : this.state.count + counter}
//       }
//     }, () => {
//       localStorage.setItem('counterState', JSON.stringify(this.state));
//       document.title = `${this.state.count}`
//     });
//   }

//   decrement (){
//     this.setState({count : this.state.count - 1});
//   }

//   reset (){
//     this.setState({count : 0});
//   }

//   render() {
//     const {count} = this.state;

    
//   }
// }

export default Counter;