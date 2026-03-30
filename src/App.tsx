import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AdminLayout } from './components/layouts/AdminLayout';
import { TransportsLayout } from './components/layouts/TransportsLayout';
import { InventoryLayout } from './components/layouts/InventoryLayout';
import { Dashboard } from './pages/Dashboard';
import { UIKit } from './pages/UIKit';
import { Login } from './pages/auth/Login';
import { NotFound } from './pages/NotFound';
import { ModuleSelection } from './pages/ModuleSelection';
import { AdminDashboard } from './pages/admin';
import { TransportsDashboard } from './pages/transports';
import { InventoryDashboard } from './pages/inventory';
import { Support } from './pages/app/Support';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/modules" element={<ModuleSelection />} />
            
            {/* Admin Module */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="support" element={<Support />} />
            </Route>
            
            {/* Transports Module */}
            <Route path="/transports" element={<TransportsLayout />}>
              <Route index element={<TransportsDashboard />} />
              <Route path="support" element={<Support />} />
            </Route>
            
            {/* Inventory Module */}
            <Route path="/inventory" element={<InventoryLayout />}>
              <Route index element={<InventoryDashboard />} />
              <Route path="support" element={<Support />} />
            </Route>

            {/* Legacy/Default Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/modules" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="uikit" element={<UIKit />} />
              <Route path="app/support" element={<Support />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}
