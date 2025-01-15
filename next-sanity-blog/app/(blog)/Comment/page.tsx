"use client"
import React, { useState, useEffect } from 'react';

const Comsec: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Array<{ username: string; text: string; id: number }>>([]);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (username.trim() && comment.trim()) {
      const newComment = { username, text: comment, id: Date.now() };
      setComments([newComment, ...comments]);
      setUsername('');
      setComment('');
    }
  };

  const handleDeleteComment = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Comment Section</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Enter your comment"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
      <div>
        {comments.length > 0 ? (
          comments.map((c) => (
            <div
              key={c.id}
              className="mb-2 p-3 bg-white border border-gray-300 rounded shadow-sm"
            >
              <p className="font-semibold">{c.username}</p>
              <p className="text-gray-700">{c.text}</p>
              <button
                className="mt-2 text-red-500 hover:underline"
                onClick={() => handleDeleteComment(c.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};


export default Comsec;