import React from 'react';
import { Layout } from '../Layout';
import { Package, ShoppingCart, Users, Truck, ArrowRightLeft, DollarSign, FileText } from 'lucide-react';
import { Button } from '../ui/Button';

export const InventoryLayout = () => {
  const inventoryLinks = [
    { label: 'Tableau de bord', path: '/inventory', icon: <Package className="w-5 h-5 shrink-0" /> },
    { label: 'Dépôts & Stocks', path: '/inventory/stocks', icon: <Package className="w-5 h-5 shrink-0" /> },
    { label: 'Ventes', path: '/inventory/sales', icon: <ShoppingCart className="w-5 h-5 shrink-0" /> },
    { label: 'Clients', path: '/inventory/customers', icon: <Users className="w-5 h-5 shrink-0" /> },
    { label: 'Fournisseurs', path: '/inventory/suppliers', icon: <Truck className="w-5 h-5 shrink-0" /> },
    { label: 'Dettes & Créances', path: '/inventory/debts', icon: <DollarSign className="w-5 h-5 shrink-0" /> },
    { label: 'Transferts', path: '/inventory/transfers', icon: <ArrowRightLeft className="w-5 h-5 shrink-0" /> },
    { label: 'Dépenses', path: '/inventory/expenses', icon: <FileText className="w-5 h-5 shrink-0" /> },
  ];

  const inventoryActions = (
    <Button variant="primary" size="sm">
      Nouvelle Vente
    </Button>
  );

  return <Layout links={inventoryLinks} actions={inventoryActions} />;
};
