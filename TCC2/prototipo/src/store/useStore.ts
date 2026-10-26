import { create } from 'zustand';
import type { User, Transaction, Category, Goal } from '../types';
import { mockUser, mockTransactions, mockCategories, mockGoals } from '../data/mockData';

interface FinanceState {
  user: User;
  transactions: Transaction[];
  categories: Category[];
  goals: Goal[];
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
}

export const useFinanceStore = create<FinanceState>((set) => ({
  user: mockUser,
  transactions: mockTransactions,
  categories: mockCategories,
  goals: mockGoals,
  addTransaction: (transaction) => set((state) => ({ 
    transactions: [transaction, ...state.transactions] 
  })),
  deleteTransaction: (id) => set((state) => ({ 
    transactions: state.transactions.filter(t => t.id !== id) 
  })),
}));

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  // Inicializa com o valor do localStorage se existir
  darkMode: typeof window !== 'undefined' ? localStorage.getItem('theme') === 'dark' : false,
  toggleDarkMode: () => set((state) => {
    const newMode = !state.darkMode;
    localStorage.setItem('theme', newMode ? 'dark' : 'none');
    return { darkMode: newMode };
  }),
}));
