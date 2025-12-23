// Tipos extendidos para reportes anuales y análisis avanzados

import { BaseEntity, Transaction, Category } from './index';

/**
 * Reporte Anual - Vista matricial de categorías x meses
 */
export interface YearlyReport extends BaseEntity {
  familyId: string;
  year: number;

  // Matriz de datos: categoryId -> mes -> total
  expenseMatrix: CategoryMonthlyData[];
  incomeMatrix: CategoryMonthlyData[];

  // Totales mensuales (suma de todas las categorías)
  monthlyTotals: MonthlyTotal[];

  // Totales por categoría (suma de todos los meses)
  categoryTotals: CategoryTotal[];

  // Evolución con cotización USD
  currencyEvolution?: CurrencyEvolution[];

  // Resumen general del año
  summary: YearlySummary;

  // Metadata
  generatedAt: Date;
  includesProjections?: boolean; // Si incluye proyecciones para meses futuros
}

/**
 * Datos mensuales de una categoría
 */
export interface CategoryMonthlyData {
  categoryId: string;
  categoryName: string;
  type: 'income' | 'expense';
  isFixed: boolean;

  // Datos por mes (1-12)
  months: {
    [month: number]: MonthData;
  };

  // Total anual de esta categoría
  yearTotal: number;

  // Promedio mensual
  monthlyAverage: number;

  // Mes con mayor gasto/ingreso
  peakMonth: number;
  peakAmount: number;
}

/**
 * Datos de un mes específico
 */
export interface MonthData {
  month: number;
  total: number;
  transactionCount: number;

  // Si tiene múltiples monedas
  breakdown?: {
    ARS: number;
    USD: number;
    USDtoARS?: number; // USD convertido a ARS
  };
}

/**
 * Total mensual (suma de todas las categorías)
 */
export interface MonthlyTotal {
  month: number;
  year: number;
  totalIncome: number;
  totalExpense: number;
  balance: number;

  // Desglose por moneda
  ARS: {
    income: number;
    expense: number;
    balance: number;
  };
  USD: {
    income: number;
    expense: number;
    balance: number;
    averageRate?: number; // Cotización promedio del mes
  };

  // Comparación con mes anterior
  comparison?: {
    incomeChange: number; // Porcentaje
    expenseChange: number;
    balanceChange: number;
  };
}

/**
 * Total por categoría (suma de todos los meses)
 */
export interface CategoryTotal {
  categoryId: string;
  categoryName: string;
  type: 'income' | 'expense';
  yearTotal: number;
  percentage: number; // % del total de ingresos/gastos
  monthlyAverage: number;
  monthsWithActivity: number; // Cantidad de meses con transacciones
}

/**
 * Evolución de moneda extranjera
 */
export interface CurrencyEvolution {
  month: number;
  year: number;

  // Totales en pesos
  totalARS: number;

  // Cotización del mes
  exchangeRate: number; // Promedio del mes

  // Equivalente en USD
  totalUSD: number;

  // Operaciones de cambio del mes
  currencyOperations?: {
    bought: number; // USD comprados
    sold: number; // USD vendidos
    netChange: number; // Neto
  };
}

/**
 * Resumen general del año
 */
export interface YearlySummary {
  year: number;

  // Totales generales
  totalIncome: number;
  totalExpense: number;
  balance: number;

  // Desglose
  fixedExpenses: number;
  variableExpenses: number;

  // Promedios mensuales
  averageMonthlyIncome: number;
  averageMonthlyExpense: number;
  averageMonthlyBalance: number;

  // Meses con mejor/peor performance
  bestMonth: {
    month: number;
    balance: number;
  };
  worstMonth: {
    month: number;
    balance: number;
  };

  // Top categorías
  topExpenseCategories: Array<{
    categoryId: string;
    categoryName: string;
    total: number;
    percentage: number;
  }>;

  topIncomeCategories: Array<{
    categoryId: string;
    categoryName: string;
    total: number;
    percentage: number;
  }>;

  // Comparación con año anterior (si existe)
  yearOverYearComparison?: {
    incomeChange: number;
    expenseChange: number;
    balanceChange: number;
  };
}

/**
 * Filtros para generar reportes anuales
 */
export interface YearlyReportFilters {
  year: number;
  includeProjections?: boolean; // Proyectar meses futuros
  groupBySubcategory?: boolean; // Expandir subcategorías
  includeCurrencyConversion?: boolean; // Incluir conversiones USD
  compareWithPreviousYear?: boolean; // Comparar con año anterior
}

/**
 * Configuración para exportar reportes
 */
export interface ReportExportConfig {
  format: 'pdf' | 'excel' | 'csv';
  includeCharts?: boolean;
  includeSummary?: boolean;
  includeMonthlyBreakdown?: boolean;
  includeCategoryBreakdown?: boolean;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

/**
 * Datos para gráficos de evolución
 */
export interface ChartData {
  type: 'line' | 'bar' | 'pie' | 'area';
  data: Array<{
    label: string;
    value: number;
    metadata?: Record<string, any>;
  }>;
  options?: {
    title?: string;
    xAxis?: string;
    yAxis?: string;
    colors?: string[];
  };
}

/**
 * Análisis de tendencias
 */
export interface TrendAnalysis {
  period: 'monthly' | 'quarterly' | 'yearly';
  category?: string;

  trend: 'increasing' | 'decreasing' | 'stable';
  changeRate: number; // Porcentaje de cambio

  forecast?: {
    nextPeriod: number;
    confidence: number; // 0-100
  };

  insights: string[]; // Observaciones generadas
}
