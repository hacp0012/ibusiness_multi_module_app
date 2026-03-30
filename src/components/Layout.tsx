import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, SidebarLink } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  links?: SidebarLink[];
  actions?: React.ReactNode;
}

export const Layout = ({ links, actions }: LayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f9fc] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 overflow-hidden transition-colors duration-200">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        links={links}
      />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Header 
            onOpenMobileMenu={() => setIsMobileMenuOpen(true)} 
            actions={actions}
          />
          <Outlet />
        </div>
      </main>
    </div>
  );
};
