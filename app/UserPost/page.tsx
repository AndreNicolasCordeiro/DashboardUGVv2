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
  const [editingPost, setEditingPost] = useState<Post>({
    id: 0,
    title: "",
    content: "",
  });

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

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleUpdate = async (
    postId: number,
    title: string,
    content: string
  ) => {
    try {
      console.log("Updating with title:", title);
      console.log("Updating with content:", content);

      const response = await fetch(`/api/user/update/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        const responseData = await response.json();

        if (responseData.status !== 500) {
          const updatedPost = responseData.post;

          console.log("Updated Post:", updatedPost);

          setUserPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.id === updatedPost.id ? updatedPost : post
            )
          );
          setEditingPost({ id: 0, title: "", content: "" });
        } else {
          console.error("Error updating post");
        }
      } else {
        console.error("Error updating post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingPost({ id: 0, title: "", content: "" });
  };

  return (
    <div>
      {userPosts.map((post) => (
        <div key={post.id}>
          {editingPost.id !== 0 ? (
            <div>
              <input
                type="text"
                value={editingPost.title}
                onChange={(e) =>
                  setEditingPost((prevEditingPost) => ({
                    ...prevEditingPost,
                    title: e.target.value,
                  }))
                }
              />
              <textarea
                value={editingPost.content}
                onChange={(e) =>
                  setEditingPost((prevEditingPost) => ({
                    ...prevEditingPost,
                    content: e.target.value,
                  }))
                }
              />
              <button
                onClick={() =>
                  handleUpdate(
                    editingPost.id,
                    editingPost.title,
                    editingPost.content
                  )
                }
              >
                Update
              </button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <h2 className="text-white">{post.title}</h2>
              <p className="text-white">{post.content}</p>
              <button className="text-white" onClick={() => handleEdit(post)}>
                Edit
              </button>

              <button
                className="text-white"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserPostPage;
