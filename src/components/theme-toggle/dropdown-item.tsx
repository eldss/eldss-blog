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
        class="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none active:bg-gray-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:active:bg-zinc-700"
        {...props}
      >
        <span class="flex items-center gap-1 text-sm">
          <div class="mr-2 h-5 w-5">
            <Slot name="icon" />
          </div>
          <Slot name="text" />
        </span>
      </button>
    </li>
  )
})
