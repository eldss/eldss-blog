import { Slot, component$ } from "@builder.io/qwik"
import { useDocumentHead } from "@builder.io/qwik-city"
import { formatDate } from "~/utils/formatDate"

export default component$(() => {
  const head = useDocumentHead()

  return (
    <article class="my-12 sm:px-8 lg:mt-20">
      <header class="flex flex-col-reverse">
        <h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {head.title}
        </h1>
        <time
          dateTime={head.frontmatter.date}
          class="flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span class="ml-3">{formatDate(head.frontmatter.date)}</span>
        </time>
      </header>
      <section class="prose dark:prose-invert">
        <Slot />
      </section>
    </article>
  )
})
