import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

interface CardTitleProps {
  title: string
  slug: string
}

export const CardTitle = component$(({ title, slug }: CardTitleProps) => {
  return (
    <h2 class="text-text-dark dark:text-text-light text-base font-semibold tracking-tight">
      {/* Card Link */}
      <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-200/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-app dark:bg-zinc-800/50" />
      <Link href={`/blog/${slug}`}>
        <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-app" />
        <span class="relative z-10">{title}</span>
      </Link>
    </h2>
  )
})
