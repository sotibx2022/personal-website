import axios from "axios";
import { IBlog } from "../models/blog.model";
export const fetchBlogs = async (category?: string) => {
    const url = category ? `/api/getBlogs?category=${category}` : "/api/getBlogs";
    try {
        const res = await axios.get(url);
        return res.data.blogs as IBlog[];
    } catch (error) {
        throw new Error("Failed to fetch blogs");
    }
};
