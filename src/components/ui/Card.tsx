import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-md hover:shadow-lg border border-gray-50 dark:border-gray-800 transition-all ${className}`}>
    {children}
  </div>
);
