import { Slot, component$ } from "@builder.io/qwik"
import { useDocumentHead } from "@builder.io/qwik-city"
import { PostHeader } from "~/components/header"

export default component$(() => {
  const head = useDocumentHead()

  return (
    <article class="my-12 sm:px-8 lg:mt-20">
      <PostHeader title={head.title} date={head.frontmatter.date} />
      <section class="prose dark:prose-invert">
        <Slot />
      </section>
    </article>
  )
})
