import React, { useState } from 'react';

const ChangeName = () => {
    const [name,setName] =useState('shaimaa');
  
  const handleClick=()=>{
    setName('mohamed')
    console.log(name);
  }
  return (
    <div>
          <h1>{name}</h1>
          <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default ChangeName