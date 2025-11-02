import Link from "next/link";

type Props = {
  tag: string;
  href?: string;
};

/**
 * Tag component for displaying blog post tags
 * Can be rendered as a link or plain badge
 */
export function Tag({ tag, href }: Props) {
  const className =
    "inline-block px-3 py-1 text-xs font-semibold rounded-full bg-mindlogic-100 dark:bg-mindlogic-900/30 text-mindlogic-700 dark:text-mindlogic-300 hover:bg-mindlogic-200 dark:hover:bg-mindlogic-800/50 transition-colors duration-200";

  if (href) {
    return (
      <Link href={href} className={className}>
        #{tag}
      </Link>
    );
  }

  return <span className={className}>#{tag}</span>;
}
