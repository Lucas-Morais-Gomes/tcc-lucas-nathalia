import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  AreaChart,
  Area
} from 'recharts';
import { 
  Download, 
  Calendar, 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb,
  ArrowRight,
  Target
} from 'lucide-react';
import { mockMonthlyStats } from '../data/mockData';

const Reports: React.FC = () => {
  // Verificação de segurança para os dados
  if (!mockMonthlyStats || mockMonthlyStats.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Nenhum dado disponível para gerar relatórios.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Relatórios</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Análise detalhada do seu comportamento financeiro.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95">
            <Calendar size={18} />
            Últimos 90 dias
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition-all hover:bg-primary/90 active:scale-95 shadow-lg shadow-primary/20">
            <Download size={18} />
            Exportar PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Comparativo de Receitas vs Despesas */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm min-h-[400px]">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6">Receitas vs Despesas</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockMonthlyStats} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar name="Receitas" dataKey="income" fill="#10B981" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar name="Despesas" dataKey="expenses" fill="#EF4444" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tendência de Gastos */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm min-h-[400px]">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6">Tendência de Gastos</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockMonthlyStats} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="expenses" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorExpenses)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Insights da IA */}
      <div className="space-y-4">
        <h3 className="font-bold text-xl text-gray-900 dark:text-white flex items-center gap-2">
          <Lightbulb className="text-warning" size={24} />
          Insights da GranaAI
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-3xl border border-green-100 dark:border-green-900/30">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-green-600 mb-4">
              <TrendingUp size={20} />
            </div>
            <h4 className="font-bold text-green-800 dark:text-green-400 mb-2">Economia em Foco</h4>
            <p className="text-sm text-green-700 dark:text-green-500/80 leading-relaxed">
              Você gastou 12% menos com transporte este mês em comparação a Outubro. Continue assim!
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-3xl border border-red-100 dark:border-red-900/30">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center text-red-600 mb-4">
              <AlertTriangle size={20} />
            </div>
            <h4 className="font-bold text-red-800 dark:text-red-400 mb-2">Alerta de iFood</h4>
            <p className="text-sm text-red-700 dark:text-red-500/80 leading-relaxed">
              Seus gastos impulsivos com delivery representam 23% do seu orçamento. Que tal um teto de R$ 500?
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-3xl border border-blue-100 dark:border-blue-900/30">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Target size={20} />
            </div>
            <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2">Meta "Viagem"</h4>
            <p className="text-sm text-blue-700 dark:text-blue-500/80 leading-relaxed">
              Mantendo esse ritmo, você alcançará sua meta de viagem 2 meses antes do previsto!
            </p>
          </div>
        </div>
      </div>

      {/* Projeção Futura */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-[2rem] border border-primary/20 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Projeção de Saldo</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg">
              Com base nos seus últimos 3 meses, prevemos que você terminará o ano com um saldo positivo de <strong>R$ 4.250,00</strong>.
            </p>
          </div>
          <button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:shadow-xl transition-all active:scale-95 whitespace-nowrap">
            Ver Simulação Completa
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </div>
    </div>
  );
};

export default Reports;
