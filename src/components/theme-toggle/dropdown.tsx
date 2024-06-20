import type { QRL } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"

interface DropdownProps {
  closeDropdown: QRL<() => void>
}

export const Dropdown = component$(({ closeDropdown }: DropdownProps) => {
  return (
    <div
      class="relative inline-block dark:text-zinc-50"
      document:onClick$={(event, currentTarget) => {
        const clicked = event.target as HTMLElement
        if (!currentTarget.contains(clicked)) {
          closeDropdown()
        }
      }}
    >
      <Slot />
    </div>
  )
})
