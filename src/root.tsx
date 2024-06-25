import { component$ } from "@builder.io/qwik"
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city"
import { RouterHead } from "./components/router-head/router-head"

import "./global.css"

const themeStartupCode = `
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
`

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        {/* Initial theme set here to avoid flash of unstyled content */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={themeStartupCode}
        ></script>
      </head>
      <body lang="en" class="bg-zinc-50 dark:bg-zinc-900">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  )
})
