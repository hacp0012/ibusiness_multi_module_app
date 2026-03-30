import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  hasShadow?: boolean;
}

export const Button = ({ children, className = '', variant = 'primary', size = 'md', hasShadow = false, ...props }: ButtonProps) => {
  const baseStyle = "rounded-full font-medium transition-all flex items-center justify-center gap-2";
  const shadowStyle = hasShadow ? "shadow-md hover:shadow-lg" : "";
  
  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base"
  };

  const variants = {
    primary: "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100",
    secondary: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",
    outline: "bg-transparent border border-gray-600 dark:border-gray-400 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
    ghost: "bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${shadowStyle} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
