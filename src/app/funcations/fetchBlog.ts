import axios from 'axios';
import { IBlog } from '@/app/models/blog.model';
export const getSingleProductData = async (blogId: string): Promise<IBlog | null> => {
    try {
        const fullUrl = `${process.env.NEXT_PUBLIC_API_URL!}/api/getSingleBlog/blogId=${blogId}`;
        const response = await axios.get(fullUrl);
        return response.data.singleBlog;
    } catch {
        return null;
    }
};
