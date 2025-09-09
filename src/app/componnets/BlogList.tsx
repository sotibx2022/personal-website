'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { AlertCircle, Calendar, Tag } from 'lucide-react';
import { fetchBlogs } from '../funcations/fetchBlogs';
import SingleBlog from './SingleBlog';
import { IBlog } from '../models/blog.model';
const skills = [
  "CSS",
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "Next.js",
  "Motion",
  "GitHub",
  "Node.js",
  "Langchain",
];
const BlogList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const { data: blogs, isLoading, isError, error } = useQuery({
    queryKey: ['blogs', selectedCategory],
    queryFn: () => fetchBlogs(selectedCategory),
  });
  return (
    <div className="blog-list-container">
      <div className="category-filter">
        <select
          id="category"
          className="selectInput"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {skills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>
      <div className="blogs-grid">
        {isLoading ? (
          <p>Loading blogs...</p>
        ) : isError ? (
          <p>Error: {(error as Error).message}</p>
        ) : blogs && blogs.length > 0 ? (
          blogs.map((blog: IBlog) => (
            <SingleBlog blog={blog} key={blog._id} />
          ))
        ) : (
          <div className="no-blogs-found">
            <AlertCircle size={32} />
            <p>No blogs found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default BlogList;
