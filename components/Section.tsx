import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen flex flex-col justify-center py-20 px-4 md:px-10 relative overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
};