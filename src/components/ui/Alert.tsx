import React, { useState } from 'react';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  className?: string;
}

export const Alert = ({ variant = 'info', title, children, dismissible = false, className = '' }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const variants = {
    info: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-800 dark:text-blue-300', icon: Info, iconColor: 'text-blue-500' },
    success: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-800', text: 'text-emerald-800 dark:text-emerald-300', icon: CheckCircle, iconColor: 'text-emerald-500' },
    warning: { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', text: 'text-orange-800 dark:text-orange-300', icon: AlertTriangle, iconColor: 'text-orange-500' },
    error: { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', text: 'text-red-800 dark:text-red-300', icon: XCircle, iconColor: 'text-red-500' },
  };

  const active = variants[variant];
  const Icon = active.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className={`flex p-4 rounded-xl border ${active.bg} ${active.border} ${className}`}
        >
          <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${active.iconColor}`} />
          <div className={`ml-3 flex-1 ${active.text}`}>
            {title && <h3 className="text-sm font-medium mb-1">{title}</h3>}
            <div className="text-sm opacity-90">{children}</div>
          </div>
          {dismissible && (
            <button onClick={() => setIsVisible(false)} className={`ml-auto pl-3 shrink-0 ${active.iconColor} opacity-70 hover:opacity-100 transition-opacity`}>
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
