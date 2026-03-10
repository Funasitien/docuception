import { loader, type InferPageType } from 'fumadocs-core/source';
import { docs } from 'fumadocs-mdx:collections/server';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: '/docs',
  icon(icon) {
    if (!icon) {
      const DefaultLucide = (icons as any).FileText || (icons as any).File || null;
      return createElement(DefaultLucide);
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
