import type { ButtonHTMLAttributes } from "@builder.io/qwik"
import { component$ } from "@builder.io/qwik"
import { LIGHT, DARK, SYSTEM, type ThemeOption } from "~/utils/themeUtils"
import { ChevronDown, ChevronUp, Computer, Moon, Sun } from "../icons"

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  open: boolean
  selection?: ThemeOption
}

export const MenuButton = component$(
  ({ id, open, selection, ...props }: MenuButtonProps) => {
    return (
      <button
        type="button"
        class="block px-3 py-2"
        id={id}
        aria-expanded={open}
        aria-haspopup="menu"
        {...props}
      >
        <span class="flex flex-row items-center justify-center gap-2">
          Theme
          <div class="h-5 w-5">
            {selection === SYSTEM ? (
              <Computer />
            ) : selection === LIGHT ? (
              <Sun />
            ) : selection === DARK ? (
              <Moon />
            ) : null}
          </div>
          {open ? (
            <ChevronUp class="animate-rotate-180-to-position h-4 w-4" />
          ) : (
            <ChevronDown class="h-4 w-4" />
          )}
        </span>
      </button>
    )
  },
)
