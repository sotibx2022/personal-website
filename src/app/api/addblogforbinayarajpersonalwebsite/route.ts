import connectToDb from '@/app/configuration/connectToDb';
import Blog, { IBlog } from '@/app/models/blog.model';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    await connectToDb();
    // Get request body
    const body: IBlog = await req.json();
    const { title, category, description, codeSnippet } = body;
    // Basic validation
    if (!title || !category) {
      return NextResponse.json(
        { message: 'Title and category are required' },
        { status: 400 }
      );
    }
    // Create blog document
    const newBlog = await Blog.create({
      title,
      category,
      description: description || '',
      codeSnippet: codeSnippet || '',
    });
    return NextResponse.json(
      { message: 'Blog created successfully', blog: newBlog },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}
