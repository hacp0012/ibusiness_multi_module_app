import React from 'react';
import { Layout } from '../Layout';
import { Car, DollarSign, Wrench, Users, FileText } from 'lucide-react';
import { Button } from '../ui/Button';

export const TransportsLayout = () => {
  const transportsLinks = [
    { label: 'Tableau de bord', path: '/transports', icon: <Car className="w-5 h-5 shrink-0" /> },
    { label: 'Taxis & Véhicules', path: '/transports/vehicles', icon: <Car className="w-5 h-5 shrink-0" /> },
    { label: 'Chauffeurs', path: '/transports/drivers', icon: <Users className="w-5 h-5 shrink-0" /> },
    { label: 'Recettes', path: '/transports/revenue', icon: <DollarSign className="w-5 h-5 shrink-0" /> },
    { label: 'Dépannages', path: '/transports/maintenance', icon: <Wrench className="w-5 h-5 shrink-0" /> },
    { label: 'Rapports', path: '/transports/reports', icon: <FileText className="w-5 h-5 shrink-0" /> },
  ];

  const transportsActions = (
    <Button variant="primary" size="sm">
      Nouvelle Recette
    </Button>
  );

  return <Layout links={transportsLinks} actions={transportsActions} />;
};
