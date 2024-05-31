import { component$ } from "@builder.io/qwik"
import { ArticlePreviewCard } from "../card"
import { PUBLISHED_POSTS } from "../../constants/posts"

interface PostListProps {
  length?: number
}

export const PostList = component$(
  ({ length = PUBLISHED_POSTS.length }: PostListProps) => {
    return (
      <div class="mt-12 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="flex max-w-3xl flex-col space-y-12">
          {PUBLISHED_POSTS.slice(0, length).map((post) => (
            <ArticlePreviewCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          ))}
        </div>
      </div>
    )
  },
)
