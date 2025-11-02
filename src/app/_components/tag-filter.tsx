"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Tag } from "./tag";

type Props = {
  allTags: string[];
};

/**
 * TagFilter component for filtering posts by tag
 * Shows all available tags and highlights the active one
 */
export function TagFilter({ allTags }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag");

  const handleTagClick = (tag: string) => {
    if (activeTag === tag) {
      // If clicking the active tag, clear the filter
      router.push("/");
    } else {
      // Otherwise, set the new filter
      router.push(`/?tag=${encodeURIComponent(tag)}`);
    }
  };

  const handleClearFilter = () => {
    router.push("/");
  };

  if (allTags.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          Filter by tag:
        </span>
        <button
          onClick={handleClearFilter}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
            !activeTag
              ? "bg-mindlogic-600 text-white"
              : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
          }`}
        >
          All Posts
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
              activeTag === tag
                ? "bg-mindlogic-600 text-white"
                : "bg-mindlogic-100 dark:bg-mindlogic-900/30 text-mindlogic-700 dark:text-mindlogic-300 hover:bg-mindlogic-200 dark:hover:bg-mindlogic-800/50"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
}
