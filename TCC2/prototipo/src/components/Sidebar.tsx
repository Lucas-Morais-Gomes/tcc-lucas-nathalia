import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PieChart, 
  Target, 
  FileText, 
  Settings, 
  Wallet,
  MessageCircle
} from 'lucide-react';
import { clsx } from 'clsx';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: PieChart, label: 'Categorias', path: '/categorias' },
  { icon: Target, label: 'Metas', path: '/metas' },
  { icon: FileText, label: 'Relatórios', path: '/relatorios' },
  { icon: MessageCircle, label: 'Simular WhatsApp', path: '/whatsapp' },
  { icon: Settings, label: 'Configurações', path: '/configuracoes' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 z-50 hidden md:block">
      <div className="flex flex-col h-full">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Wallet size={24} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            GranaAI
          </span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400"
              )}
            >
              <item.icon size={20} className={clsx("transition-transform group-hover:scale-110")} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl border border-primary/20">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Dica da IA</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              "Levi, notei que seus gastos com iFood aumentaram 15% esta semana. Que tal um jantar caseiro hoje?"
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
