import { Slot, component$ } from "@builder.io/qwik"

interface PageHeaderProps {
  /** Page title */
  title: string
}

export const PageHeader = component$(({ title }: PageHeaderProps) => {
  return (
    <header>
      <h1 class="text-text-dark dark:text-text-light text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <div class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        <Slot />
      </div>
    </header>
  )
})
