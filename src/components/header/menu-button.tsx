import type { QRL } from "@builder.io/qwik"
import { component$ } from "@builder.io/qwik"
import { HorizontalBars } from "../icons"

interface MenuButtonProps {
  openMobileMenu: QRL<() => void>
}

export const MenuButton = component$(({ openMobileMenu }: MenuButtonProps) => {
  return (
    <button
      type="button"
      class="my-auto inline-flex items-center justify-center rounded-md px-3 py-2"
      onClick$={openMobileMenu}
    >
      <span class="sr-only">Open main menu</span>
      <HorizontalBars class="h-6 w-6" aria-hidden="true" />
    </button>
  )
})
