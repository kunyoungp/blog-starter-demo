import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { TagFilter } from "@/app/_components/tag-filter";
import { getAllPosts, getAllTags, getPostsByTag } from "@/lib/api";

type Props = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function Index(props: Props) {
  const searchParams = await props.searchParams;
  const selectedTag = searchParams.tag;

  const allPosts = selectedTag
    ? getPostsByTag(selectedTag)
    : getAllPosts();

  const allTags = getAllTags();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {allTags.length > 0 && <TagFilter allTags={allTags} />}
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
      </Container>
    </main>
  );
}
