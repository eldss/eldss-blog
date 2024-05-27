/**
 * Represents a blog post.
 */
export interface Post {
  slug: string
  title: string
  description: string
}

/**
 * This is a list of blog posts that will be displayed on the /blog/posts page.
 * Add new posts on top of the list to display them in the order they are added.
 */
export const POSTS: Readonly<Post[]> = [
  {
    slug: "build-a-theme-toggle-in-qwik",
    title: "Build a Theme Toggle in Qwik",
    description:
      "Learn how to build a theme toggle component using the Qwik frontend framework.",
  },
  {
    slug: "creating-a-blog-with-qwik",
    title: "Creating a Personal Blog Website with Qwik",
    description:
      "Learn how to create a personal blog website using the Qwik frontend framework.",
  },
]
