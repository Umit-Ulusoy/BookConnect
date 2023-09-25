import  { useState } from 'react';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

import {AiOutlineLike, AiOutlineShareAlt, AiOutlineComment } from "react-icons/ai"


const Content = () => {
  const [userPosts, setUserPosts] = useState([
    {
      id: 1,
      username: 'kullanici1',
      content: img1,
      likes: 15,
      shares: 7,
    },
    {
      id: 2,
      username: 'kullanici2',
      content: img2,
      likes: 8,
      shares: 3,
    },
    {
      id: 3,
      username: 'kullanici2',
      content: img1,
      likes: 8,
      shares: 3,
    },
    {
      id: 4,
      username: 'kullanici2',
      content: img2,
      likes: 8,
      shares: 3,
    },
  ]);

  const handleLike = (postId) => {
    const updatedPosts = userPosts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setUserPosts(updatedPosts);
  };

  return (
    <div className="w-full bg-[#D0E8ED] rounded-lg h-auto p-4 ">
      {userPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-4 mb-4 h-auto max-h-[600px] rounded-lg shadow-md relative"
        >
          <section className="mb-2 border-b border-solid border-[#155B6A] h-10">
            <span className="font-semibold block" style={{ lineHeight: '2.5rem' }}>
              {post.username}
            </span>
          </section>
          <section className="mb-4 h-auto max-h-[350px] overflow-hidden">
            <img
              src={post.content}
              alt="Gönderi Resmi"
              className="h-auto w-full"
            />
          </section>
          <section className="flex h-12 justify-between px-5 items-center gap-10 border-t border-solid border-[#155B6A]  bottom-4 left-4 right-4">
            <div>
              <button className="text-gray-500" onClick={() => handleLike(post.id)}>
                <AiOutlineLike /> {post.likes}
              </button>
            </div>
            <div>
              <button className="text-gray-700">
                <AiOutlineShareAlt />
              </button>
            </div>
            <div>
              <button className="text-gray-700">
                <AiOutlineComment/>
              </button>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Content;


