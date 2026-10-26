import React from 'react';
import { useFinanceStore } from '../store/useStore';
import { 
  Utensils, 
  Car, 
  Gamepad2, 
  HeartPulse, 
  GraduationCap, 
  CreditCard, 
  MoreHorizontal,
  Plus
} from 'lucide-react';
import { clsx } from 'clsx';

const iconMap: Record<string, any> = {
  Utensils, Car, Gamepad2, HeartPulse, GraduationCap, CreditCard, MoreHorizontal
};

const Categories: React.FC = () => {
  const { categories } = useFinanceStore();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Categorias</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Gerencie seus limites de gastos por categoria.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95">
          <Plus size={20} />
          Nova Categoria
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || MoreHorizontal;
          const percentage = Math.min((cat.spent / cat.limit) * 100, 100);
          const isOverLimit = cat.spent > cat.limit;

          return (
            <div key={cat.id} className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform" style={{ color: cat.color }}>
                  <Icon size={24} />
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Gasto / Limite</p>
                  <p className="font-bold text-gray-900 dark:text-white">
                    R$ {cat.spent} <span className="text-gray-400 font-medium">/ R$ {cat.limit}</span>
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-900 dark:text-white">{cat.name}</h3>
                  <span className={clsx(
                    "text-xs font-bold px-2 py-0.5 rounded-full",
                    isOverLimit ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                  )}>
                    {percentage.toFixed(0)}%
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-1000 ease-out rounded-full"
                    style={{ 
                      width: `${percentage}%`, 
                      backgroundColor: isOverLimit ? '#EF4444' : cat.color 
                    }}
                  ></div>
                </div>
                {isOverLimit && (
                  <p className="text-[10px] text-red-500 font-bold uppercase mt-1">Limite excedido!</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
