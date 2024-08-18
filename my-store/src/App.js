
import './App.css';
import Blog from './Blog';
import React, { useState } from 'react';
import SignIn from './Signin';
import SignUp from './Signup';
import ExampleComponent from './ExampleComponent ';
import UseProps from './UseProps';


function App() {
  
  const [blogs]=useState([
    {title:'blog1',author:'author1',content:'content1'},
    {title:'blog2',author:'author2',content:'content2'},
    {title:'blog3',author:'author3',content:'content3'},
    {title:'blog4',author:'author4',content:'content4'},
    {title:'blog5',author:'author5',content:'content5'},
  ])
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      {
        blogs.map((blog, index)=>(
          <Blog key={index} title={blog.title} author={blog.author} content={blog.content}/>
        ))
      }
      <ExampleComponent/>
      <UseProps/>
    </div>
    );
}

export default App;
