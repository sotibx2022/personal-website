import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '@/app/funcations/getQueryClient';
import { getSingleProductData } from '@/app/funcations/fetchBlog';
import SingleBlog from './SingleBlog';
interface ISearchParams {
    searchParams: Promise<{ blogId?: string }>;
}
export async function generateMetadata({ searchParams: mySearchParams }: ISearchParams): Promise<Metadata> {
    const searchParams = await mySearchParams;
    const blogId = searchParams.blogId;
    if (!blogId) {
        return {
            title: 'No Blog Found',
            description: 'This is the single Blog Page of Binayaraj Soti Personal website however no Blog is found'
        };
    }
    const blogData = await getSingleProductData(blogId);
    if (!blogData) {
        return {
            title: 'No Blog Found',
            description: 'This is the single Blog Page of Binayaraj Soti Personal website however no Blog is found'
        };
    }
    return {
        title: blogData.title,
        description: blogData.description,
        openGraph: {
            title: blogData.title,
            description: blogData.description,
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_API_URL}/singleBlog/blogDetails?blogId=${blogId}`
        }
    };
}
const Page = async ({ searchParams: mySearchParams }: ISearchParams) => {
    const queryClient = getQueryClient();
    if (!queryClient) throw new Error('Query Client is not accessible');
    const searchParams = await mySearchParams;
    const blogId = searchParams.blogId;
    if (blogId) {
        // Prefetch the blog data on the server
        await queryClient.prefetchQuery({
            queryKey: ['singleBlog', blogId],
            queryFn: () => getSingleProductData(blogId)
        });
    }
    const dehydratedState = dehydrate(queryClient);
    return (
        <HydrationBoundary state={dehydratedState}>
            {blogId && <SingleBlog blogId={blogId} />}
        </HydrationBoundary>
    );
};
export default Page;
