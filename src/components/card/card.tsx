import { component$ } from "@builder.io/qwik"
import { CardCallToAction } from "./card-cta"
import { CardDescription } from "./card-description"
import { CardTime } from "./card-time"
import { CardTitle } from "./card-title"
import type { Post } from "~/constants/posts"

export const Card = component$(({ title, slug, date, description }: Post) => {
  return (
    <div class="group relative flex flex-col items-start md:col-span-3">
      <CardTitle title={title} slug={slug} />
      <CardTime date={date} withDecoration={true} />
      <CardDescription description={description} />
      <CardCallToAction />
    </div>
  )
})
