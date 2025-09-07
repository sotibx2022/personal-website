import connectToDb from '@/app/configuration/connectToDb';
import Blog from '@/app/models/blog.model';
import { NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest) {
    try {
        // Connect to MongoDB
        await connectToDb();
        // Get 'category' from query parameters
        const category = req.nextUrl.searchParams.get('category');
        // Build query object
        const query = category ? { category } : {};
        // Fetch blogs, sorted by newest first
        const blogs = await Blog.find(query).sort({ createdAt: -1 });
        return NextResponse.json(
            { message: 'Blogs fetched successfully', blogs },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json(
            { message: 'Internal Server Error', error: error.message },
            { status: 500 }
        );
    }
}
