import { component$ } from "@builder.io/qwik"
import { ArticlePreviewCard } from "~/components/card"
import { PageHeader } from "~/components/header"
import { POSTS } from "./(posts)/posts"

export default component$(() => {
  return (
    <>
      <PageHeader title="Blog">
        Here, you will find a mix of articles on topics related to software
        engineering and technology. Whether you're trying to solve a specific
        problem, or just curious about one of the subjects covered, I hope you
        find something useful here. Enjoy!
      </PageHeader>
      <div class="mt-14 sm:mt-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
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
