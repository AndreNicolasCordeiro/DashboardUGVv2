import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const postId = parseInt(params.id, 10); // Converte a string em um número inteiro

    // Excluir o post usando o Prisma
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    await prisma.$disconnect();

    return NextResponse.json({ status: 200, message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ status: 500, message: "An error occurred while deleting the post" });
  }
}
