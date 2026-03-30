import React from 'react';
import { ArrowUp, ArrowDown, ArrowUpRight, ArrowDownRight, MoreVertical, Plus, Paperclip, Download, Upload, ChevronDown, CreditCard, DollarSign, Wallet } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from 'recharts';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Chart } from '../../components/ui/Chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/Table';

// --- Mock Data ---
const moneyFlowData = [
  { name: 'Mon', saving: 1800, expense: 1000 },
  { name: 'Tue', saving: 2100, expense: 1200 },
  { name: 'Wed', saving: 1000, expense: 1500 },
  { name: 'Thu', saving: 2289, expense: 1100 },
  { name: 'Fri', saving: 1800, expense: 1900 },
  { name: 'Sat', saving: 2800, expense: 1400 },
  { name: 'Sun', saving: 2400, expense: 1600 },
];

const transactions = [
  { id: 1, name: 'Jane Cooper', date: '08 Sep, 2022', amount: 1200, type: 'receive', icon: ArrowDownRight, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
  { id: 2, name: 'Leslie Alexander', date: '08 Sep, 2022', amount: 1750, type: 'receive', icon: ArrowDownRight, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
  { id: 3, name: 'Flight Ticket', date: '08 Sep, 2022', amount: 500, type: 'send', icon: ArrowUpRight, color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-100 dark:bg-rose-900/30' },
  { id: 4, name: 'Robert Fox', date: '08 Sep, 2022', amount: 4300, type: 'receive', icon: ArrowDownRight, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
  { id: 5, name: 'KFC', date: '08 Sep, 2022', amount: 189, type: 'send', icon: ArrowUpRight, color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-100 dark:bg-rose-900/30' },
  { id: 6, name: 'Jacob Jones', date: '08 Sep, 2022', amount: 840, type: 'receive', icon: ArrowDownRight, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
];

const scheduledPayments = [
  { name: 'Discord', amount: '$34.99/m' },
  { name: 'Wattpad', amount: '$14.99/m' },
  { name: 'Netflix', amount: '$9.99/m' },
];

export const TransportsDashboard = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Left Column (Main Content) */}
      <div className="xl:col-span-2 flex flex-col gap-6">
        
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Balance */}
          <Card className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Wallet className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
                <ArrowUp className="w-3 h-3" /> 10%
              </span>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Balance</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$143,899.00</h3>
            </div>
          </Card>

          {/* Total Income */}
          <Card className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <ArrowDownRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
                <ArrowUp className="w-3 h-3" /> 17%
              </span>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Income</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$85,992.00</h3>
            </div>
          </Card>

          {/* Total Expense */}
          <Card className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
                <ArrowUpRight className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </div>
              <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400 text-sm font-medium bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded-md">
                <ArrowUp className="w-3 h-3" /> 44%
              </span>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Expense</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$38,160.00</h3>
            </div>
          </Card>
        </div>

        {/* Money Flow */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Money Flow</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span> Saving
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span> Expense
              </div>
            </div>
          </div>
          <Chart 
            data={moneyFlowData} 
            lines={[
              { dataKey: 'saving', stroke: '#3b82f6' },
              { dataKey: 'expense', stroke: '#f43f5e', dashed: true }
            ]} 
          />
        </Card>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <Card>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
            <div className="flex flex-col gap-4">
              <Button className="w-full justify-start gap-3" variant="outline">
                <Download className="w-4 h-4" /> Deposit Money
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <Upload className="w-4 h-4" /> Withdraw Funds
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <Plus className="w-4 h-4" /> New Transfer
              </Button>
            </div>
          </Card>

          {/* Scheduled Payments */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Scheduled Payments</h3>
              <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400">View All</Button>
            </div>
            <div className="space-y-4">
              {scheduledPayments.map((payment, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <p className="font-medium text-gray-900 dark:text-white">{payment.name}</p>
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white">{payment.amount}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        
        {/* Available Cards */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">My Cards</h3>
            <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400">Add New</Button>
          </div>
          <div className="space-y-4">
            {/* Visa Card */}
            <div className="p-5 rounded-2xl bg-gray-900 dark:bg-gray-800 text-white shadow-md">
              <div className="flex justify-between items-start mb-8">
                <CreditCard className="w-8 h-8 opacity-80" />
                <span className="text-lg font-bold italic">VISA</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Balance</p>
                  <p className="text-xl font-bold">$3,736.00</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">**** 7319</p>
                </div>
              </div>
            </div>

            {/* Amex Card */}
            <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
              <div className="flex justify-between items-start mb-8">
                <CreditCard className="w-8 h-8 text-gray-400" />
                <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-tighter">AMEX</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Balance</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">$21,426.00</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">**** 1100</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Transactions */}
        <Card className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
            <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400">View All</Button>
          </div>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.bg}`}>
                    <tx.icon className={`w-5 h-5 ${tx.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{tx.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tx.date}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {tx.type === 'send' ? '-' : '+'}${tx.amount}
                </span>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
};
