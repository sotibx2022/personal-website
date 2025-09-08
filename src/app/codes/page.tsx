'use client';
import React from 'react';
import BlogList from '../componnets/BlogList';
const BlogPage: React.FC = () => {
  return (
      <div className="section">
       <h1 className='portfolio-title'>Code & Concepts</h1> 
        <BlogList />
      </div>
  );
};
export default BlogPage;
