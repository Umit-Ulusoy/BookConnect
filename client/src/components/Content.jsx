import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineShareAlt, AiOutlineComment } from 'react-icons/ai';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const Content = () => {
  const [userPosts, setUserPosts] = useState([
    {
      id: 1,
      username: 'kullanici1',
      content: img1,
      likes: 15,
      shares: 7,
      comments: [],
    },
    {
      id: 2,
      username: 'kullanici2',
      content: img2,
      likes: 8,
      shares: 3,
      comments: [],
    },
    {
      id: 3,
      username: 'kullanici2',
      content: img1,
      likes: 8,
      shares: 3,
      comments: [],
    },
    {
      id: 4,
      username: 'kullanici2',
      content: img2,
      likes: 8,
      shares: 3,
      comments: [],
    },
  ]);

  const [commentInputVisible, setCommentInputVisible] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleLike = (postId) => {
    const updatedPosts = userPosts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setUserPosts(updatedPosts);
  };

  const handleComment = (postId) => {
    if (commentText.trim() === '') {
      return;
    }

    const updatedPosts = userPosts.map((post) => {
      if (post.id === postId) {
        const updatedPost = { ...post, comments: [...post.comments, commentText] };
        console.log('Yeni Yorum:', commentText);
        return updatedPost;
      }
      return post;
    });
    setUserPosts(updatedPosts);
    setCommentText('');
    setCommentInputVisible(false);
  };

  return (
    <div className="w-full bg-gray-200 rounded-lg p-4 ">
      {userPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-4 mb-4 rounded-lg shadow-md relative"
        >
          <div className="mb-2 border-b border-solid border-gray-400">
            <span className="font-semibold block text-lg">
              {post.username}
            </span>
          </div>
          <div className="mb-4">
            <img
              src={post.content}
              alt="Gönderi Resmi"
              className="w-full"
            />
          </div>
          <section className="flex justify-between py-4 items-center">
            <button onClick={() => handleLike(post.id)}>
              <AiOutlineLike /> {post.likes}
            </button>
            <button>
              <AiOutlineShareAlt/>
            </button> 

            <button onClick={() => setCommentInputVisible(true)}>
              <AiOutlineComment />
            </button>
          </section>
          {commentInputVisible && (
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleComment(post.id);
                }}
              >
                <label>
                  <input
                    className="w-full py-2"
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Yorumunuzu yazın..."
                  />
                </label>
                <button type="submit">Yorum Yap</button>
              </form>
            </div>
          )}
          <div className="mt-2">
            {post.comments.map((comment, index) => (
              <div key={index}>{comment}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;



