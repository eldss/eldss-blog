import { component$ } from "@builder.io/qwik"
import type { Post } from "~/constants/posts"
import { Card } from "./card"
import { CardTime } from "./card-time"

export const ArticlePreviewCard = component$(
  ({ slug, title, description, date }: Post) => {
    return (
      <article class="md:grid md:grid-cols-4 md:items-baseline">
        <Card title={title} slug={slug} date={date} description={description} />
        {/* Time for large screen */}
        <CardTime date={date} withDecoration={false} />
      </article>
    )
  },
)
