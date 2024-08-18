import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    // This effect will run after every render
    console.log('Component rendered');

    // Clean up function to avoid memory leaks
    return () => {
      console.log('Component unmounted');
    };
  });

  useEffect(() => {
    // This effect will run only on the initial render
    console.log('Initial render');
  }, []);

  useEffect(() => {
    // This effect will run on the initial render
    // and whenever the `count` state changes
    console.log(`Count updated: ${count}`);
  }, [count]);

  useEffect(() => {
    // This effect will run on the initial render
    // and whenever the `name` state changes
    console.log(`Name updated: ${name}`);
  }, [name]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default ExampleComponent;
