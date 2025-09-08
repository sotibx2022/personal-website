"use client"
import CodeViewer from '@/app/componnets/CodeViewer'
import { getSingleProductData } from '@/app/funcations/fetchBlog'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
const SingleBlog: React.FC<{ blogId: string }> = ({ blogId }) => {
    const { data: singleBlog, isPending } = useQuery({
        queryFn: () => getSingleProductData(blogId),
        queryKey: ['singleBlog', blogId]
    })
    return (
        <div className='section singleBlogPage'>
            {singleBlog && <>
                <h1 className='portfolio-title'>{singleBlog.title}</h1>
                <p className='portfolio-tech-title'>{singleBlog.category}</p>
                <p className='hero-description'>{singleBlog.description}</p>
                {singleBlog.codeSnippet && <CodeViewer codeString={singleBlog.codeSnippet} />}
            </>
            }
        </div>
    )
}
export default SingleBlog