import React from 'react';
import { useFinanceStore } from '../store/useStore';
import { 
  Plane, 
  Laptop, 
  ShieldCheck,
  Calendar,
  Plus,
  Target
} from 'lucide-react';
// import { clsx } from 'clsx';

const iconMap: Record<string, any> = {
  Plane, Laptop, ShieldCheck
};

const Goals: React.FC = () => {
  const { goals } = useFinanceStore();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Metas Financeiras</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Acompanhe seus sonhos e objetivos.</p>
        </div>
        <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95">
          <Plus size={20} />
          Nova Meta
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {goals.map((goal) => {
          const Icon = iconMap[goal.icon] || Target;
          const percentage = (goal.currentAmount / goal.targetAmount) * 100;

          return (
            <div key={goal.id} className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group">
              {/* Progress Background */}
              <div 
                className="absolute left-0 bottom-0 h-1 transition-all duration-1000"
                style={{ width: `${percentage}%`, backgroundColor: goal.color }}
              ></div>

              <div className="flex items-start justify-between mb-8">
                <div className="flex gap-4">
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 group-hover:rotate-12 transition-transform" style={{ color: goal.color }}>
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{goal.name}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Calendar size={14} />
                      <span>Previsão: {new Date(goal.deadline).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-gray-900 dark:text-white">{percentage.toFixed(0)}%</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-500">Acumulado</span>
                  <span className="text-gray-900 dark:text-white">Total</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-2xl font-bold text-primary">
                    R$ {goal.currentAmount.toLocaleString('pt-BR')}
                  </p>
                  <p className="text-lg font-bold text-gray-300 dark:text-gray-700">
                    R$ {goal.targetAmount.toLocaleString('pt-BR')}
                  </p>
                </div>
                <div className="h-4 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-1">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%`, backgroundColor: goal.color }}
                  ></div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 py-3 rounded-xl font-bold text-sm transition-colors">
                  Editar
                </button>
                <button className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 py-3 rounded-xl font-bold text-sm transition-colors">
                  Adicionar Fundos
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
