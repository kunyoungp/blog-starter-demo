import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="mb-20 md:mb-32">
      <div className="relative group bg-gradient-to-br from-mindlogic-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-4xl overflow-hidden border border-mindlogic-100 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-mindlogic-200/20 rounded-full blur-3xl"></div>
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-mindlogic-600 text-white text-xs font-bold rounded-full">
              FEATURED POST
            </div>
            <h3 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              <Link
                href={`/posts/${slug}`}
                className="hover:text-mindlogic-600 dark:hover:text-mindlogic-400 transition-colors duration-300"
              >
                {title}
              </Link>
            </h3>
            <div className="flex items-center gap-2 text-sm text-mindlogic-600 dark:text-mindlogic-400">
              <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {excerpt}
            </p>
            <div className="flex items-center justify-between pt-6">
              <Avatar name={author.name} picture={author.picture} />
              <Link
                href={`/posts/${slug}`}
                className="inline-flex items-center gap-2 font-semibold text-mindlogic-600 dark:text-mindlogic-400 hover:text-mindlogic-700 dark:hover:text-mindlogic-300 transition-colors group"
              >
                Read Full Story
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg order-first md:order-last">
            <CoverImage title={title} src={coverImage} slug={slug} />
          </div>
        </div>
      </div>
    </section>
  );
}
