import { component$, type ButtonHTMLAttributes } from "@builder.io/qwik"
import { ChevronDown, ChevronUp } from "../icons"

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  open: boolean
  id: string
}

export const MenuButton = component$(
  ({ label, open, id, ...props }: MenuButtonProps) => {
    const iconStyles = "h-4 w-4 pt-[2px] text-gray-400"
    return (
      <button
        type="button"
        class="block px-3 py-2"
        id={id}
        aria-expanded={open}
        aria-haspopup="menu"
        {...props}
      >
        <span class="flex flex-row items-center justify-center gap-1">
          {label}
          {open ? (
            <ChevronUp class={iconStyles} />
          ) : (
            <ChevronDown class={iconStyles} />
          )}
        </span>
      </button>
    )
  },
)
