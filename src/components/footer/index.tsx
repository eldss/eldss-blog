import { component$ } from "@builder.io/qwik"

export const Footer = component$(() => {
  return (
    <footer class="flex justify-end px-8 pb-8 dark:text-zinc-50">
      <p>&copy; Evan Douglass</p>
    </footer>
  )
})
