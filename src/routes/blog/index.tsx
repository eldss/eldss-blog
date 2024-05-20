import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { POSTS } from "./(posts)/posts"

export default component$(() => {
  return (
    <div class="prose dark:prose-invert">
      <h1>Posts</h1>
      <ul>
        {POSTS.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
})
