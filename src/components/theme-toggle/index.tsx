import {
  $,
  component$,
  useId,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik"
import type { ThemeOption } from "~/utils/themeUtils"
import {
  DARK,
  LIGHT,
  LOCAL_STORAGE_KEY,
  SYSTEM,
  setTheme,
} from "~/utils/themeUtils"
import { Computer, Moon, Sun } from "../icons"
import { Dropdown } from "./dropdown"
import { DropdownItem } from "./dropdown-item"
import { DropdownMenu } from "./dropdown-menu"
import { MenuButton } from "./menu-button"

export const ThemeToggle = component$(() => {
  const selectedTheme = useSignal<ThemeOption>()
  const isOpen = useSignal(false)
  const id = useId()

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      const theme = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (theme) {
        selectedTheme.value = theme as ThemeOption
      }
    },
    { strategy: "document-ready" },
  )

  const closeDropdown = $(() => {
    isOpen.value = false
  })

  const handleThemeChange = $((theme: ThemeOption) => {
    setTheme(theme)
    selectedTheme.value = theme
  })

  return (
    <Dropdown btnId={id} closeDropdown={closeDropdown}>
      <MenuButton
        id={id}
        selection={selectedTheme.value}
        open={isOpen.value}
        onClick$={() => {
          isOpen.value = !isOpen.value
        }}
      ></MenuButton>
      <DropdownMenu btnId={id} open={isOpen.value}>
        <DropdownItem
          onClick$={[closeDropdown, $(() => handleThemeChange(SYSTEM))]}
        >
          <Computer q:slot="icon" />
          <div q:slot="text">System</div>
        </DropdownItem>
        <DropdownItem
          onClick$={[closeDropdown, $(() => handleThemeChange(LIGHT))]}
        >
          <Sun q:slot="icon" />
          <div q:slot="text">Light</div>
        </DropdownItem>
        <DropdownItem
          onClick$={[closeDropdown, $(() => handleThemeChange(DARK))]}
        >
          <Moon q:slot="icon" />
          <div q:slot="text">Dark</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
})
