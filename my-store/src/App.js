
import './App.css';
//import useState
import React, { useState } from 'react';
import laptopImg from './laptop.jpg';
import mobileImg from './mobile.jpg';
import tabletImg from './tablet.jpg';

function App() {
  const [name,setName] =useState('shaimaa');
  var[blogs,setBlogs]=useState(['blog1','blog2','blog3'])
  console.log(blogs);
  const addBlog=()=>{
    setBlogs(['blog1','blog2','blog3','blog4'])
  }
  const handleClick=()=>{
    setName('mohamed')
    console.log(name);
  }
  //make an array of products
  const [products,setProducts]=useState([
    {name:'laptop',price:1000,img:laptopImg},
    {name:'mobile',price:500,img:mobileImg},
    {name:'tablet',price:300,img:tabletImg},
  ])
  //function to delete all opjects in the array
  const deleteAll=()=>{
    setProducts([])
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleClick}>Change Name</button>

      <br/>

      <h1>Blogs</h1>
      <ul>
      {blogs.map((blog, index)=>(
        <h1 key={index}>{blog}</h1>
      ))}
      </ul>
      <button onClick={addBlog}>Add Blog 4</button>

      <br/>

      <h1>Products</h1>
      <div className='container'>
      {products.map((product, index)=>(
        <div className="product" key={index}>
        <img src={product.img} alt={product.name+'-img'}/>
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
        </div>
      ))}
      </div>
      <button onClick={deleteAll}>Delete All</button>
    </div>
    );
}

export default App;
