import React from 'react';
import { Card } from '../../components/ui/Card';
import { HelpCircle, Mail, Phone, MessageSquare, FileText, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const Support = () => {
  const supportChannels = [
    {
      title: 'Centre d\'aide',
      description: 'Consultez notre documentation complète et nos tutoriels pour apprendre à utiliser iBanKo.',
      icon: <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      action: 'Consulter la doc',
    },
    {
      title: 'Support par Email',
      description: 'Envoyez-nous vos questions techniques ou demandes d\'assistance par courrier électronique.',
      icon: <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      action: 'Envoyer un email',
    },
    {
      title: 'Chat en direct',
      description: 'Discutez en temps réel avec l\'un de nos conseillers pour une aide immédiate.',
      icon: <MessageSquare className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      action: 'Démarrer le chat',
    },
    {
      title: 'Assistance Téléphonique',
      description: 'Disponible du lundi au vendredi, de 9h à 18h pour les urgences critiques.',
      icon: <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />,
      action: 'Appeler le support',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Support & Assistance</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Besoin d'aide avec iBanKo ? Notre équipe est là pour vous accompagner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {supportChannels.map((channel, index) => (
          <Card key={index} className="flex flex-col h-full">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                {channel.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{channel.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {channel.description}
                </p>
              </div>
            </div>
            <div className="mt-auto pt-4">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                {channel.action}
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-600 dark:bg-blue-700 text-white border-none p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Vous ne trouvez pas ce que vous cherchez ?</h2>
            <p className="text-blue-100">
              Nos experts sont disponibles pour des sessions de formation personnalisées.
            </p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 shrink-0">
            Prendre rendez-vous
          </Button>
        </div>
      </Card>

      <div className="pt-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Questions Fréquentes (FAQ)</h3>
        <div className="space-y-4">
          {[
            { q: "Comment réinitialiser mon mot de passe ?", a: "Pour des raisons de sécurité, contactez votre administrateur système qui pourra générer un nouveau mot de passe pour vous." },
            { q: "Puis-je accéder à iBanKo sur mobile ?", a: "Oui, iBanKo est entièrement responsive et accessible depuis n'importe quel navigateur mobile." },
            { q: "Comment ajouter un nouvel utilisateur ?", a: "Rendez-vous dans le module Administration > Utilisateurs et cliquez sur 'Nouveau Utilisateur'." },
          ].map((faq, i) => (
            <div key={i} className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-500" />
                {faq.q}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
