import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { NON_DEFAULT_LOCALES, isLocale, useTranslations, type Locale } from '../../i18n';
import { buildFeedItems } from '../../lib/rss';

export async function getStaticPaths() {
  return NON_DEFAULT_LOCALES.map(locale => ({ params: { locale } }));
}

export async function GET(context: APIContext) {
  const site = context.site;
  if (!site) throw new Error('astro.config site is required for RSS');
  const localeParam = context.params.locale;
  if (!isLocale(localeParam)) throw new Error(`Invalid locale: ${localeParam}`);
  const locale = localeParam as Locale;
  const t = useTranslations(locale);
  return rss({
    title: t('metadata.blogTitle'),
    description: t('metadata.blogDescription'),
    site,
    items: await buildFeedItems(locale, site),
    xmlns: { content: 'http://purl.org/rss/1.0/modules/content/' },
    customData: `<language>${locale}</language>`,
  });
}
