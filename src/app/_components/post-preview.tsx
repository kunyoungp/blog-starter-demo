import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { TagList } from "./tag-list";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  tags?: string[];
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}: Props) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700 card-hover shadow-md hover:shadow-xl">
      <div className="overflow-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 text-sm text-mindlogic-600 dark:text-mindlogic-400 mb-4">
          <DateFormatter dateString={date} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
          <Link
            href={`/posts/${slug}`}
            className="text-gray-900 dark:text-gray-100 group-hover:text-mindlogic-600 dark:group-hover:text-mindlogic-400 transition-colors duration-300"
          >
            {title}
          </Link>
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        {tags && tags.length > 0 && (
          <div className="mb-6">
            <TagList tags={tags} linkable={true} />
          </div>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
          <Avatar name={author.name} picture={author.picture} />
          <Link
            href={`/posts/${slug}`}
            className="text-sm font-semibold text-mindlogic-600 dark:text-mindlogic-400 hover:text-mindlogic-700 dark:hover:text-mindlogic-300 transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
