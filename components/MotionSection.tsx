import React from 'react';
import { motion } from 'framer-motion';

const MotionSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2, easy: 'linear' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
