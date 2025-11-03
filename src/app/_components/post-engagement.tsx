"use client";

import { LikeButton } from "@/app/_components/like-button";
import { CommentForm } from "@/app/_components/comment-form";

type PostEngagementProps = {
  postSlug: string;
};

export function PostEngagement({ postSlug }: PostEngagementProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Like Section */}
      <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 pb-8">
        <LikeButton postSlug={postSlug} />
      </div>

      {/* Comment Section */}
      <CommentForm postSlug={postSlug} />
    </div>
  );
}
