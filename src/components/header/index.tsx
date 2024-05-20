import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { NavLink } from "~/components/nav-link"

export const Header = component$(() => {
  return (
    <header class="flex flex-row justify-between dark:text-zinc-50">
      <div class="flex items-center" aria-label="Logo">
        <Link class="my-4 font-serif text-xl" href="/">
          <strong>Evan Douglass</strong>
        </Link>
      </div>

      <nav class="my-auto" aria-label="Main Navigation">
        <ul class="flex flex-row">
          <li>
            <NavLink href="/blog/">Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
})
