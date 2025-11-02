/**
 * Calculate estimated reading time for text content
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Object with reading time in minutes and word count
 */
export function calculateReadingTime(
  content: string,
  wordsPerMinute: number = 200
): { minutes: number; words: number; text: string } {
  // Remove markdown syntax and HTML tags for accurate word count
  const plainText = content
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/`[^`]*`/g, "") // Remove inline code
    .replace(/#{1,6}\s/g, "") // Remove headers
    .replace(/[*_~`]/g, "") // Remove formatting
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Convert links to text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "") // Remove images
    .trim();

  // Count words (split by whitespace)
  const words = plainText.split(/\s+/).filter((word) => word.length > 0).length;

  // Calculate reading time
  const minutes = Math.ceil(words / wordsPerMinute);

  // Generate human-readable text
  const text = `${minutes} min read`;

  return { minutes, words, text };
}
