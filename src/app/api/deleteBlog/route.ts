import connectToDb from "@/app/configuration/connectToDb";
import Blog from "@/app/models/blog.model";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
    try {
        connectToDb();
        const { _id } = await request.json();
        if (!_id) {
            return NextResponse.json(
                { message: "Blog ID is required", success: false },
                { status: 400 }
            );
        }
        const deletedBlog = await Blog.findByIdAndDelete(_id);
        if (!deletedBlog) {
            return NextResponse.json(
                { message: "Blog not found", success: false },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { message: "Blog deleted successfully", success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json(
            { message: "Internal server error", success: false },
            { status: 500 }
        );
    }
}
