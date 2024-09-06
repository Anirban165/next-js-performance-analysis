import Blog from "@/models/schemas/blog.schema";
import User from "@/models/schemas/user.schema";
import connectToDb from "@/utils/mongodbConnext";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const reqBody = await req.json();
    const { title, content, name, userId } = reqBody;
    try {
        await connectToDb();
        
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({
                status: 404,
                message: "User not found",
                Blog: null
            });
        }

        const blog = new Blog({
            title,
            content,
            createdByName: name,
            createdByID: userId
        });

        const newBlog = await blog.save();  // Changed from blog.create() to blog.save()
        console.log(newBlog);

        user.posts.push(newBlog._id);
        await user.save();  // Save the updated user document

        return NextResponse.json({
            status: 201,
            message: "Blog created successfully",
            data: newBlog  // Return newBlog instead of blog
        });
    } catch (error) {
        console.error("Error creating blog:", error);  // Log the full error
        return NextResponse.json({
            status: 500,
            message: "An error occurred. Please try again later",
            data: null
        });
    }
}