import { $, component$ } from "@builder.io/qwik"
import { DARK, LIGHT, SYSTEM, setTheme } from "~/utils/themeUtils"
import { IconDropdown, type IconDropdownValues } from "../dropdown"
import { Computer, Moon, Sun } from "../icons"

export const ThemeToggle = component$(() => {
  // const updateTheme = $((nextTheme: ThemeOption) => {
  //   if (isBrowser) {
  //     console.log("Changing theme to", nextTheme)
  //     setTheme(nextTheme)
  //   }
  // })
  // TODO: Add selected icon to dropdown label
  const iconStyles = "mr-2 h-6 w-6"
  const values: IconDropdownValues = [
    {
      label: "System",
      value: SYSTEM,
      icon: <Computer class={iconStyles} />,
      onSelect: $(() => setTheme(SYSTEM)),
    },
    {
      label: "Light",
      value: LIGHT,
      icon: <Sun class={iconStyles} />,
      onSelect: $(() => setTheme(LIGHT)),
    },
    {
      label: "Dark",
      value: DARK,
      icon: <Moon class={iconStyles} />,
      onSelect: $(() => setTheme(DARK)),
    },
  ]

  return <IconDropdown menuLabel="Theme" values={values} />
})
