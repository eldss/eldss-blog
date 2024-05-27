import { component$, useId, useVisibleTask$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { NavLink } from "~/components/nav-link"
import { ThemeToggle } from "../theme-toggle"

export const WebsiteHeader = component$(() => {
  const id = useId()

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const navHeightPx = 64
    let lastScrollY = window.scrollY
    const showHideNavbar = () => {
      const navbar = document.getElementById(id)
      if (navbar) {
        if (
          // Appx where the title starts
          window.scrollY > navHeightPx * 1.3 &&
          window.scrollY > lastScrollY
        ) {
          // Scrolling down
          navbar.style.transform = "translateY(-16rem)"
        } else {
          // Scrolling up
          navbar.style.transform = "translateY(0)"
        }
        lastScrollY = window.scrollY
      }
    }
    window.addEventListener("scroll", showHideNavbar)

    cleanup(() => {
      window.removeEventListener("scroll", showHideNavbar)
    })
  })

  return (
    <header
      id={id}
      class="fixed left-0 top-0 w-full bg-zinc-50/90 px-4 backdrop-blur-md transition-transform duration-300 sm:px-8 dark:bg-zinc-900/80 dark:text-zinc-50"
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
                <NavLink href="/blog/">Posts</NavLink>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
})
