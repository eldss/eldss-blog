import { component$ } from "@builder.io/qwik"
import { formatDate } from "~/utils/formatDate"

interface CardTimeProps {
  date: string
  withDecoration: boolean
}

export const CardTime = component$(
  ({ date, withDecoration }: CardTimeProps) => {
    return (
      <time
        dateTime={date}
        class={[
          "relative order-first mb-3 text-sm text-zinc-400 dark:text-zinc-500",
          withDecoration
            ? "flex items-center pl-3.5 md:hidden"
            : "mt-1 hidden md:col-span-1 md:block",
        ]}
      >
        {withDecoration && (
          <span
            class="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          </span>
        )}
        {formatDate(date)}
      </time>
    )
  },
)
