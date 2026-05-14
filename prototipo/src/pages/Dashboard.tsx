import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  AlertCircle,
  Plus
} from 'lucide-react';
import StatCard from '../components/StatCard';
import TransactionList from '../components/TransactionList';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { mockMonthlyStats, mockCategories } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Bem-vindo de volta, Levi! Veja como estão suas finanças.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-95 self-start">
          <Plus size={20} />
          Nova Transação
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Saldo Disponível" 
          value="R$ 1.234,56" 
          icon={TrendingUp} 
          color="primary"
          trend={{ value: 12, isUp: true }}
        />
        <StatCard 
          label="Gastos este Mês" 
          value="R$ 3.765,44" 
          icon={TrendingDown} 
          color="danger"
          trend={{ value: 8, isUp: false }}
        />
        <StatCard 
          label="Metas Ativas" 
          value="3" 
          icon={Target} 
          color="secondary"
        />
        <StatCard 
          label="Maior Categoria" 
          value="Alimentação" 
          icon={AlertCircle} 
          color="warning"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Evolução Mensal</h3>
            <select className="bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-xs font-bold px-3 py-1.5 outline-none">
              <option>Últimos 3 meses</option>
              <option>Últimos 6 meses</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockMonthlyStats} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 600 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 600 }}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="income" fill="#10B981" radius={[6, 6, 0, 0]} barSize={20} />
                <Bar dataKey="expenses" fill="#EF4444" radius={[6, 6, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-8">Gastos por Categoria</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="spent"
                >
                  {mockCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {mockCategories.slice(0, 4).map((cat) => (
              <div key={cat.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">{cat.name}</span>
                </div>
                <span className="font-bold text-gray-900 dark:text-white">
                  R$ {cat.spent.toLocaleString('pt-BR')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <TransactionList />
      </div>
    </div>
  );
};

export default Dashboard;
