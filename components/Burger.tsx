'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { links } from '@/constants/constants';

const Burger = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-4xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center gap-8 ">
        <SheetTitle className="hidden">Menu</SheetTitle>
        <SheetDescription className="hidden">Description</SheetDescription>
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={`${link.path}`}
              className={`text-xl capitalize font-medium hover:text-accent transition-all duration-200 ${
                pathName === link.path && 'text-accent border-b-2 border-accent'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};

export default Burger;
