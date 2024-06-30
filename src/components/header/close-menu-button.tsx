import type { QRL } from "@builder.io/qwik"
import { component$ } from "@builder.io/qwik"
import { ExitX } from "../icons"

interface CloseMenuButtonProps {
  closeMobileMenu: QRL<() => void>
}

export const CloseMenuButton = component$(
  ({ closeMobileMenu }: CloseMenuButtonProps) => {
    return (
      <button type="button" class="p-6" onClick$={closeMobileMenu}>
        <span class="sr-only">Close menu</span>
        <ExitX class="h-6 w-6" aria-hidden="true" />
      </button>
    )
  },
)
