/**
 * Sets the initial theme upon website load. Everything here needs to be self
 * contained in this file so it is not imported into a Qwik file, which will
 * cause it to fail on the server. There is duplication from `themeUtils`,
 * which is the file used in Qwik components.
 */

const LOCAL_STORAGE_KEY = "theme"
const SYSTEM = "system"
const DARK = "dark"
const LIGHT = "light"

const watcher = window.matchMedia("(prefers-color-scheme: dark)")

function setSystemTheme() {
  watcher.matches
    ? document.documentElement.classList.add(DARK)
    : document.documentElement.classList.remove(DARK)
}

// Listen for system theme changes
watcher.onchange = () => {
  console.log("System theme changed")
  const theme = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (theme === SYSTEM) {
    setSystemTheme()
  }
}

// Set initial theme
const theme = localStorage.getItem(LOCAL_STORAGE_KEY)
switch (theme) {
  case DARK:
    document.documentElement.classList.add(DARK)
    break
  case LIGHT:
    document.documentElement.classList.remove(DARK)
    break
  case SYSTEM:
  default:
    setSystemTheme()
    localStorage.setItem(LOCAL_STORAGE_KEY, SYSTEM)
    break
}
