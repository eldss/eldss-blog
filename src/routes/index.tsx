import { component$ } from "@builder.io/qwik"
import { Link, type DocumentHead } from "@builder.io/qwik-city"

export default component$(() => {
  return (
    <div class="prose dark:prose-invert">
      <h1>Welcome to my Blog!</h1>
      <p>
        There isn't much here yet, so why not check out my{" "}
        <Link href="/blog/">posts</Link>?
      </p>
    </div>
  )
})

export const head: DocumentHead = {
  title: "My Qwik Blog",
  meta: [
    {
      name: "description",
      content: "A blog for all things Qwik",
    },
  ],
}
