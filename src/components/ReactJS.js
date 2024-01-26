import React, { useState } from 'react';

function useIncrement(addAmount) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(prevCount => prevCount + addAmount);
  }

  return [count, increase];
}

function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div>
      <h2>Counter 1</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function Counter2() {
  const [count, increase] = useIncrement(5);

  return (
    <div>
      <h2>Counter 2</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;