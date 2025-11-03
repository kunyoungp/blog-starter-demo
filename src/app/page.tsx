import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { SearchablePosts } from "@/app/_components/searchable-posts";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        <SearchablePosts posts={allPosts} />
      </Container>
    </main>
  );
}
