import React  from "react";
import './App.css';

const Blog = (blog) => {
    return (
        <div className="blog">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <p>{blog.content}</p>
        </div>
    )
}

export default Blog;