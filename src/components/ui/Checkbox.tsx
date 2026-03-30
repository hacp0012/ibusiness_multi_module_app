import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Checkbox = ({ checked, onChange, label, disabled, className = '', ...props }: CheckboxProps) => {
  return (
    <label className={`flex items-center gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          {...props}
        />
        <div className={`
          w-5 h-5 rounded border transition-colors flex items-center justify-center
          ${checked 
            ? 'bg-black border-black text-white dark:bg-white dark:border-white dark:text-black' 
            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 peer-hover:border-black dark:peer-hover:border-white'}
        `}>
          {checked && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
        </div>
      </div>
      {label && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>}
    </label>
  );
};
