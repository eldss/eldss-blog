import { Slot, component$, type ButtonHTMLAttributes } from "@builder.io/qwik"

type DropdownItemProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "role" | "class"
>

export const DropdownItem = component$((props: DropdownItemProps) => {
  return (
    <li>
      <button
        type="button"
        role="menuitem"
        class="block w-full px-4 py-2 text-left hover:bg-gray-100  focus:bg-gray-100 focus:outline-none active:rounded-app active:bg-gray-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:active:bg-zinc-700"
        {...props}
      >
        <Slot />
      </button>
    </li>
  )
})
