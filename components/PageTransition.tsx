'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 0.7 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.8, ease: 'linear' },
          }}
          className="w-screen h-screen fixed top-0 bg-primary pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
