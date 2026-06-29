import { getAllPosts } from "@/lib/posts";
import videos from "../../../content/videos.json";

const SITE_URL = "https://perfectseptem.com";

export async function GET() {
  const posts = getAllPosts();

  const postItems = posts.map((post) => ({
    title: post.title,
    link: `${SITE_URL}/posts/${post.slug}`,
    description: post.excerpt,
    date: new Date(post.date),
  }));

  const videoItems = videos.map((video) => ({
    title: video.title,
    link: `https://www.youtube.com/watch?v=${video.id}`,
    description: video.description,
    date: new Date(video.date),
  }));

  const allItems = [...postItems, ...videoItems].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  const items = allItems
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.date.toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Perfect Septem</title>
    <link>${SITE_URL}</link>
    <description>Sharing the Good News</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
