import { component$ } from "@builder.io/qwik"
import { ArticlePreviewCard } from "~/components/card"
import { POSTS } from "./(posts)/posts"
import { PostListHeader } from "~/components/header"

export default component$(() => {
  return (
    <>
      <PostListHeader />
      <div class="mt-16 sm:mt-20 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="flex max-w-3xl flex-col space-y-16">
          {POSTS.map((post) => (
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
    </>
  )
})
