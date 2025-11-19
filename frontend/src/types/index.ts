// Tipos principales de la aplicación

export interface User {
  id: string;
  email: string;
  name: string;
  familyId: string;
  role: 'admin' | 'member';
  telegramId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  familyId: string;
  userId: string;
  type: 'income' | 'expense';
  amount: number;
  currency: 'ARS' | 'USD';
  category: string;
  subcategory?: string;
  description: string;
  date: Date;
  paymentMethod?: string;
  tags?: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense' | 'both';
  icon?: string;
  color?: string;
  subcategories?: string[];
  isFixed?: boolean; // Para gastos fijos
  parentId?: string;
}

export interface MonthlyReport {
  id: string;
  familyId: string;
  month: number;
  year: number;
  totalIncome: number;
  totalExpense: number;
  balance: number;
  byCategory: CategorySummary[];
  byUser: UserSummary[];
  fixedExpenses: number;
  variableExpenses: number;
  createdAt: Date;
}

export interface CategorySummary {
  categoryId: string;
  categoryName: string;
  total: number;
  percentage: number;
  items: Transaction[];
}

export interface UserSummary {
  userId: string;
  userName: string;
  totalExpenses: number;
  totalIncome: number;
  transactionCount: number;
}

export interface CurrencyExchange {
  id: string;
  date: Date;
  amountUSD: number;
  amountARS: number;
  exchangeRate: number;
  source: string;
  createdBy: string;
}
