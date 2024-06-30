import { component$ } from "@builder.io/qwik"

export const Footer = component$(() => {
  return (
    <footer class="my-12 text-xs text-text-dark sm:my-24 sm:px-8 dark:text-text-light">
      <p>&copy; 2024 Evan Douglass. All rights reserved.</p>
      <p>
        <a href="mailto:evandouglass@eldss.dev">evandouglass@eldss.dev</a>
      </p>
    </footer>
  )
})
