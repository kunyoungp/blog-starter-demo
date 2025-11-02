import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("w-full h-full object-cover", {
        "group-hover:scale-105 transition-transform duration-500": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-mindlogic-100 to-blue-100 dark:from-slate-800 dark:to-slate-900">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title} className="block h-full group">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
