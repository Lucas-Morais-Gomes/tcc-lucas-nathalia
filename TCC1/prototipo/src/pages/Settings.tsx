import React from 'react';
import { 
  User, 
  Bot, 
  Eye, 
  Shield, 
  Bell, 
  Globe,
  LogOut,
  Save,
  CheckCircle2
} from 'lucide-react';
import { clsx } from 'clsx';
import { useFinanceStore } from '../store/useStore';

const Settings: React.FC = () => {
  const { user } = useFinanceStore();

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Configurações</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Personalize sua experiência com a GranaAI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navegação Rápida (Tabs Estilizadas) */}
        <div className="space-y-2">
          {[
            { icon: User, label: 'Perfil' },
            { icon: Bot, label: 'Assistente IA' },
            { icon: Eye, label: 'Visualização' },
            { icon: Bell, label: 'Notificações' },
            { icon: Shield, label: 'Privacidade' },
            { icon: Globe, label: 'Integrações' },
          ].map((item, idx) => (
            <button 
              key={item.label}
              className={clsx(
                "w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all",
                idx === 1 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all">
              <LogOut size={20} />
              Sair da Conta
            </button>
          </div>
        </div>

        {/* Painel de Conteúdo */}
        <div className="md:col-span-2 space-y-8">
          {/* Perfil (Resumo) */}
          <section className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Bot className="text-primary" size={24} />
              Personalidade do Assistente
            </h3>
            
            <div className="space-y-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Como você gostaria que a IA se comunicasse com você pelo WhatsApp?
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: 'direct', label: 'Direta e Objetiva', desc: 'Alertas curtos, foco em números e fatos.' },
                  { id: 'friendly', label: 'Amigável e Motivadora', desc: 'Linguagem leve, emojis e incentivos positivos.', active: true },
                  { id: 'formal', label: 'Profissional e Formal', desc: 'Abordagem executiva, termos financeiros técnicos.' },
                ].map((style) => (
                  <div 
                    key={style.id}
                    className={clsx(
                      "p-4 rounded-2xl border-2 transition-all cursor-pointer relative",
                      style.active 
                        ? "border-primary bg-primary/5" 
                        : "border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700"
                    )}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-gray-900 dark:text-white">{style.label}</p>
                      {style.active && <CheckCircle2 size={20} className="text-primary" />}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{style.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Outras Configurações */}
          <section className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Preferências da Conta</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Moeda Padrão</p>
                  <p className="text-xs text-gray-500">Exibição nos dashboards e relatórios.</p>
                </div>
                <select className="bg-gray-100 dark:bg-gray-800 border-none rounded-xl px-4 py-2 text-sm font-bold outline-none">
                  <option>Real (BRL - R$)</option>
                  <option>Dólar (USD - $)</option>
                  <option>Euro (EUR - €)</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Período de Fechamento</p>
                  <p className="text-xs text-gray-500">Quando seu mês financeiro termina.</p>
                </div>
                <select className="bg-gray-100 dark:bg-gray-800 border-none rounded-xl px-4 py-2 text-sm font-bold outline-none">
                  <option>Dia 01 (Início do mês)</option>
                  <option>Dia 05</option>
                  <option>Dia 10</option>
                  <option>Dia 30</option>
                </select>
              </div>

              <div className="pt-6 flex justify-end gap-3">
                <button className="px-6 py-2 rounded-xl font-bold text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                  Cancelar
                </button>
                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-all active:scale-95">
                  <Save size={18} />
                  Salvar Alterações
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
