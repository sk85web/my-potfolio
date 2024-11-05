import { createNavigation } from 'next-intl/navigation';
import { localePrefix, pathnames, locales } from './config';

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation({
    locales,
    pathnames,
    localePrefix,
  });
