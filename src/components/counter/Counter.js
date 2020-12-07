import React from 'react';

function countReducer(count, action) {
  switch (action) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    case 'RESET':
      return 0;
    default:
      throw new Error(`Action of type ${action.type} is not supported.`);
  }
}

const Counter = () => {
  const [count, dispatch] = React.useReducer(countReducer, 0);

  return (
    <main className='counter-container'>
      <section className='display'>
        <h1>Count: {count}</h1>
      </section>
      <section className='buttons'>
        <button onClick={() => dispatch('INCREMENT')}>Increment</button>
        <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
        <button onClick={() => dispatch('RESET')}>Reset</button>
      </section>
    </main>
  );
};

export default Counter;
