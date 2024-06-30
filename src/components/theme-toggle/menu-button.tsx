import type { ButtonHTMLAttributes } from "@builder.io/qwik"
import { component$ } from "@builder.io/qwik"
import { ChevronDown, ChevronUp, Computer, Moon, Sun } from "../icons"
import { DARK, LIGHT, SYSTEM, type ThemeOption } from "./themeHelpers"

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
        class="my-auto block px-3 py-2"
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
            <ChevronUp class="h-4 w-4" />
          ) : (
            <ChevronDown class="h-4 w-4" />
          )}
        </span>
      </button>
    )
  },
)
