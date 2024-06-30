import { $, component$, useSignal } from "@builder.io/qwik"
import { NavLink } from "../nav-link"
import { ThemeToggle } from "../theme-toggle"
import { CloseMenuButton } from "./close-menu-button"
import { NavBar } from "./nav-bar"
import { WebsiteLogo } from "./website-logo"

const NAV_HEIGHT_PX = 64

const navItems = [
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
]

const commonMenuStyles =
  "fixed bg-zinc-50/90 dark:bg-zinc-900/80 dark:text-zinc-50 backdrop-blur-md"

export const WebsiteHeader = component$(() => {
  const lastScrollY = useSignal(0)
  const navBarRef = useSignal<HTMLElement>()
  const mobileMenuOpen = useSignal(false)

  const openMobileMenu = $(() => {
    mobileMenuOpen.value = true
  })

  const closeMobileMenu = $(() => {
    mobileMenuOpen.value = false
  })

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
    <>
      <header
        ref={navBarRef}
        class={[
          "left-0 top-0 w-full px-4 transition-transform duration-300 sm:px-8",
          commonMenuStyles,
        ]}
        window:onScroll$={showHideNavbar}
      >
        <div class="mx-auto flex max-w-4xl justify-between">
          <WebsiteLogo />
          <div class="my-auto inline-flex">
            <div class="xs:order-2">
              <ThemeToggle />
            </div>
            <NavBar navItems={navItems} openMobileMenu={openMobileMenu} />
          </div>
        </div>
      </header>
      {mobileMenuOpen.value && (
        <div
          class={[
            "max-w-s inset-y-0 right-0 z-10 w-72 max-w-[80%] animate-drop-down-in xs:hidden",
            commonMenuStyles,
          ]}
          aria-expanded={mobileMenuOpen.value}
          // Close the mobile menu when clicking outside of it
          document:onClick$={(event, currentTarget) => {
            const clicked = event.target as HTMLElement
            if (!currentTarget.contains(clicked)) {
              closeMobileMenu()
            }
          }}
        >
          <div class="flex items-center justify-end">
            <CloseMenuButton closeMobileMenu={closeMobileMenu} />
          </div>
          <div onClick$={closeMobileMenu}>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                class="block py-4 pl-6 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  )
})
