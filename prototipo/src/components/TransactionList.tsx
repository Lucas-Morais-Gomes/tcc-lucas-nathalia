import React from 'react';
import { useFinanceStore } from '../store/useStore';
import { 
  Utensils, 
  Car, 
  Wallet, 
  Tv, 
  Gamepad2, 
  ShoppingBasket, 
  Fuel, 
  Pill, 
  Dumbbell, 
  Home, 
  Laptop, 
  Music,
  ArrowUpRight,
  ArrowDownLeft,
  MoreVertical
} from 'lucide-react';
import { clsx } from 'clsx';

const iconMap: Record<string, any> = {
  Utensils, Car, Wallet, Tv, Gamepad2, ShoppingBasket, Fuel, Pill, Dumbbell, Home, Laptop, Music
};

const TransactionList: React.FC = () => {
  const { transactions } = useFinanceStore();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">Últimas Transações</h3>
        <button className="text-sm text-primary font-semibold hover:underline">Ver todas</button>
      </div>
      <div className="divide-y divide-gray-50 dark:divide-gray-800">
        {transactions.slice(0, 6).map((t) => {
          const Icon = iconMap[t.icon] || Wallet;
          return (
            <div key={t.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className={clsx(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
                  t.type === 'income' ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                )}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{t.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.category} • {t.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-right">
                <div>
                  <p className={clsx(
                    "font-bold text-sm",
                    t.type === 'income' ? "text-green-600" : "text-gray-900 dark:text-white"
                  )}>
                    {t.type === 'income' ? '+' : '-'} R$ {t.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-0.5">
                    {t.type === 'income' ? (
                      <ArrowUpRight size={12} className="text-green-500" />
                    ) : (
                      <ArrowDownLeft size={12} className="text-red-500" />
                    )}
                    <span className="text-[10px] uppercase font-bold text-gray-400">Confirmado</span>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
