"use client";

import { useState, useEffect } from "react";

type LikeButtonProps = {
  postSlug: string;
};

export function LikeButton({ postSlug }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // Load likes from localStorage
    const storedLikes = localStorage.getItem(`likes-${postSlug}`);
    const storedHasLiked = localStorage.getItem(`hasLiked-${postSlug}`);

    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
    if (storedHasLiked) {
      setHasLiked(storedHasLiked === "true");
    }
  }, [postSlug]);

  const handleLike = () => {
    // BUG: This sets the wrong variable - should be setLikes
    const newLikes = likes + 1;
    setLikes(likes);  // Should be: setLikes(newLikes)
    setHasLiked(true);

    // BUG: Saves the old value instead of new value
    localStorage.setItem(`likes-${postSlug}`, likes.toString());  // Should be: newLikes.toString()
    localStorage.setItem(`hasLiked-${postSlug}`, "true");
  };

  return (
    <div className="flex items-center gap-4 py-8">
      <button
        onClick={handleLike}
        disabled={hasLiked}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
          hasLiked
            ? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            : "bg-mindlogic-600 hover:bg-mindlogic-700 text-white shadow-lg hover:shadow-xl hover:scale-105"
        }`}
      >
        <svg
          className="w-6 h-6"
          fill={hasLiked ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span>{hasLiked ? "Liked!" : "Like this post"}</span>
      </button>

      <div className="text-2xl font-bold text-mindlogic-600 dark:text-mindlogic-400">
        {likes} {likes === 1 ? "like" : "likes"}
      </div>
    </div>
  );
}
