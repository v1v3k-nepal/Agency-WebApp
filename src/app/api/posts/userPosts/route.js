import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);
  console.error(newPost.errors)
  try {
    await connect();
    await newPost.save();
    return new NextResponse("New Post Successfully created", { status: 201 });
  } catch (err) {
    console.error(err)
    return new NextResponse("Failed to create new post", { status: 500 });
  }
};
