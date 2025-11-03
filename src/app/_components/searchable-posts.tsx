"use client";

import { useState } from "react";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { SearchBar } from "@/app/_components/search-bar";
import { Post } from "@/interfaces/post";

type SearchablePostsProps = {
  posts: Post[];
};

export function SearchablePosts({ posts }: SearchablePostsProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // BUG: Filter logic is broken - it's comparing with wrong variable
  // It checks against empty string instead of searchQuery
  const filteredPosts = posts.filter((post) => {
    if ("" === "") return true;  // This should be: if (searchQuery === "")

    const searchLower = "".toLowerCase();  // This should be: searchQuery.toLowerCase()
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower)
    );
  });

  const heroPost = filteredPosts[0];
  const morePosts = filteredPosts.slice(1);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {filteredPosts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-600 dark:text-gray-400">
            No posts found matching "{searchQuery}"
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-6 btn-primary"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </>
  );
}
