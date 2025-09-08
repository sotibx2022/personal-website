import React from 'react';
import axios from "axios";
import { IBlog } from '@/app/models/blog.model';
import { Metadata } from 'next';
interface ISearchParams {
    searchParams: Promise<{
        blogId?: string;
    }>
}
const getSingleProductData = async (blogId: string): Promise<IBlog | null> => {
    try {
        const fullUrl = `${process.env.NEXT_PUBLIC_API_URL!}/api/getSingleBlog/blogId=${blogId}`;
        const response = await axios.get(fullUrl);
        return response.data.singleBlog; // only the plain data
    } catch (err: any) {
        return null; // return null instead of the full error object
    }
}
export async function generateMetadata({ searchParams: mySearchParams }: ISearchParams): Promise<Metadata> {
    const searchParams = await mySearchParams;
    const blogId = searchParams.blogId;
    if (!blogId) {
        return {
            title: 'No Blog Found',
            description: 'This is the single Blog Page of Binayaraj Soti Personal website however no Blog is found'
        }
    }
    const blogData = await getSingleProductData(blogId!);
    if (!blogData) {
        return {
            title: 'No Blog Found',
            description: 'This is the single Blog Page of Binayaraj Soti Personal website however no Blog is found'
        }
    } else {
        return {
            title: blogData.title,
            description: blogData.description,
            openGraph: {
                title: blogData.title,
                description: blogData.description,
                type: "website",
                url: `${process.env.NEXT_PUBLIC_API_URL}/singleBlog/blogDetails?blogId=${blogId}`
            }
        }
    }
}
// set the metaData for page as per the blogTitle.
// query client will be used to send data in singleBlogComponent.
// data will be loaded in the server.
const Page = async ({ searchParams: mySearchParams }: ISearchParams) => {
    const searchParams = await mySearchParams;
    const blogId = searchParams.blogId;
    return (
        <div>
            Blog ID: {blogId}
        </div>
    );
};
export default Page;
