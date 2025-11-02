import { Tag } from "./tag";

type Props = {
  tags: string[];
  linkable?: boolean;
};

/**
 * TagList component for displaying a list of tags
 * Optionally makes tags clickable links to filter by tag
 */
export function TagList({ tags, linkable = false }: Props) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          href={linkable ? `/?tag=${encodeURIComponent(tag)}` : undefined}
        />
      ))}
    </div>
  );
}
