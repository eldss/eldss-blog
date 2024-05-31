import { $, component$, useSignal } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { NavLink } from "~/components/nav-link"
import { ThemeToggle } from "../theme-toggle"

const NAV_HEIGHT_PX = 64

export const WebsiteHeader = component$(() => {
  const lastScrollY = useSignal(0)
  const navBarRef = useSignal<HTMLElement>()

  const showHideNavbar = $(() => {
    if (navBarRef.value) {
      if (
        // Let user scroll a bit before hiding the navbar
        window.scrollY > NAV_HEIGHT_PX * 1.3 &&
        window.scrollY > lastScrollY.value
      ) {
        // Scrolling down
        navBarRef.value.style.transform = "translateY(-16rem)"
      } else {
        // Scrolling up
        navBarRef.value.style.transform = "translateY(0)"
      }
      lastScrollY.value = window.scrollY
    }
  })

  return (
    <header
      ref={navBarRef}
      class="fixed left-0 top-0 w-full bg-zinc-50/90 px-4 backdrop-blur-md transition-transform duration-300 sm:px-8 dark:bg-zinc-900/80 dark:text-zinc-50"
      window:onScroll$={showHideNavbar}
    >
      <div class="mx-auto flex max-w-4xl justify-between">
        <div class="flex items-center" aria-label="Logo">
          <Link class="my-4 font-serif text-xl" href="/">
            <strong>eldss</strong>
          </Link>
        </div>
        <div class="my-auto inline-flex">
          <nav aria-label="Main Navigation">
            <ul class="flex">
              <li>
                <NavLink href="/blog/">Blog</NavLink>
              </li>
              <li>
                <NavLink href="/about/">About</NavLink>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
})
