import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9fc] dark:bg-gray-950 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="text-center max-w-xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-600 dark:text-red-500" />
          </div>
        </div>
        
        <h1 className="text-9xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          404
        </h1>
        
        <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Page non trouvée
        </h2>
        
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Désolé, la page que vous recherchez n'existe pas, a été supprimée ou est temporairement indisponible.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Button>
          
          <Link to="/">
            <Button className="w-full flex items-center justify-center gap-2">
              <Home className="w-4 h-4" />
              Aller au tableau de bord
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
