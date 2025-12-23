# Reportes Anuales - Documentación

## Descripción General

Los reportes anuales proporcionan una vista completa de las finanzas del año, organizando los datos en una matriz de **categorías × meses** que permite visualizar patrones, tendencias y evolución de ingresos y gastos.

## Estructura del Reporte Anual

### 1. Matriz de Gastos (Expense Matrix)

Organiza todos los gastos del año en una tabla donde:
- **Filas**: Categorías de gastos (Tarjetas, Servicios, Comida, Salud, etc.)
- **Columnas**: Meses del año (Enero a Diciembre)
- **Celdas**: Monto total gastado en esa categoría ese mes

```typescript
interface CategoryMonthlyData {
  categoryId: string;
  categoryName: string;
  type: 'expense';
  isFixed: boolean;

  // Datos por mes
  months: {
    1: { month: 1, total: 534098.19, transactionCount: 15 },
    2: { month: 2, total: 617372.34, transactionCount: 18 },
    // ... hasta mes 12
  };

  yearTotal: 7214350.45;      // Suma de todos los meses
  monthlyAverage: 601195.87;   // Promedio mensual
  peakMonth: 10;               // Mes con mayor gasto
  peakAmount: 895817.09;       // Monto del mes pico
}
```

### 2. Matriz de Ingresos (Income Matrix)

Similar a la matriz de gastos, pero para ingresos:
- Categorías: Sueldo, Alquiler, Inversiones, Trabajos, etc.
- Misma estructura de datos

### 3. Totales Mensuales

Suma de todas las categorías por mes:

```typescript
interface MonthlyTotal {
  month: 10;                    // Octubre
  year: 2024;
  totalIncome: 4763185.00;     // Total ingresado
  totalExpense: 6032748.25;    // Total gastado
  balance: -1269563.25;        // Resultado del mes

  // Desglose por moneda
  ARS: {
    income: 4763185.00,
    expense: 6032748.25,
    balance: -1269563.25
  },
  USD: {
    income: 2348.00,           // USD ingresados
    expense: 35.45,            // USD gastados
    balance: 2312.55,
    averageRate: 1491.55       // Cotización promedio del mes
  },

  // Comparación con mes anterior
  comparison: {
    incomeChange: 12.5,        // +12.5% vs septiembre
    expenseChange: -5.2,       // -5.2% vs septiembre
    balanceChange: -15.3       // -15.3% vs septiembre
  }
}
```

### 4. Totales por Categoría

Suma de todos los meses por categoría:

```typescript
interface CategoryTotal {
  categoryId: 'comida';
  categoryName: 'Comida';
  type: 'expense';
  yearTotal: 921580.79;        // Total del año
  percentage: 15.28;           // % del total de gastos
  monthlyAverage: 76798.40;    // Promedio mensual
  monthsWithActivity: 12;      // Meses con transacciones
}
```

### 5. Evolución de Moneda Extranjera

Tracking de operaciones en USD y cotización:

```typescript
interface CurrencyEvolution {
  month: 10;
  year: 2024;
  totalARS: 6032748.25;       // Total en pesos del mes
  exchangeRate: 1491.55;      // Cotización promedio
  totalUSD: 4044.62;          // Equivalente en USD

  // Operaciones del mes
  currencyOperations: {
    bought: 0,                // USD comprados
    sold: 2348,              // USD vendidos
    netChange: -2348         // Variación neta
  }
}
```

### 6. Resumen Ejecutivo del Año

```typescript
interface YearlySummary {
  year: 2024;

  // Totales generales
  totalIncome: 57158220.00;
  totalExpense: 72390579.00;
  balance: -15232359.00;

  // Clasificación de gastos
  fixedExpenses: 36210000.00;    // Gastos fijos (servicios, impuestos, etc.)
  variableExpenses: 36180579.00; // Gastos variables

  // Promedios mensuales
  averageMonthlyIncome: 4763185.00;
  averageMonthlyExpense: 6032548.25;
  averageMonthlyBalance: -1269363.25;

  // Mejor y peor mes
  bestMonth: {
    month: 4,                    // Abril
    balance: 2500000.00
  },
  worstMonth: {
    month: 10,                   // Octubre
    balance: -2800000.00
  },

  // Top 5 categorías de gastos
  topExpenseCategories: [
    { categoryName: 'Servicios', total: 10798605.08, percentage: 14.9 },
    { categoryName: 'Comida', total: 921580.79, percentage: 12.7 },
    { categoryName: 'Salud', total: 7434514.00, percentage: 10.3 },
    // ...
  ],

  // Top categorías de ingresos
  topIncomeCategories: [
    { categoryName: 'Sueldo', total: 48324444.00, percentage: 84.5 },
    { categoryName: 'Alquiler', total: 8832000.00, percentage: 15.5 },
    // ...
  ]
}
```

## Endpoints de la API

### 1. Obtener Reporte Anual Completo

```http
GET /api/reports/yearly/2024
Authorization: Bearer <token>
```

**Response:**
```json
{
  "report": {
    "id": "yearly-family123-2024",
    "familyId": "family123",
    "year": 2024,
    "expenseMatrix": [...],
    "incomeMatrix": [...],
    "monthlyTotals": [...],
    "categoryTotals": [...],
    "currencyEvolution": [...],
    "summary": {...},
    "generatedAt": "2024-12-23T..."
  }
}
```

### 2. Obtener Solo Resumen Ejecutivo

```http
GET /api/reports/yearly/2024/summary
Authorization: Bearer <token>
```

**Response:**
```json
{
  "summary": {
    "year": 2024,
    "totalIncome": 57158220.00,
    "totalExpense": 72390579.00,
    "balance": -15232359.00,
    // ...
  }
}
```

### 3. Obtener Evolución de una Categoría

```http
GET /api/reports/yearly/2024/category/comida
Authorization: Bearer <token>
```

**Response:**
```json
{
  "category": {
    "categoryId": "comida",
    "categoryName": "Comida",
    "type": "expense",
    "months": {
      "1": { "month": 1, "total": 75000, "transactionCount": 12 },
      "2": { "month": 2, "total": 82000, "transactionCount": 15 },
      // ... 12 meses
    },
    "yearTotal": 921580.79,
    "monthlyAverage": 76798.40,
    "peakMonth": 12,
    "peakAmount": 125000
  }
}
```

### 4. Obtener Datos para Gráficos

```http
GET /api/reports/yearly/2024/charts
Authorization: Bearer <token>
```

**Response:**
```json
{
  "charts": {
    "evolution": {
      "type": "line",
      "data": [
        { "label": "Enero", "income": 4500000, "expense": 5200000, "balance": -700000 },
        { "label": "Febrero", "income": 4800000, "expense": 5100000, "balance": -300000 },
        // ... 12 meses
      ]
    },
    "categoryBreakdown": {
      "type": "pie",
      "data": [
        { "label": "Servicios", "value": 10798605.08, "percentage": 14.9 },
        { "label": "Comida", "value": 921580.79, "percentage": 12.7 },
        // ... top categorías
      ]
    }
  }
}
```

### 5. Exportar Reporte

```http
GET /api/reports/yearly/2024/export?format=excel
Authorization: Bearer <token>
```

Formatos soportados: `csv`, `excel`, `pdf`

## Casos de Uso

### 1. Vista de Tabla Anual (Como en la captura)

Para generar la tabla mostrada en tu captura:

```typescript
// 1. Obtener reporte completo
const { report } = await api.get('/reports/yearly/2024');

// 2. Construir tabla
const table = {
  headers: ['Categoría', 'Ene', 'Feb', 'Mar', ..., 'Dic', 'Total'],
  rows: []
};

// 3. Agregar fila por cada categoría de gasto
report.expenseMatrix.forEach(category => {
  const row = [category.categoryName];

  // Agregar datos de cada mes
  for (let month = 1; month <= 12; month++) {
    row.push(formatCurrency(category.months[month].total));
  }

  // Agregar total anual
  row.push(formatCurrency(category.yearTotal));

  table.rows.push(row);
});

// 4. Agregar fila de totales mensuales
const totalsRow = ['TOTAL'];
report.monthlyTotals.forEach(month => {
  totalsRow.push(formatCurrency(month.totalExpense));
});
totalsRow.push(formatCurrency(report.summary.totalExpense));
table.rows.push(totalsRow);
```

### 2. Gráfico de Evolución Mensual

```typescript
const { charts } = await api.get('/reports/yearly/2024/charts');

// Usar con Recharts
<LineChart data={charts.evolution.data}>
  <Line dataKey="income" stroke="#10b981" name="Ingresos" />
  <Line dataKey="expense" stroke="#ef4444" name="Egresos" />
  <Line dataKey="balance" stroke="#3b82f6" name="Balance" />
</LineChart>
```

### 3. Análisis de Gastos Fijos vs Variables

```typescript
const { summary } = await api.get('/reports/yearly/2024/summary');

const fixedPercentage = (summary.fixedExpenses / summary.totalExpense) * 100;
const variablePercentage = (summary.variableExpenses / summary.totalExpense) * 100;

console.log(`Gastos Fijos: ${fixedPercentage.toFixed(1)}%`);
console.log(`Gastos Variables: ${variablePercentage.toFixed(1)}%`);
```

### 4. Comparar Dos Años

```typescript
const report2024 = await api.get('/reports/yearly/2024');
const report2023 = await api.get('/reports/yearly/2023');

const comparison = {
  incomeChange: calculateChange(
    report2023.summary.totalIncome,
    report2024.summary.totalIncome
  ),
  expenseChange: calculateChange(
    report2023.summary.totalExpense,
    report2024.summary.totalExpense
  ),
  balanceChange: calculateChange(
    report2023.summary.balance,
    report2024.summary.balance
  )
};
```

## Optimizaciones y Consideraciones

### Performance

1. **Caching**: Los reportes anuales se pueden cachear ya que los datos históricos no cambian
2. **Lazy Loading**: Cargar solo el resumen primero, luego los detalles
3. **Paginación**: Para años con muchas transacciones

### Almacenamiento

Los reportes anuales generados se pueden guardar en Firestore para acceso rápido:

```typescript
// Guardar reporte generado
await db.collection('yearly_reports')
  .doc(`${familyId}-${year}`)
  .set(report);

// Regenerar solo si hay cambios
const existingReport = await db.collection('yearly_reports')
  .doc(`${familyId}-${year}`)
  .get();

if (!existingReport.exists || needsRegeneration) {
  // Generar nuevo reporte
}
```

### Proyecciones

Para meses futuros, se pueden generar proyecciones basadas en:
- Promedio de meses anteriores
- Mismo mes del año anterior
- Tendencias detectadas

## Próximas Mejoras

1. **Comparación Year-over-Year**: Comparar automáticamente con año anterior
2. **Alertas**: Notificar cuando gastos superan promedios
3. **Proyecciones**: Estimar gastos de meses futuros
4. **Análisis de Tendencias**: Detectar patrones automáticamente
5. **Exportación Mejorada**: Templates profesionales para PDF/Excel
6. **Subcategorías**: Expandir categorías para ver detalle
7. **Filtros Avanzados**: Filtrar por tags, métodos de pago, etc.
