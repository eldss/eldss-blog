import { component$ } from "@builder.io/qwik"
import { formatDate } from "~/utils/formatDate"

interface PostHeaderProps {
  /** Post title */
  title: string
  /** Post date. Must resemble yyyy-mm-dd (i.e. 1990-12-18) */
  date: string
}

export const PostHeader = component$(({ title, date }: PostHeaderProps) => {
  return (
    <header class="flex flex-col-reverse">
      <h1 class="text-text-dark dark:text-text-light mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <time
        dateTime={date}
        class="flex items-center text-base text-zinc-400 dark:text-zinc-500"
      >
        <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        <span class="ml-3">{formatDate(date)}</span>
      </time>
    </header>
  )
})
