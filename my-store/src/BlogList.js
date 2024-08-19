import React, { useState } from 'react';
import Blog from './Blog';


const BlogList = () => {
    const [blogs]=useState([
        {title:'blog1',author:'author1',content:'content1'},
        {title:'blog2',author:'author2',content:'content2'},
        {title:'blog3',author:'author3',content:'content3'},
        {title:'blog4',author:'author4',content:'content4'},
        {title:'blog5',author:'author5',content:'content5'},
      ])
  return (
    <div>
         {
        blogs.map((blog, index)=>(
          <Blog key={index} title={blog.title} author={blog.author} content={blog.content}/>
        ))
      }
    </div>
  )
}

export default BlogList