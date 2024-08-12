
import './App.css';
//import useState
import React, { useState } from 'react';

function App() {
  var[blogs,setBlogs]=useState(['blog1','blog2','blog3'])
  console.log(blogs);
  const addBlog=()=>{
    setBlogs(['blog1','blog2','blog3','blog4'])
  }
  return (
    <div className="App">
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog)=>(
          <h1>{blog}</h1>
        ))}
      </ul>
      <button onClick={addBlog}>Add Blog 4</button>
    </div>
  );
}

export default App;
