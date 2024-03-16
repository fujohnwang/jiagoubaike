import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: '架构百科',
    description: '架构百科，架构师的一分钟日课。',
    site: 'https://jiagoubaike.com',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-CN</language>`,
  });
}