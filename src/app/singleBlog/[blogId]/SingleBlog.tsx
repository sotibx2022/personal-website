"use client"
import CodeViewer from '@/app/componnets/CodeViewer'
import { getSingleProductData } from '@/app/funcations/fetchBlog'
import { useQuery } from '@tanstack/react-query'
import { Calendar, Tag } from 'lucide-react'
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
                <div className="blogInfo">
                    <div className="blogMeta">
                        <Tag size={16} className="icon" />
                        <p className='blogCategory'>{singleBlog.category}</p>
                    </div>
                    <div className="blogMeta">
                        <Calendar size={16} className="icon" />
                        <p className='blogCreatedAt'>{new Date(singleBlog.createdAt!).toLocaleDateString()}</p>
                    </div>
                </div>
                <p className='hero-description'>{singleBlog.description}</p>
                {singleBlog.codeSnippet && <CodeViewer codeString={singleBlog.codeSnippet} />}
            </>
            }
        </div>
    )
}
export default SingleBlog