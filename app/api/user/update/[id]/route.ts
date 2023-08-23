import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request: NextRequest, { params, body }: { params: { id: string }, body: any }) {
  try {
    
    const body = await request.json()

    console.log("REQUEST,", request);
    console.log("Request Params:", params);
    console.log("Request Body:", body);
    
    const postId = parseInt(params.id, 10);
    
    // Atualizar o post usando o Prisma
    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    await prisma.$disconnect();

    return NextResponse.json({ status: 200, message: "Post updated successfully", post: updatedPost });
} catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json({ status: 500, message: "An error occurred while updating the post" });
}
}