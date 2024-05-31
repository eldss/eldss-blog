import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { Link } from "@builder.io/qwik-city"
import { PageHeader } from "~/components/header"
import ImgEvanWedding from "~/images/Evan_Wedding.jpg?jsx"
import { buildDocumentHead } from "~/utils/buildDocumentHead"

export default component$(() => {
  return (
    <PageHeader title="About">
      <div class="prose dark:prose-invert">
        <ImgEvanWedding
          alt="Wedding photo of Evan Douglass in Positano Italy"
          class="float-start m-0 my-2 mr-4 w-1/3"
        />
        <p>
          I'm Evan Douglass. I am a software engineer with a passion for
          learning and exploring new ideas. I have many interests, but if
          nothing else, I am passionate about learning. I created this website
          as a platform to share my thoughts and experiences, and to learn in
          the most effective way possible, by teaching. I hope to slowly expand
          this blog to cover a wide range of topics. In the meantime, please
          enjoy the content I have created so far. You can find a list of
          articles over in the <Link href="/blog/">blog</Link>. I hope you find
          something interesting and useful for your needs.
        </p>
      </div>
    </PageHeader>
  )
})

export const head: DocumentHead = buildDocumentHead({
  title: "About | eldss",
  description:
    "Learn more about software engineer and author of eldss.com, Evan Douglass.",
})
