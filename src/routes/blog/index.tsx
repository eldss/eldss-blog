import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { PageHeader } from "~/components/header"
import { PostList } from "~/components/post-list"
import { buildDocumentHead } from "~/utils/buildDocumentHead"

export default component$(() => {
  return (
    <>
      <PageHeader title="Blog">
        <p>
          Here you will find a mix of articles on topics related to software
          engineering and technology. Whether you're trying to solve a specific
          problem, or just curious about one of the subjects covered, I hope you
          find something useful here. Enjoy!
        </p>
      </PageHeader>
      <PostList />
    </>
  )
})

export const head: DocumentHead = buildDocumentHead({
  title: "Blog | eldss",
  description:
    "Explore articles on software engineering and technology created by software engineer Evan Douglass.",
})
