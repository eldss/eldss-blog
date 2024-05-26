import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { NavLink } from "~/components/nav-link"
import { ThemeToggle } from "../theme-toggle"

export const WebsiteHeader = component$(() => {
  return (
    <header class="flex flex-row justify-between dark:text-zinc-50">
      <div class="flex items-center" aria-label="Logo">
        <Link class="my-4 font-serif text-xl" href="/">
          <strong>eldss</strong>
        </Link>
      </div>

      <div class="my-auto inline-flex">
        <nav aria-label="Main Navigation">
          <ul class="flex">
            <li>
              <NavLink href="/blog/">Posts</NavLink>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
})
