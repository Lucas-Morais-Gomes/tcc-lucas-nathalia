import type { Transaction, Category, Goal, User } from '../types';

export const mockUser: User = {
  name: 'Levi',
  avatar: 'L',
  persona: 'Profissional Impulsivo',
  initialBalance: 5000.00
};

export const mockCategories: Category[] = [
  { id: '1', name: 'Alimentação', limit: 1200, spent: 1050, color: '#10B981', icon: 'Utensils' },
  { id: '2', name: 'Transporte', limit: 500, spent: 420, color: '#3B82F6', icon: 'Car' },
  { id: '3', name: 'Lazer', limit: 800, spent: 950, color: '#8B5CF6', icon: 'Gamepad2' },
  { id: '4', name: 'Saúde', limit: 300, spent: 150, color: '#EF4444', icon: 'HeartPulse' },
  { id: '5', name: 'Educação', limit: 400, spent: 400, color: '#F59E0B', icon: 'GraduationCap' },
  { id: '6', name: 'Assinaturas', limit: 200, spent: 189, color: '#EC4899', icon: 'CreditCard' },
  { id: '7', name: 'Outros', limit: 300, spent: 120, color: '#6B7280', icon: 'MoreHorizontal' },
];

export const mockGoals: Goal[] = [
  { id: '1', name: 'Viagem Japão', targetAmount: 15000, currentAmount: 6750, deadline: '2026-12-20', icon: 'Plane', color: '#10B981' },
  { id: '2', name: 'MacBook Pro', targetAmount: 12000, currentAmount: 4800, deadline: '2026-08-15', icon: 'Laptop', color: '#8B5CF6' },
  { id: '3', name: 'Reserva de Emergência', targetAmount: 10000, currentAmount: 3000, deadline: '2027-01-01', icon: 'ShieldCheck', color: '#3B82F6' },
];

export const mockTransactions: Transaction[] = [
  { id: '1', date: '2026-05-14', description: 'iFood - Burger King', amount: 85.90, category: 'Alimentação', type: 'expense', icon: 'Utensils' },
  { id: '2', date: '2026-05-13', description: 'Uber - Trabalho', amount: 24.50, category: 'Transporte', type: 'expense', icon: 'Car' },
  { id: '3', date: '2026-05-12', description: 'Salário', amount: 5500.00, category: 'Salário', type: 'income', icon: 'Wallet' },
  { id: '4', date: '2026-05-11', description: 'Netflix', amount: 55.90, category: 'Assinaturas', type: 'expense', icon: 'Tv' },
  { id: '5', date: '2026-05-10', description: 'Steam - Elden Ring', amount: 249.90, category: 'Lazer', type: 'expense', icon: 'Gamepad2' },
  { id: '6', date: '2026-05-09', description: 'Supermercado BH', amount: 450.20, category: 'Alimentação', type: 'expense', icon: 'ShoppingBasket' },
  { id: '7', date: '2026-05-08', description: 'Posto Shell', amount: 250.00, category: 'Transporte', type: 'expense', icon: 'Fuel' },
  { id: '8', date: '2026-05-07', description: 'Farmácia Pague Menos', amount: 89.90, category: 'Saúde', type: 'expense', icon: 'Pill' },
  { id: '9', date: '2026-05-06', description: 'iFood - Sushi', amount: 120.00, category: 'Alimentação', type: 'expense', icon: 'Utensils' },
  { id: '10', date: '2026-05-05', description: 'Academia', amount: 110.00, category: 'Saúde', type: 'expense', icon: 'Dumbbell' },
  // Mais transações para preencher os 3 meses
  { id: '11', date: '2026-04-30', description: 'Aluguel', amount: 1500.00, category: 'Habitação', type: 'expense', icon: 'Home' },
  { id: '12', date: '2026-04-15', description: 'Freela Design', amount: 1200.00, category: 'Extras', type: 'income', icon: 'Laptop' },
  { id: '13', date: '2026-03-25', description: 'Concerto Rock', amount: 350.00, category: 'Lazer', type: 'expense', icon: 'Music' },
];

export const mockMonthlyStats = [
  { month: 'Mar', income: 6200, expenses: 5800 },
  { month: 'Abr', income: 6700, expenses: 5200 },
  { month: 'Mai', income: 5500, expenses: 3765 },
];
