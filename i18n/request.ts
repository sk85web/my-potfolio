import { getRequestConfig } from 'next-intl/server';
import { locales } from '../config';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as (typeof locales)[number]))
    notFound();

  return {
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
