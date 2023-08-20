import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {
  // ... verificação de autenticação aqui ...

  const userPosts = await prisma.post.findMany({
    where: { authorId: +params.id },
    select: {
      id: true,
      title: true,
      content: true,
    },
  });

  return new Response(JSON.stringify(userPosts), { headers: { "Content-Type": "application/json" } });
}


/* import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function GET(request:Request, {params}:{params:{id: number}}){

    const accessToken = request.headers.get("authorization")
    if(!accessToken || !verifyJwt(accessToken)){
        return new Response(
            JSON.stringify({
            error:"unauthorized",
        }),
        {
            status: 401,
        }
        );
    }
    const userPosts = await prisma.post.findMany({
        where: { authorId: +params.id},
        include: {
            author: {
                select: {
                    email: true,
                    name: true,
                }
            }
        }
    })

    return new Response(JSON.stringify(userPosts));
} */