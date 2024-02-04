// Importe o PrismaClient e os tipos NextRequest/NextResponse
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Inicialize o PrismaClient
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, authorId } = body;

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: Number(authorId) }, // Conectando o post ao autor pelo ID
        },
      },
    });

    await prisma.$disconnect();

    return NextResponse.json({
      status: 201,
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({
      status: 500,
      message: "An error occurred while creating the post",
    });
  }
}
