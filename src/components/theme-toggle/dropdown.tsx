import type { QRL } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"

interface DropdownProps {
  closeDropdown: QRL<() => void>
  btnId: string
}

export const Dropdown = component$(
  ({ closeDropdown, btnId }: DropdownProps) => {
    return (
      <div
        class="relative inline-block dark:text-zinc-50"
        document:onClick$={(event, currentTarget) => {
          const clicked = event.target as HTMLElement
          if (clicked.id !== btnId && !currentTarget.contains(clicked)) {
            closeDropdown()
          }
        }}
      >
        <Slot />
      </div>
    )
  },
)
