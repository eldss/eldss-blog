import { component$ } from "@builder.io/qwik"
import { type DocumentHead } from "@builder.io/qwik-city"
import { PageHeader } from "~/components/header"
import { PostList } from "~/components/post-list"
import { buildDocumentHead } from "~/utils/buildDocumentHead"

export default component$(() => {
  return (
    <div>
      <PageHeader title="Welcome Home">
        <p>
          Welcome to my personal website and blog. Below you will find an
          overview of my most recent blog posts and projects. Please explore and
          enjoy!
        </p>
      </PageHeader>
      <h2 class="mb-6 mt-8 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl dark:text-text-light">
        Latest Posts
      </h2>
      <PostList length={3} />
    </div>
  )
})

export const head: DocumentHead = buildDocumentHead({
  title: "eldss",
  description:
    "The personal website and blog of software engineer Evan Douglass.",
})
