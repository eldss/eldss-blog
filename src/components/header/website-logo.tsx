import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

export const WebsiteLogo = component$(() => {
  return (
    <div class="flex items-center" aria-label="Logo">
      <Link class="mx-3 my-4 font-serif text-xl" href="/">
        <strong>eldss</strong>
      </Link>
    </div>
  )
})
