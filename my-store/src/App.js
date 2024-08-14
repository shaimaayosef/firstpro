
import './App.css';
import Blog from './Blog';
//import useState
import React, { useState } from 'react';
import laptopImg from './laptop.jpg';
import mobileImg from './mobile.jpg';
import tabletImg from './tablet.jpg';

function App() {
  // const [name,setName] =useState('shaimaa');
  // var[blogs,setBlogs]=useState(['blog1','blog2','blog3'])
  // console.log(blogs);
  // const addBlog=()=>{
  //   setBlogs(['blog1','blog2','blog3','blog4'])
  // }
  // const handleClick=()=>{
  //   setName('mohamed')
  //   console.log(name);
  // }
  // //make an array of products
  // const [products,setProducts]=useState([
  //   {name:'laptop',price:1000,img:laptopImg},
  //   {name:'mobile',price:500,img:mobileImg},
  //   {name:'tablet',price:300,img:tabletImg},
  // ])
  // //function to delete all opjects in the array
  // const deleteAll=()=>{
  //   setProducts([])
  // }
  const [blogs,setBlogs]=useState([
    {title:'blog1',author:'author1',content:'content1'},
    {title:'blog2',author:'author2',content:'content2'},
    {title:'blog3',author:'author3',content:'content3'},
    {title:'blog4',author:'author4',content:'content4'},
    {title:'blog5',author:'author5',content:'content5'},
  ])
  return (
    <div className="App">
      {/* <h1>{name}</h1>
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
      <button onClick={deleteAll}>Delete All</button> */}
      {
        blogs.map((blog, index)=>(
          <Blog key={index} title={blog.title} author={blog.author} content={blog.content}/>
        ))
      }
    </div>
    );
}

export default App;
