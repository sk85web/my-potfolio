'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className="w-full h-full my-4 xl:my-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: 'easeIn' }}
      >
        <div className="w-[298px] h-[298px] xl:w-[450px] xl:h-[450px] relative">
          <Image
            src="/assets/photo.jpg"
            alt="my photo"
            fill
            priority
            quality={100}
            className="object-contain rounded-[50%]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
