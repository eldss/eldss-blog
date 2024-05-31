import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import type { Post } from "~/constants/posts"
import { formatDate } from "~/utils/formatDate"
import { ChevronRight } from "../icons"

export const ArticlePreviewCard = component$(
  ({ slug, title, description, date }: Post) => {
    return (
      <article class="md:grid md:grid-cols-4 md:items-baseline">
        {/* Card */}
        <div class="group relative flex flex-col items-start md:col-span-3">
          {/* Card Title */}
          <h2 class="text-text-dark dark:text-text-light text-base font-semibold tracking-tight">
            {/* Card Link */}
            <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-200/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-app dark:bg-zinc-800/50" />
            <Link href={`/blog/${slug}`}>
              <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-app" />
              <span class="relative z-10">{title}</span>
            </Link>
          </h2>
          {/* "Eyebrow" or Time */}
          <time
            dateTime={date}
            class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 md:hidden dark:text-zinc-500"
          >
            <span
              class="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            </span>
            {formatDate(date)}
          </time>
          {/* Card Description */}
          <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          {/* Call to action */}
          <div
            aria-hidden="true"
            class="relative z-10 mt-4 flex items-center text-sm font-medium text-sky-500"
          >
            Read article
            <ChevronRight class="ml-1 h-4 w-4 stroke-current" />
          </div>
        </div>
        {/* Time for large screen */}
        <time
          dateTime={date}
          class="relative z-10 order-first mb-3 mt-1 hidden text-sm text-zinc-400 md:col-span-1 md:block dark:text-zinc-500"
        >
          {formatDate(date)}
        </time>
      </article>
    )
  },
)
