import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Goals from './pages/Goals';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import WhatsAppSimulation from './pages/WhatsAppSimulation';
import { useThemeStore } from './store/useStore';

const App: React.FC = () => {
  const { darkMode } = useThemeStore();

  // Garante que a classe 'dark' esteja no HTML ao carregar/mudar
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Sidebar />
        <div className="md:ml-64 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/categorias" element={<Categories />} />
              <Route path="/metas" element={<Goals />} />
              <Route path="/relatorios" element={<Reports />} />
              <Route path="/configuracoes" element={<Settings />} />
              <Route path="/whatsapp" element={<WhatsAppSimulation />} />
            </Routes>
          </main>
          <footer className="p-8 text-center text-gray-400 text-sm">
            &copy; 2026 GranaAI - TCC Lucas & Nathalia. Feito com 💜 e IA.
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
