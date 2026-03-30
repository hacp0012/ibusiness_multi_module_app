import React, { useState } from 'react';
import { Search, Bell, MessageSquare, Settings, ChevronDown, Menu, Briefcase, User } from 'lucide-react';
import { Dropdown } from './ui/Dropdown';

interface HeaderProps {
  onOpenMobileMenu?: () => void;
  actions?: React.ReactNode;
}

export const Header = ({ onOpenMobileMenu, actions }: HeaderProps) => {
  const [account, setAccount] = useState('personal');

  const accountOptions = [
    { label: 'Personal Account', value: 'personal', icon: <User className="w-4 h-4" /> },
    { label: 'Business Account', value: 'business', icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
  <header className="flex items-center justify-between mb-6 md:mb-8">
    <div className="flex items-center gap-4">
      <button 
        className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        onClick={onOpenMobileMenu}
      >
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Hello Steward 👋</h1>
      <div className="hidden md:block">
        <Dropdown 
          items={accountOptions}
          value={account}
          onChange={setAccount}
          placeholder="Choose Account"
        />
      </div>
    </div>
    <div className="flex items-center gap-2 md:gap-3">
      {actions && (
        <div className="flex items-center gap-2 mr-2">
          {actions}
        </div>
      )}
      <button className="hidden sm:flex p-2.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 shadow-sm transition-colors">
        <Search className="w-5 h-5" />
      </button>
      <button className="p-2 md:p-2.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 shadow-sm transition-colors relative">
        <Bell className="w-5 h-5" />
        <span className="absolute top-1.5 md:top-2 right-1.5 md:right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
      </button>
      <button className="hidden sm:flex p-2.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 shadow-sm transition-colors">
        <MessageSquare className="w-5 h-5" />
      </button>
      <button className="p-2 md:p-2.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 shadow-sm transition-colors">
        <Settings className="w-5 h-5" />
      </button>
    </div>
  </header>
  );
};
