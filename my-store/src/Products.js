
import React, { useState } from 'react';
import laptopImg from './laptop.jpg';
import mobileImg from './mobile.jpg';
import tabletImg from './tablet.jpg';


const Products = () => {
    
  //make an array of products
  const [products,setProducts]= useState([
    {name:'laptop',price:1000,img:laptopImg},
    {name:'mobile',price:500,img:mobileImg},
    {name:'tablet',price:300,img:tabletImg},
  ])
   //function to delete all opjects in the array
  const deleteAll=()=>{
    setProducts([])
  }
  return (
    <div>
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
  )
}

export default Products