'use client';
import React from 'react';
import BlogList from '../componnets/BlogList';
import QueryClientProvider from '../providers/QueryClientProvider';
const BlogPage: React.FC = () => {
  return (
    <QueryClientProvider>
      <div className="section">
       <h1 className='portfolio-title'>Code & Concepts</h1> 
        <BlogList />
      </div>
    </QueryClientProvider>
  );
};
export default BlogPage;
