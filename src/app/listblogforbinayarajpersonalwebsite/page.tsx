'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AlertCircle } from 'lucide-react';
import { fetchBlogs } from '../funcations/fetchBlogs';
import { IBlog } from '../models/blog.model';
import SingleBlog from '../componnets/SingleBlog';
import axios from 'axios';
import Link from 'next/link';
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
    async function deleteBlog(_id: string | undefined) {
        if (!_id) {
            throw new Error("Id is not defined here");
        }
        try {
            const response = await axios.post("/api/deleteBlog", { _id });
            if (response.data?.success) {
                alert("Deleted successfully");
            }
            return response.data;
        } catch (error) {
            console.error("Error deleting blog:", error);
            throw error;
        }
    }
    return (
        <div className="blog-list-container">
            <Link href='/addblogforbinayarajpersonalwebsite'>Add Blogs</Link>
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
                        <div key={blog._id}>
                            <SingleBlog blog={blog} />
                            <button onClick={() => deleteBlog(blog._id)}>Delete</button></div>
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
