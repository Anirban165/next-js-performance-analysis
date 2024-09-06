import Blog from "@/models/schemas/blog.schema";
import connectToDb from "@/utils/mongodbConnext";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDb();
        const blogs = await Blog.find();
        return NextResponse.json({
            status: 200,
            message: "All blogs fetched successfully",
            blogs
        });
    } catch (error) {
        console.log(error);
    }
}