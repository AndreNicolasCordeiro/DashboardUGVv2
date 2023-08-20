"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const UserPostPage = () => {
  const { data: session } = useSession();
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (session) {
      fetch(`/api/user/${session.user.id}`)
        .then((response) => response.json())
        .then((data: Post[]) => {
          setUserPosts(data);
        })
        .catch((error) => {
          console.error("Error fetching user posts:", error);
        });
    }
  }, [session]);

  const handleDelete = async (postId: number) => {
    try {
      const response = await fetch(`/api/user/post/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Atualizar a lista de posts após a exclusão bem-sucedida
        setUserPosts((prevPosts) =>
          prevPosts.filter((post) => post.id !== postId)
        );
      } else {
        console.error("Error deleting post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      {userPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserPostPage;
