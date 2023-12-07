import { serverQueryContent } from '#content/server'

import RSS from 'rss'
const runtimeConfig = useRuntimeConfig()
const feed = new RSS({
  title: 'Seminars Datascience Lab',
  site_url: runtimeConfig.public.baseURL,
  feed_url: `${runtimeConfig.public.baseURL}/rss.xml`,
})

export default defineEventHandler(async (event) => {
const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
const blogPosts = docs//.filter((doc) => doc?._path?.includes('/blog'))

for (const doc of blogPosts) {
  feed.item({
    title: doc.title ?? '-',
    url: `${runtimeConfig.public.baseURL}${doc._path}`,
    date: doc.date,
    description: doc.description,
  })
}

const feedString = feed.xml({ indent: true })
event.res.setHeader('content-type', 'text/xml')
event.res.end(feedString)
})
