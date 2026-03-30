import React from 'react';
import { Layout } from '../Layout';
import { Users, Shield, Building, Settings } from 'lucide-react';
import { Button } from '../ui/Button';

export const AdminLayout = () => {
  const adminLinks = [
    { label: 'Tableau de bord', path: '/admin', icon: <Shield className="w-5 h-5 shrink-0" /> },
    { label: 'Utilisateurs', path: '/admin/users', icon: <Users className="w-5 h-5 shrink-0" /> },
    { label: 'Rôles & Permissions', path: '/admin/roles', icon: <Settings className="w-5 h-5 shrink-0" /> },
    { label: 'Entreprises abonnées', path: '/admin/companies', icon: <Building className="w-5 h-5 shrink-0" /> },
  ];

  const adminActions = (
    <Button variant="primary" size="sm">
      Nouveau Utilisateur
    </Button>
  );

  return <Layout links={adminLinks} actions={adminActions} />;
};
