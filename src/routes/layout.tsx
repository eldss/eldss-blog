import { component$, Slot } from "@builder.io/qwik"
import type { RequestHandler } from "@builder.io/qwik-city"
import { Footer } from "~/components/footer"
import { WebsiteHeader } from "~/components/header"

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  })
}

export default component$(() => {
  return (
    <div class="container mx-auto mt-12 flex max-w-4xl flex-col px-4 antialiased sm:px-8">
      <WebsiteHeader />
      <main class="h-full">
        <Slot />
      </main>
      <Footer />
    </div>
  )
})
