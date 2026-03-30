import React from 'react';
import { ArrowUp, ArrowUpRight, ArrowDownRight, MoreVertical, Plus, Paperclip, Download, Upload, ChevronDown } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Chart } from '../components/ui/Chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';

// --- Mock Data ---
const moneyFlowData = [
  { name: '04 Se, Mo', saving: 1800, expense: 1000 },
  { name: '05 Se, Tu', saving: 2100, expense: 1200 },
  { name: '06 Se, We', saving: 1000, expense: 1500 },
  { name: '07 Se, Th', saving: 2289, expense: 1100 },
  { name: '08 Se, Fr', saving: 1800, expense: 1900 },
  { name: '09 Se, Sa', saving: 2800, expense: 1400 },
  { name: '10 Se, Su', saving: 2400, expense: 1600 },
];

const sparklineData1 = [{ v: 10 }, { v: 15 }, { v: 12 }, { v: 20 }, { v: 18 }, { v: 25 }];
const sparklineData2 = [{ v: 20 }, { v: 18 }, { v: 22 }, { v: 15 }, { v: 10 }, { v: 12 }];
const sparklineData3 = [{ v: 15 }, { v: 12 }, { v: 18 }, { v: 20 }, { v: 25 }, { v: 22 }];

const transactions = [
  { id: 1, name: 'Jane Cooper', date: '08 Sep, 2022', amount: 1200, type: 'receive', icon: ArrowDownRight, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 2, name: 'Leslie Alexander', date: '08 Sep, 2022', amount: 1750, type: 'receive', icon: ArrowDownRight, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 3, name: 'Flight Ticket', date: '08 Sep, 2022', amount: 500, type: 'send', icon: ArrowUpRight, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 4, name: 'Robert Fox', date: '08 Sep, 2022', amount: 4300, type: 'receive', icon: ArrowDownRight, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 5, name: 'KFC', date: '08 Sep, 2022', amount: 189, type: 'send', icon: Paperclip, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 6, name: 'Jacob Jones', date: '08 Sep, 2022', amount: 840, type: 'receive', icon: ArrowDownRight, color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

const scheduledPayments = [
  { name: 'Discord', amount: '$34.99/m' },
  { name: 'Wattpad', amount: '$14.99/m' },
  { name: 'Netflix', amount: '$9.99/m' },
];

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Left Column (Main Content) */}
      <div className="xl:col-span-2 flex flex-col gap-8">
        
        {/* My Card Section */}
        <div className="bg-[#1a1b25] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-gray-400 font-medium mb-1">My Card</p>
              <h2 className="text-4xl font-bold tracking-tight">$1,43,899.00</h2>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-1 text-white text-sm font-medium">
                <ArrowUp className="w-4 h-4" />
                10%
              </div>
              <div className="w-24 h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sparklineData1}>
                    <Line type="monotone" dataKey="v" stroke="#ffffff" strokeWidth={2} dot={false} isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3 md:gap-4 mt-8">
            <Button className="bg-white text-gray-900 hover:bg-gray-50 flex-1 md:flex-none">
              <Download className="w-4 h-4" />
              Deposit
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 flex-1 md:flex-none">
              <Upload className="w-4 h-4" />
              Withdraw
            </Button>
          </div>
        </div>

        {/* Financial Record */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Financial Record</h3>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-3 py-1.5 rounded-full text-xs text-gray-500 dark:text-gray-400 shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <span>Month</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Income */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Income</p>
                <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"><MoreVertical className="w-4 h-4" /></button>
              </div>
              <div className="w-full h-12 mb-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sparklineData1}>
                    <Line type="monotone" dataKey="v" stroke="#000000" strokeWidth={2} dot={false} isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">$85,992</h4>
                <div className="flex items-center gap-1 text-gray-900 dark:text-white text-xs font-semibold">
                  <ArrowUp className="w-3 h-3" /> 17%
                </div>
              </div>
            </div>
            
            {/* Expense */}
            <div className="bg-[#fff3e0] dark:bg-orange-900/20 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Expense</p>
                <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"><MoreVertical className="w-4 h-4" /></button>
              </div>
              <div className="w-full h-12 mb-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sparklineData2}>
                    <Line type="monotone" dataKey="v" stroke="#f97316" strokeWidth={2} dot={false} isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">$38,160</h4>
                <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400 text-xs font-semibold">
                  <ArrowUp className="w-3 h-3" /> 44%
                </div>
              </div>
            </div>

            {/* Saving */}
            <div className="bg-[#e3f2fd] dark:bg-blue-900/20 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Saving</p>
                <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"><MoreVertical className="w-4 h-4" /></button>
              </div>
              <div className="w-full h-12 mb-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sparklineData3}>
                    <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={false} isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">$47,832</h4>
                <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                  <ArrowUp className="w-3 h-3" /> 45%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Money Flow */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Money Flow</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white"></span> Total Saving
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-orange-300 dark:bg-orange-500"></span> Total Expense
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-3 py-1.5 rounded-full text-xs text-gray-500 dark:text-gray-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span>Weekly</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
          <Chart 
            data={moneyFlowData} 
            lines={[
              { dataKey: 'saving', stroke: '#000000' },
              { dataKey: 'expense', stroke: '#f97316', dashed: true }
            ]} 
          />
        </Card>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Send Money To */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Send Money To</h3>
              <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"><MoreVertical className="w-4 h-4" /></button>
            </div>
            <div className="flex items-center gap-3">
              <Button className="w-12 h-12 rounded-full p-0 flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5" />
              </Button>
              <img src="https://i.pravatar.cc/150?u=1" alt="User 1" className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 shadow-sm object-cover" />
              <img src="https://i.pravatar.cc/150?u=2" alt="User 2" className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 shadow-sm object-cover" />
              <img src="https://i.pravatar.cc/150?u=3" alt="User 3" className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 shadow-sm object-cover" />
            </div>
          </Card>

          {/* Scheduled Payments */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Scheduled Payments</h3>
              <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"><MoreVertical className="w-4 h-4" /></button>
            </div>
            <div className="flex items-center justify-between">
              {scheduledPayments.map((payment, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-1">{payment.name}</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{payment.amount}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-8">
        
        {/* Transactions */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Transactions</h3>
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-3 py-1.5 rounded-full text-xs text-gray-500 dark:text-gray-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <span>Month</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
          <div className="overflow-x-auto -mx-6 px-6">
            <Table>
              <TableHeader>
                <TableRow className="border-none hover:bg-transparent">
                  <TableHead className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Transaction</TableHead>
                  <TableHead className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow key={tx.id} className="border-gray-50 dark:border-gray-800/50">
                    <TableCell className="py-3">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.bg} dark:bg-opacity-10`}>
                          <tx.icon className={`w-5 h-5 ${tx.color}`} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">{tx.name}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">{tx.date}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Paperclip className="w-3 h-3 text-gray-300 dark:text-gray-600" />
                        <span className="text-sm font-bold text-gray-900 dark:text-white">${tx.amount}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Available Card */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Available Card</h3>
            <button className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">View all</button>
          </div>
          <div className="space-y-4">
            {/* Visa Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">$3,736</h4>
                <span className="text-lg font-bold italic text-gray-900 dark:text-white">VISA</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Card Number</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">7283 2323 7319 ****</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Exp</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">**/**</p>
                </div>
              </div>
            </div>

            {/* Amex Card */}
            <div className="bg-[#f3f4f6] dark:bg-gray-800 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">$21,426</h4>
                <span className="text-xs font-bold text-gray-900 dark:text-gray-300 uppercase tracking-tighter leading-tight text-right w-12">American<br/>Express</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">Card Number</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">3253 8243 1100 ****</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">Exp</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">**/**</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};
