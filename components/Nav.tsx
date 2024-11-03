'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { links } from '@/constants/constants';

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-4">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={`${link.path}`}
            className={`capitalize font-medium hover:text-accent transition-all duration-200 ${
              pathName === link.path && 'text-accent border-b-2 border-accent'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
