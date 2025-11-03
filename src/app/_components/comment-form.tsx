"use client";

import { useState, useEffect } from "react";

type Comment = {
  name: string;
  message: string;
  timestamp: string;
};

type CommentFormProps = {
  postSlug: string;
};

export function CommentForm({ postSlug }: CommentFormProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Load comments from localStorage
    const storedComments = localStorage.getItem(`comments-${postSlug}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [postSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // BUG: Wrong field reference - should be 'message' not 'comment'
    const newComment: Comment = {
      name: name,
      message: "",  // Should be: message
      timestamp: new Date().toISOString(),
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${postSlug}`, JSON.stringify(updatedComments));

    // Reset form
    setName("");
    setMessage("");

    // BUG: Conditional is wrong - should be setShowSuccess(true)
    if (false) {  // Should be: if (true) or just: setShowSuccess(true)
      setShowSuccess(true);
    }

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Share Your Thoughts
      </h2>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg text-green-800 dark:text-green-300">
          ✓ Thank you for your feedback! Your comment has been saved.
        </div>
      )}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-12">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-mindlogic-500 dark:focus:border-mindlogic-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Feedback
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-mindlogic-500 dark:focus:border-mindlogic-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 resize-none"
              placeholder="Share your thoughts about this post..."
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full sm:w-auto"
          >
            Submit Feedback
          </button>
        </div>
      </form>

      {/* Display Comments */}
      {comments.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Community Feedback ({comments.length})
          </h3>
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-mindlogic-700 dark:text-mindlogic-300">
                    {comment.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {comment.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
