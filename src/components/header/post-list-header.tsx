import { component$ } from "@builder.io/qwik"

export const BlogHeader = component$(() => {
  return (
    <header>
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Tech Tips &amp; Tutorials
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Welcome to my blog! Here, you will find a mix of articles on topics
        related to software engineering and technology. Whether you're trying to
        solve a specific problem, or just curious about one of the subjects
        covered, I hope you find something useful here.
      </p>
    </header>
  )
})
