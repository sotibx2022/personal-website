'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
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
interface Blog {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
}
const fetchBlogs = async (category?: string) => {
  const url = category ? `/api/getBlogs?category=${category}` : '/api/getBlogs';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  const data = await res.json();
  return data.blogs as Blog[];
};
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
          blogs.map((blog) => (
            <div key={blog._id} className="blog-card">
              <h3>{blog.title}</h3>
              <p>
                <strong>Category:</strong> {blog.category}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <Link href={`/singleBlog/blogDetails?blogId=${blog._id}`}>
                <button className="btn">Read More</button>
              </Link>
            </div>
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
