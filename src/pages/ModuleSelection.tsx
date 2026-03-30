import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Car, Package, ArrowRight, LogOut, Moon, Sun, Hexagon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const ModuleSelection = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const modules = [
    {
      id: 'admin',
      title: 'Administration',
      description: 'Gérez les utilisateurs, les rôles et les entreprises abonnées.',
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      bgIcon: 'bg-blue-50 dark:bg-blue-900/20',
      path: '/admin'
    },
    {
      id: 'transports',
      title: 'Transports',
      description: 'Gérez les recettes des taxis, les chauffeurs et les dépannages.',
      icon: <Car className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      bgIcon: 'bg-emerald-50 dark:bg-emerald-900/20',
      path: '/transports'
    },
    {
      id: 'inventory',
      title: 'Inventaire & Ventes',
      description: 'Gérez les dépôts, stocks, ventes, clients, fournisseurs et dettes.',
      icon: <Package className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      bgIcon: 'bg-amber-50 dark:bg-amber-900/20',
      path: '/inventory'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fc] dark:bg-gray-950 transition-colors duration-200 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <div className="bg-gray-900 dark:bg-white p-2 rounded-xl shrink-0 shadow-sm">
            <Hexagon className="w-6 h-6 text-white dark:text-gray-900" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">iBanKo</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Button variant="outline" onClick={() => navigate('/auth/login')} className="flex items-center gap-2 rounded-full px-6">
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Déconnexion</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
              Bienvenue sur iBanKo
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Sélectionnez le module auquel vous souhaitez accéder pour commencer votre session.
            </p>
          </div>

          <Card className="p-2 md:p-4">
            <div className="flex flex-col gap-2">
              {modules.map((module) => (
                <div 
                  key={module.id}
                  onClick={() => navigate(module.path)}
                  className="group flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
                >
                  <div className={`w-12 h-12 shrink-0 rounded-xl ${module.bgIcon} flex items-center justify-center mr-4`}>
                    {module.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">
                      {module.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm pr-4">
                      {module.description}
                    </p>
                  </div>
                  
                  <div className="ml-2 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700 transition-colors shadow-sm">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};
