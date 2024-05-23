// If you change these, also change them in setInitialTheme.js
// There is duplication due to SSR issues
export const LOCAL_STORAGE_KEY = "theme"
export const SYSTEM = "system"
export const DARK = "dark"
export const LIGHT = "light"

export type ThemeOption = typeof SYSTEM | typeof LIGHT | typeof DARK

export function applyLightTheme() {
  document.documentElement.classList.remove(DARK)
}

export function applyDarkTheme() {
  document.documentElement.classList.add(DARK)
}

export function applySystemTheme() {
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? applyDarkTheme()
    : applyLightTheme()
}

export function setTheme(theme: ThemeOption) {
  // Save theme choice
  localStorage.setItem(LOCAL_STORAGE_KEY, theme)

  // Apply theme
  switch (theme) {
    case DARK:
      applyDarkTheme()
      break
    case LIGHT:
      applyLightTheme()
      break
    case SYSTEM:
      applySystemTheme()
      break
  }
}
