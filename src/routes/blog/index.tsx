import { component$ } from "@builder.io/qwik"
import { PageHeader } from "~/components/header"
import { PostList } from "~/components/post-list"

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
