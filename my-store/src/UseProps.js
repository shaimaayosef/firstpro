import React, { useState } from 'react';
import ChildComponent from './ChildComponent';


const UseProps = () => {
    
      const [count, setCount] = useState(0);

      const handleIncrement = () => {
        setCount(count + 1);
      };
  return (
    <div>
        <ChildComponent message="Hello from Parent" count={count} />
        <button onClick={handleIncrement}>Increment Count</button>
    </div>
  )
}

export default UseProps