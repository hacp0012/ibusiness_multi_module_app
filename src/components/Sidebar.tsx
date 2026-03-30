import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { CreditCard, LayoutDashboard, PieChart, Activity, User, HelpCircle, Settings, Moon, Sun, LogOut, Upload, ChevronDown, Layers, ChevronRight, ChevronLeft, X, Shield, Car, Package } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { Dropdown } from './ui/Dropdown';

export interface SidebarLink {
  label: string;
  path: string;
  icon: React.ReactNode;
  subLinks?: { label: string; path: string }[];
}

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileMenuOpen?: boolean;
  onCloseMobileMenu?: () => void;
  links?: SidebarLink[];
}

export const Sidebar = ({ isCollapsed, onToggleCollapse, isMobileMenuOpen, onCloseMobileMenu, links = [] }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = () => {
    if (onCloseMobileMenu) onCloseMobileMenu();
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const moduleOptions = [
    { label: 'Administration', value: '/admin', icon: <Shield className="w-4 h-4" /> },
    { label: 'Transports', value: '/transports', icon: <Car className="w-4 h-4" /> },
    { label: 'Inventaire', value: '/inventory', icon: <Package className="w-4 h-4" /> },
  ];

  // Determine current module based on path
  const currentModule = moduleOptions.find(m => location.pathname.startsWith(m.value))?.value || '';
  const supportPath = currentModule ? `${currentModule}/support` : '/app/support';

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      md:relative md:translate-x-0
      ${isCollapsed ? 'md:w-20' : 'md:w-64'}
      w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col h-full py-6 px-4 shrink-0
    `}>
      <button 
        onClick={onToggleCollapse}
        className="hidden md:flex absolute -right-3 top-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1 text-gray-500 hover:text-gray-900 dark:hover:text-white shadow-sm z-10"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Mobile Close Button */}
      <button 
        onClick={onCloseMobileMenu}
        className="md:hidden absolute right-4 top-6 text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <X className="w-6 h-6" />
      </button>

      <div className={`flex items-center gap-2 px-2 mb-6 ${isCollapsed ? 'md:justify-center' : ''}`}>
        <div className="bg-black dark:bg-white p-1.5 rounded-lg shrink-0">
          <CreditCard className="w-5 h-5 text-white dark:text-black" />
        </div>
        {!isCollapsed && <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap overflow-hidden">iBanKo</span>}
      </div>

      {!isCollapsed && (
        <div className="mb-8 px-2">
          <Dropdown
            items={moduleOptions}
            value={currentModule}
            onChange={(val) => navigate(val)}
            placeholder="Changer de module"
            className="w-full"
          />
        </div>
      )}

      <div className={`flex flex-col items-center mb-8 ${isCollapsed ? 'md:hidden' : ''}`}>
        <div className="relative">
          <img
            src="https://i.pravatar.cc/150?u=steward"
            alt="Darrell Steward"
            className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-sm"
          />
          <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 p-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-600">
            <Upload className="w-3 h-3 text-gray-500 dark:text-gray-300" />
          </div>
        </div>
        <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">Darrell Steward</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500">UIUX Design</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto overflow-x-hidden">
        {!isCollapsed && <p className="px-4 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 md:block">Menu</p>}
        
        {links.map((link, index) => (
          <div key={index}>
            {link.subLinks ? (
              <>
                <button 
                  onClick={() => toggleSubMenu(link.label)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors ${isCollapsed ? 'md:justify-center md:px-0' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span className={isCollapsed ? 'md:hidden' : ''}>{link.label}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSubMenu === link.label ? 'rotate-180' : ''} ${isCollapsed ? 'md:hidden' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openSubMenu === link.label && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className={`overflow-hidden ${isCollapsed ? 'md:hidden' : ''}`}
                    >
                      <div className="pl-11 pr-4 py-2 space-y-2">
                        {link.subLinks.map((subLink, subIndex) => (
                          <NavLink 
                            key={subIndex}
                            to={subLink.path} 
                            onClick={handleLinkClick} 
                            className={({isActive}) => `block text-sm transition-colors ${isActive ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                          >
                            {subLink.label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <NavLink 
                to={link.path} 
                onClick={handleLinkClick} 
                className={({isActive}) => `flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-colors ${isActive ? 'text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800' : 'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'} ${isCollapsed ? 'md:justify-center md:px-0' : ''}`}
              >
                {link.icon}
                <span className={isCollapsed ? 'md:hidden' : ''}>{link.label}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto space-y-1 pt-6 border-t border-gray-100 dark:border-gray-800">
        <NavLink 
          to={supportPath} 
          onClick={handleLinkClick} 
          className={({isActive}) => `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors ${isActive ? 'text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 font-medium' : 'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'} ${isCollapsed ? 'md:justify-center md:px-0' : ''}`}
        >
          <HelpCircle className="w-5 h-5 shrink-0" />
          <span className={isCollapsed ? 'md:hidden' : ''}>Support</span>
        </NavLink>
        <a href="#" onClick={handleLinkClick} className={`flex items-center gap-3 px-4 py-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors ${isCollapsed ? 'md:justify-center md:px-0' : ''}`}>
          <Settings className="w-5 h-5 shrink-0" />
          <span className={isCollapsed ? 'md:hidden' : ''}>Setting</span>
        </a>
        
        <button 
          onClick={toggleTheme}
          className={`w-full flex items-center justify-between px-4 py-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors ${isCollapsed ? 'md:justify-center md:px-0' : ''}`}
        >
          <div className="flex items-center gap-3">
            {theme === 'dark' ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />}
            <span className={isCollapsed ? 'md:hidden' : ''}>Theme</span>
          </div>
          <div className={`w-8 h-4 rounded-full relative transition-colors ${theme === 'dark' ? 'bg-white' : 'bg-gray-200'} ${isCollapsed ? 'md:hidden' : ''}`}>
            <div className={`w-3 h-3 bg-black dark:bg-gray-900 rounded-full absolute top-0.5 shadow-sm transition-all ${theme === 'dark' ? 'left-4' : 'left-0.5'}`}></div>
          </div>
        </button>

        <NavLink onClick={handleLinkClick} to="/auth/login" className={`flex items-center gap-3 px-4 py-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors mt-4 ${isCollapsed ? 'md:justify-center md:px-0' : ''}`}>
          <LogOut className="w-5 h-5 shrink-0" />
          <span className={isCollapsed ? 'md:hidden' : ''}>Sign out</span>
        </NavLink>
      </div>
    </aside>
  );
};
