import Link from 'next/link';
import React from 'react';

import { Button } from './ui/button';
import Nav from './Nav';
import Burger from './Burger';
import LocaleSwitcher from './LocaleSwitcher';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('Header');

  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            sk85<span className="text-accent">web</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-4">
          <LocaleSwitcher />
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>{t('hireMe')}</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden flex">
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
