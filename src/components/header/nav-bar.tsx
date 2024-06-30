import type { QRL } from "@builder.io/qwik"
import { component$ } from "@builder.io/qwik"
import { NavLink } from "../nav-link"
import { MenuButton } from "./menu-button"

interface NavLinkProps {
  navItems: { label: string; href: string }[]
  openMobileMenu: QRL<() => void>
}

export const NavBar = component$(
  ({ navItems, openMobileMenu }: NavLinkProps) => {
    return (
      <nav aria-label="Main Navigation" class="xs:order-1">
        <ul class="hidden xs:flex">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}
        </ul>
        <div class="flex xs:hidden">
          <MenuButton openMobileMenu={openMobileMenu} aria-haspopup="menu" />
        </div>
      </nav>
    )
  },
)
