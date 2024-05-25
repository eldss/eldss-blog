import {
  $,
  component$,
  useId,
  useSignal,
  type JSX,
  type QRL,
} from "@builder.io/qwik"
import { DropdownItem } from "./dropdown-item"
import { DropdownMenu } from "./dropdown-menu"
import { MenuButton } from "./menu-button"

export interface IconDropdownValue {
  icon: JSX.Element
  label: string
  value: string
  onSelect: QRL<() => void>
}

export type IconDropdownValues = IconDropdownValue[]

interface IconDropdownProps {
  menuLabel: string
  values: IconDropdownValues
  isOpen?: boolean
}

/**
 * A dropdown menu with an icon for each selection. The icon for the currently
 * selected value is displayed in the menu label.
 */
export const IconDropdown = component$(
  ({ menuLabel, values, isOpen = false }: IconDropdownProps) => {
    const open = useSignal(isOpen)
    const buttonId = useId()
    const closeDropdown = $(() => {
      open.value = false
    })
    return (
      <div
        class="relative inline-block dark:text-zinc-50"
        document:onClick$={(event, currentTarget) => {
          const clicked = event.target as HTMLElement
          if (clicked.id !== buttonId && !currentTarget.contains(clicked)) {
            open.value = false
          }
        }}
      >
        <MenuButton
          label={menuLabel}
          open={open.value}
          id={buttonId}
          onClick$={() => {
            open.value = !open.value
          }}
        />

        <DropdownMenu open={open.value} labeledById={buttonId}>
          {values.map((item) => (
            <DropdownItem
              key={item.value}
              onClick$={[item.onSelect, closeDropdown]}
            >
              <span class="flex items-center gap-1">
                {item.icon}
                {item.label}
              </span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </div>
    )
  },
)
