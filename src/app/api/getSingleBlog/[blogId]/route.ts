import connectToDb from "@/app/configuration/connectToDb";
import Blog from "@/app/models/blog.model";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    try {
        await connectToDb();
        const url = new URL(req.url);
        const pathSegments = url.pathname.split("=");
        const blogId = pathSegments.pop();
        if (!blogId) {
            return NextResponse.json({ singleBlog: null, error: "blogId missing" });
        }
        // Fetch blog from DB
        const singleBlog = await Blog.findById(blogId);
        if (!singleBlog) {
            return NextResponse.json({ singleBlog: null, error: "Blog not found" });
        }
        return NextResponse.json({ singleBlog });
    } catch (error: any) {
        return NextResponse.json({ singleBlog: null, error: error.message || "Unknown error" });
    }
}
