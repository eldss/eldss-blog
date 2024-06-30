import { component$ } from "@builder.io/qwik"

interface CardDescriptionProps {
  description: string
}

export const CardDescription = component$(
  ({ description }: CardDescriptionProps) => {
    return (
      <p class="relative mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    )
  },
)
