import { Slot, component$ } from "@builder.io/qwik"
import { Link, useLocation, type LinkProps } from "@builder.io/qwik-city"

// See https://qwik.dev/docs/cookbook/nav-link/
// Ensure href ends in a slash to match the current URL.
export const NavLink = component$((props: LinkProps) => {
  const location = useLocation()
  const toPathname = props.href ?? ""
  const locationPathname = location.url.pathname

  const startSlashPosition =
    toPathname !== "/" && toPathname.startsWith("/")
      ? toPathname.length - 1
      : toPathname.length
  const endSlashPosition =
    toPathname !== "/" && toPathname.endsWith("/")
      ? toPathname.length - 1
      : toPathname.length
  const isActive =
    locationPathname === toPathname ||
    (locationPathname.endsWith(toPathname) &&
      (locationPathname.charAt(endSlashPosition) === "/" ||
        locationPathname.charAt(startSlashPosition) === "/"))

  return (
    <Link
      {...props}
      class={[
        props.class || "",
        "relative block px-3 py-2 transition",
        isActive
          ? "text-sky-600 dark:text-sky-400"
          : "hover:text-sky-600 dark:hover:text-sky-400",
      ]}
    >
      <Slot />
      {isActive && (
        <span class="absolute inset-x-1 bottom-0 h-[2px] bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0" />
      )}
    </Link>
  )
})
