  
import React, { useEffect, useState } from 'react';


// const getStateFromLocalStorage = () => {
//    const storage = localStorage.getItem('counterState');
//    console.log(storage);
//    if (storage) return JSON.parse(storage).count;
//    return {count : 0};
//   };

//   const storeStateInLocalStorage = count => {
//     localStorage.setItem('counterState', JSON.stringify({ count }));
//     console.log(localStorage);
//   };

  const useLocalStorage = (initialState, key) => {
      const get = () => {
      const storage = localStorage.getItem(key);
      if (storage) return JSON.parse(storage)[key];
      return initialState;
    }

    const [value, setValue] = useState(get());
      useEffect(()=>{
        localStorage.setItem(key,JSON.stringify({value}));
      });

      return [value, setValue];
  };

const Counter = ({max,counter}) => {
  const [count, setCount] = useLocalStorage(0,"counterNum");

  const increment = () => {
    setCount(c=>{
      if(c >= max)return c;
      return c + counter;
    })
  }
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(()=>{
    document.title = `Counter: ${count}`;
  }, [count]);

  // useEffect(()=>{
  //   storeStateInLocalStorage(count);
  // })

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