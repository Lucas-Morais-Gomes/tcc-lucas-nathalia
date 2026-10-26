import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: 'primary' | 'secondary' | 'accent' | 'warning' | 'danger';
  trend?: {
    value: number;
    isUp: boolean;
  };
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon: Icon, color, trend }) => {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent',
    warning: 'bg-warning/10 text-warning',
    danger: 'bg-red-500/10 text-red-500',
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up">
      <div className="flex justify-between items-start mb-4">
        <div className={clsx("p-3 rounded-2xl", colorClasses[color])}>
          <Icon size={24} />
        </div>
        {trend && (
          <span className={clsx(
            "text-xs font-bold px-2 py-1 rounded-full",
            trend.isUp ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          )}>
            {trend.isUp ? '+' : '-'}{trend.value}%
          </span>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">{label}</p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
