import { $, component$ } from "@builder.io/qwik"
import { isBrowser } from "@builder.io/qwik/build"
import {
  DARK,
  LIGHT,
  SYSTEM,
  setTheme,
  type ThemeOption,
} from "~/utils/themeUtils"

export const ThemeToggle = component$(() => {
  const updateTheme = $((nextTheme: ThemeOption) => {
    if (isBrowser) {
      console.log("Changing theme to", nextTheme)
      setTheme(nextTheme)
    }
  })

  return (
    <>
      <button onClick$={() => updateTheme(DARK)}>Dark</button>
      <button onClick$={() => updateTheme(LIGHT)}>Light</button>
      <button onClick$={() => updateTheme(SYSTEM)}>System</button>
    </>
  )
})
