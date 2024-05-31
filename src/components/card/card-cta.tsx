import { component$ } from "@builder.io/qwik"
import { ChevronRight } from "../icons"

export const CardCallToAction = component$(() => {
  return (
    <div
      aria-hidden="true"
      class="relative z-10 mt-4 flex items-center text-sm font-medium text-sky-500"
    >
      Read article
      <ChevronRight class="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
})
