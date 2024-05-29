import { Slot, component$ } from "@builder.io/qwik"

interface PageHeaderProps {
  /** Page title */
  title: string
}

export const PageHeader = component$(({ title }: PageHeaderProps) => {
  return (
    <header>
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        {title}
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        <Slot />
      </p>
    </header>
  )
})
