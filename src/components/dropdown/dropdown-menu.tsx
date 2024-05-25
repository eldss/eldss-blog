import { Slot, component$ } from "@builder.io/qwik"

interface DropdownMenuProps {
  open: boolean
  labeledById: string
}

export const DropdownMenu = component$(
  ({ open, labeledById }: DropdownMenuProps) => {
    return (
      <ul
        class="absolute right-0 z-10 m-0 mt-1 w-40 origin-top-right list-none rounded-app bg-white p-0 shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black/90 dark:shadow-none dark:ring-zinc-700"
        role="menu"
        hidden={!open}
        aria-expanded={open}
        aria-orientation="vertical"
        aria-labelledby={labeledById}
      >
        <Slot />
      </ul>
    )
  },
)
