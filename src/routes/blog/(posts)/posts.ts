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
    slug: "creating-a-blog-with-qwik",
    title: "Creating a Blog Website with Qwik",
    description:
      "Learn how to create a blog website using the Qwik frontend framework.",
  },
]
