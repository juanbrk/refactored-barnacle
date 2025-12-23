// Tipos compartidos entre frontend y backend

export type TransactionType = "income" | "expense";
export type Currency = "ARS" | "USD";
export type UserRole = "admin" | "member";

// Re-exportar tipos de reportes
export * from './reports';

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends BaseEntity {
  email: string;
  name: string;
  familyId: string;
  role: UserRole;
  telegramId?: string;
}

export interface Family extends BaseEntity {
  name: string;
  members: string[];
  createdBy: string;
}

export interface Transaction extends BaseEntity {
  familyId: string;
  userId: string;
  type: TransactionType;
  amount: number;
  currency: Currency;
  category: string;
  subcategory?: string;
  description: string;
  date: Date;
  paymentMethod?: string;
  tags?: string[];
  createdBy: string;
}

export interface Category {
  id: string;
  name: string;
  type: TransactionType | "both";
  icon?: string;
  color?: string;
  subcategories?: string[];
  isFixed?: boolean;
  parentId?: string;
}

export interface MonthlyReport extends BaseEntity {
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
}

export interface CategorySummary {
  categoryId: string;
  categoryName: string;
  total: number;
  percentage: number;
  transactionCount: number;
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

// DTOs para API
export interface CreateTransactionDTO {
  type: TransactionType;
  amount: number;
  currency: Currency;
  category: string;
  subcategory?: string;
  description: string;
  date: Date | string;
  paymentMethod?: string;
  tags?: string[];
}

export interface UpdateTransactionDTO extends Partial<CreateTransactionDTO> {}

export interface TransactionFilters {
  startDate?: Date | string;
  endDate?: Date | string;
  type?: TransactionType;
  category?: string;
  userId?: string;
  minAmount?: number;
  maxAmount?: number;
}
