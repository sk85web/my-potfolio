import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const locales = ['en', 'ru'] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  '/': '/',
  '/resume': '/resume',
  '/work': '/work',
  '/contact': '/contact',
};

export const localePrefix: LocalePrefix = 'always';
