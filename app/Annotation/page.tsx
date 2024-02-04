"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";

interface Post {
  id: number;
  title: string;
  content: string;
}

const UserPostPage = () => {
  const { data: session } = useSession();
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  const [isLoading, setIsLoading] = useState(false);

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
      const confirmed = window.confirm(
        "Tem certeza que deseja excluir o post?"
      );

      if (confirmed) {
        setIsLoading(true);
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
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [editingPosts, setEditingPosts] = useState<{ [postId: number]: Post }>(
    {}
  );

  const handleEdit = (post: Post) => {
    setEditingPosts((prevEditingPosts) => ({
      ...prevEditingPosts,
      [post.id]: {
        ...post,
      },
    }));
  };
  const handleUpdate = async (
    postId: number,
    title: string,
    content: string
  ) => {
    try {
      setIsLoading(true);
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

          // Atualizar apenas os dados do post na lista de userPosts
          setUserPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.id === updatedPost.id ? updatedPost : post
            )
          );
          // Saia do modo de edição após a atualização
          setEditingPosts((prevEditingPosts) => {
            const updatedEditingPosts = { ...prevEditingPosts };
            delete updatedEditingPosts[postId];
            return updatedEditingPosts;
          });
        } else {
          console.error("Error updating post");
        }
      } else {
        console.error("Error updating post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = (postId: number) => {
    setEditingPosts((prevEditingPosts) => {
      const updatedEditingPosts = { ...prevEditingPosts };
      delete updatedEditingPosts[postId];
      return updatedEditingPosts;
    });
  };

  //criar post
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handleShowNewPostForm = () => {
    setShowNewPostForm(true);
  };

  const handleCreatePost = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`/api/user/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newPostTitle,
          content: newPostContent,
          authorId: session?.user?.id,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setUserPosts((prevPosts) => [responseData.post, ...prevPosts]);
        setShowNewPostForm(false);
        setNewPostTitle("");
        setNewPostContent("");
      } else {
        console.error("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5">
        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
          </div>
        )}

        {showNewPostForm ? (
          <div className="bg-[#1A1B20] p-6 rounded-lg shadow-xl">
            <input
              type="text"
              placeholder="Título"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              className="border border-white rounded-lg p-2 mb-4 text-white bg-[#333] focus:outline-none focus:ring focus:border-blue-500 w-full"
            />
            <textarea
              placeholder="Conteúdo"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              className="border border-white rounded-lg p-2 text-white bg-[#333] focus:outline-none focus:ring focus:border-blue-500 w-full"
            />
            <div className="flex gap-5">
              <button
                onClick={handleCreatePost}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
              >
                Criar Post
              </button>
              <button
                onClick={() => setShowNewPostForm(false)}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleShowNewPostForm}
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
          >
            Novo Post
          </button>
        )}
        {userPosts.map((post) => (
          <div key={post.id} className="bg-[#1A1B20] p-6 rounded-lg shadow-xl">
            {editingPosts[post.id] ? (
              <div>
                <input
                  type="text"
                  value={editingPosts[post.id].title}
                  onChange={(e) =>
                    setEditingPosts((prevEditingPosts) => ({
                      ...prevEditingPosts,
                      [post.id]: {
                        ...prevEditingPosts[post.id],
                        title: e.target.value,
                      },
                    }))
                  }
                  className="border border-white rounded-lg p-2 mb-4 text-white bg-[#333] focus:outline-none focus:ring focus:border-blue-500 w-full"
                />
                <textarea
                  value={editingPosts[post.id].content}
                  onChange={(e) =>
                    setEditingPosts((prevEditingPosts) => ({
                      ...prevEditingPosts,
                      [post.id]: {
                        ...prevEditingPosts[post.id],
                        content: e.target.value,
                      },
                    }))
                  }
                  className="border border-white rounded-lg p-2 text-white bg-[#333] focus:outline-none focus:ring focus:border-blue-500 w-full"
                />
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={() =>
                    handleUpdate(
                      post.id,
                      editingPosts[post.id].title,
                      editingPosts[post.id].content
                    )
                  }
                >
                  Atualizar
                </button>
                <button
                  className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                  onClick={() => handleCancelEdit(post.id)}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  {post.title}
                </h2>
                <p className="text-white">{post.content}</p>
                <div className="flex flex-row gap-5 py-5">
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleEdit(post)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                    onClick={() => handleDelete(post.id)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPostPage;
