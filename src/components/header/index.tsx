import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

export const Header = component$(() => {
  return (
    <header>
      <div class="logo" aria-label="Logo">
        <Link href="/">My Qwik Blog</Link>
      </div>

      <nav aria-label="Main Navigation">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
})
