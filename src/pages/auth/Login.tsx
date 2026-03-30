import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Checkbox } from '../../components/ui/Checkbox';
import { Hexagon, Mail, Lock, ArrowRight, X, AlertCircle } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    navigate('/modules');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col md:flex-row transition-colors duration-200 overflow-hidden">
      {/* Left Side: Decorative & Text */}
      <div className="hidden md:flex md:w-1/2 bg-blue-50 dark:bg-gray-900 relative items-center justify-center p-12 overflow-hidden border-r border-gray-100 dark:border-gray-800">
        {/* Animated Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-400/20 dark:bg-emerald-600/10 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[80px]"
        />

        <div className="relative z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-xl mb-8 border border-gray-100 dark:border-gray-700">
              <Hexagon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Gérez votre entreprise avec <span className="text-blue-600 dark:text-blue-400">iBanKo</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              La plateforme tout-en-un pour l'administration, les transports et la gestion d'inventaire. Simple, rapide et sécurisée.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm backdrop-blur-sm">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">100%</div>
                <div className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider font-semibold">Sécurisé</div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm backdrop-blur-sm">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">24/7</div>
                <div className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider font-semibold">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-6 lg:px-24 bg-[#f8f9fc] dark:bg-gray-950 relative">
        {/* Mobile Logo */}
        <div className="md:hidden flex justify-center mb-8">
          <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center shadow-lg">
            <Hexagon className="w-8 h-8 text-white dark:text-gray-900" />
          </div>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
            Bon retour parmi nous
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Veuillez entrer vos identifiants pour accéder à votre espace.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 py-8 px-8 shadow-xl rounded-3xl border border-gray-100 dark:border-gray-800"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Adresse Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500"
                    placeholder="nom@entreprise.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onChange={setRememberMe}
                  label="Se souvenir de moi"
                />

                <button 
                  type="button"
                  onClick={() => setIsForgotPasswordOpen(true)}
                  className="text-sm font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  Oublié ?
                </button>
              </div>

              <div>
                <Button type="submit" hasShadow className="w-full py-4 text-base flex justify-center items-center gap-2">
                  Se connecter
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </motion.div>

          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Pas encore de compte ?{' '}
            <Link to="/auth/register" className="font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400">
              Contactez votre administrateur
            </Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Dialog */}
      <AnimatePresence>
        {isForgotPasswordOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-100 dark:border-gray-800 relative"
            >
              <button 
                onClick={() => setIsForgotPasswordOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Mot de passe oublié ?
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Pour des raisons de sécurité, la réinitialisation du mot de passe n'est pas automatique. Veuillez contacter votre administrateur système pour obtenir un nouveau mot de passe.
              </p>
              
              <div className="flex justify-end">
                <Button onClick={() => setIsForgotPasswordOpen(false)}>
                  Compris
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
