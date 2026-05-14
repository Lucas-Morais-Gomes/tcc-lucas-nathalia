export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  limit: number;
  spent: number;
  color: string;
  icon: string;
}

export interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  icon: string;
  color: string;
}

export interface User {
  name: string;
  avatar: string;
  persona: string;
  initialBalance: number;
}
