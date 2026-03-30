import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Dialog } from '../components/ui/Dialog';
import { Tooltip } from '../components/ui/Tooltip';
import { Chart } from '../components/ui/Chart';
import { Badge } from '../components/ui/Badge';
import { Alert } from '../components/ui/Alert';
import { Switch } from '../components/ui/Switch';
import { Checkbox } from '../components/ui/Checkbox';
import { DropdownMenu } from '../components/ui/DropdownMenu';
import { Chip } from '../components/ui/Chip';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { useToast } from '../contexts/ToastContext';
import { Download, Trash2, Settings, User, LogOut, Bell, CheckCircle, AlertTriangle, Info, XCircle, Star } from 'lucide-react';

const sampleChartData = [
  { name: 'Mon', value1: 400, value2: 240 },
  { name: 'Tue', value1: 300, value2: 139 },
  { name: 'Wed', value1: 200, value2: 980 },
  { name: 'Thu', value1: 278, value2: 390 },
  { name: 'Fri', value1: 189, value2: 480 },
  { name: 'Sat', value1: 239, value2: 380 },
  { name: 'Sun', value1: 349, value2: 430 },
];

export const UIKit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const { addToast } = useToast();

  const handleToast = (type: 'success' | 'error' | 'warning' | 'info') => {
    const messages = {
      success: 'Action completed successfully!',
      error: 'An error occurred while saving.',
      warning: 'Please check your connection.',
      info: 'A new update is available.',
    };
    addToast(messages[type], type);
  };

  const dropdownItems = [
    { label: 'Profile', icon: User, onClick: () => console.log('Profile clicked') },
    { label: 'Settings', icon: Settings, onClick: () => console.log('Settings clicked') },
    { label: 'Notifications', icon: Bell, onClick: () => console.log('Notifications clicked') },
    { label: 'Logout', icon: LogOut, onClick: () => console.log('Logout clicked'), danger: true },
  ];

  return (
    <div className="space-y-12 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">UI Kit Components</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">A collection of reusable components built with Tailwind CSS and Framer Motion.</p>
      </div>

      {/* Buttons */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Buttons (with scale effect)</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="primary">
            <Download className="w-4 h-4" /> With Icon
          </Button>
        </div>
      </section>

      {/* Tooltips */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Tooltips</h3>
        <div className="flex gap-8">
          <Tooltip content="This is a helpful tooltip!">
            <span className="text-emerald-600 dark:text-emerald-400 font-medium cursor-help underline decoration-dashed">Hover me</span>
          </Tooltip>
          
          <Tooltip content="Delete this item">
            <Button variant="outline" className="text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200 dark:border-red-800">
              <Trash2 className="w-4 h-4" />
            </Button>
          </Tooltip>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Standard Card</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">This is a reusable card component with standard padding, border radius, and shadow.</p>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-2">Customized Card</h4>
            <p className="text-sm text-emerald-600 dark:text-emerald-500">You can easily override styles by passing a className prop.</p>
          </Card>
        </div>
      </section>

      {/* Dialog / Modal */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Dialog (Modal with Blur Overlay)</h3>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        
        <Dialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Confirm Action">
          <div className="py-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Are you sure you want to perform this action? This cannot be undone.</p>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
          </div>
        </Dialog>
      </section>

      {/* Charts */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Reusable Chart</h3>
        <Card>
          <Chart 
            data={sampleChartData} 
            lines={[
              { dataKey: 'value1', stroke: '#10b981' },
              { dataKey: 'value2', stroke: '#f97316', dashed: true }
            ]} 
          />
        </Card>
      </section>

      {/* Badges */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Badges</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="gray">Gray</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Chips */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Chips</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            <Chip variant="primary">Primary</Chip>
            <Chip variant="secondary">Secondary</Chip>
            <Chip variant="success">Success</Chip>
            <Chip variant="warning">Warning</Chip>
            <Chip variant="danger">Danger</Chip>
            <Chip variant="outline">Outline</Chip>
            <Chip variant="ghost">Ghost</Chip>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Chip size="sm">Small</Chip>
            <Chip size="md">Medium</Chip>
            <Chip size="lg">Large</Chip>
            <Chip variant="outline" className="gap-1">
              <Star className="w-3 h-3" /> With Icon
            </Chip>
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Alerts</h3>
        <div className="space-y-4">
          <Alert variant="info" title="Information">This is an informational alert.</Alert>
          <Alert variant="success" title="Success" dismissible>Your changes have been saved successfully.</Alert>
          <Alert variant="warning" title="Warning" dismissible>Your subscription is about to expire.</Alert>
          <Alert variant="error" title="Error" dismissible>There was a problem processing your request.</Alert>
        </div>
      </section>

      {/* Form Controls */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Form Controls</h3>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Switch checked={switchChecked} onChange={setSwitchChecked} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Toggle Switch ({switchChecked ? 'On' : 'Off'})
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Switch checked={true} onChange={() => {}} disabled />
            <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
              Disabled Switch
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <Checkbox 
              checked={checkboxChecked} 
              onChange={setCheckboxChecked} 
              label="Accept terms and conditions" 
            />
            <Checkbox 
              checked={false} 
              onChange={() => {}} 
              label="Subscribe to newsletter" 
            />
            <Checkbox 
              checked={true} 
              onChange={() => {}} 
              label="Disabled checked checkbox" 
              disabled
            />
          </div>
        </div>
      </section>

      {/* Dropdown Menu */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Dropdown Menu</h3>
        <div className="flex gap-4">
          <DropdownMenu items={dropdownItems} trigger={<Button variant="outline">Options Menu</Button>} />
          
          <DropdownMenu items={dropdownItems} align="right" trigger={<Button variant="primary">Right Aligned</Button>} />
        </div>
      </section>

      {/* Table */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Table</h3>
        <Card className="p-0 overflow-hidden">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV003</TableCell>
                <TableCell>Unpaid</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV004</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$450.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Toast Notifications */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-800 pb-2">Toast Notifications (Tooltip Alerts)</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" onClick={() => handleToast('success')} className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
            <CheckCircle className="w-4 h-4 mr-2" /> Success Toast
          </Button>
          <Button variant="outline" onClick={() => handleToast('error')} className="text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20">
            <XCircle className="w-4 h-4 mr-2" /> Error Toast
          </Button>
          <Button variant="outline" onClick={() => handleToast('warning')} className="text-amber-600 border-amber-200 hover:bg-amber-50 dark:hover:bg-amber-900/20">
            <AlertTriangle className="w-4 h-4 mr-2" /> Warning Toast
          </Button>
          <Button variant="outline" onClick={() => handleToast('info')} className="text-blue-600 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            <Info className="w-4 h-4 mr-2" /> Info Toast
          </Button>
        </div>
      </section>
    </div>
  );
};
