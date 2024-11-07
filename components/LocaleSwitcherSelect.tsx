'use client';

import { usePathname, useRouter } from '@/navigation';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { ReactNode, useTransition } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

const LocaleSwitcherSelect: React.FC<Props> = ({
  children,
  defaultValue,
  label,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error: Unreachable code error
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <div className="flex items-center gap-2">
      <label className="relative">
        <p className="sr-only">{label}</p>
        <Select
          defaultValue={defaultValue}
          onValueChange={onSelectChange}
          disabled={isPending}
        >
          <SelectTrigger>
            <SelectValue placeholder={defaultValue} />
          </SelectTrigger>
          <SelectContent>
            {React.Children.map(children, (child) => (
              <SelectItem value={(child as React.ReactElement).props.value}>
                {(child as React.ReactElement).props.children}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>
      <div className="w-8 h-6 relative">
        <Image
          src={`/assets/${defaultValue}.png`}
          alt="language"
          className="object-cover"
          fill
          sizes="32px"
        />
      </div>
    </div>
  );
};

export default LocaleSwitcherSelect;
