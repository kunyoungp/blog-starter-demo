import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  readingTime?: string;
};

export function PostHeader({ title, coverImage, date, author, readingTime }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg flex items-center gap-3 text-gray-600 dark:text-gray-400">
          <DateFormatter dateString={date} />
          {readingTime && (
            <>
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <span className="text-mindlogic-600 dark:text-mindlogic-400 font-medium">
                {readingTime}
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
