import React from 'react';

const Counter = () => {
  return (
    <main className='counter-container'>
      <section className='display'>
        <h1>Count: 0</h1>
      </section>
      <section className='buttons'>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </section>
    </main>
  );
};

export default Counter;
