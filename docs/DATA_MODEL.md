# Modelo de Datos

## Colecciones de Firestore

### users

Almacena información de usuarios del sistema.

```typescript
{
  id: string;              // UID de Firebase Auth
  email: string;           // Email del usuario
  name: string;            // Nombre completo
  familyId: string;        // Referencia a la familia
  role: "admin" | "member"; // Rol en la familia
  telegramId?: string;     // ID de Telegram (opcional)
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

**Índices:**
- `familyId` (ASC)
- `email` (ASC)

### families

Almacena información de grupos familiares.

```typescript
{
  id: string;
  name: string;            // Nombre de la familia
  members: string[];       // Array de user IDs
  createdBy: string;       // UID del creador
  createdAt: Timestamp;
}
```

### transactions

Almacena todas las transacciones (ingresos y egresos).

```typescript
{
  id: string;
  familyId: string;        // Referencia a la familia
  userId: string;          // Usuario que creó la transacción
  type: "income" | "expense";
  amount: number;          // Monto
  currency: "ARS" | "USD";
  category: string;        // Categoría principal
  subcategory?: string;    // Subcategoría (opcional)
  description: string;     // Descripción
  date: Timestamp;         // Fecha de la transacción
  paymentMethod?: string;  // Método de pago (opcional)
  tags?: string[];         // Etiquetas adicionales
  createdBy: string;       // UID del creador
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

**Índices compuestos:**
- `familyId` (ASC) + `date` (DESC)
- `familyId` (ASC) + `type` (ASC) + `date` (DESC)
- `familyId` (ASC) + `category` (ASC) + `date` (DESC)
- `userId` (ASC) + `date` (DESC)

### categories

Almacena las categorías predefinidas y personalizadas.

```typescript
{
  id: string;
  name: string;
  type: "income" | "expense" | "both";
  icon?: string;
  color?: string;
  subcategories?: string[];
  isFixed?: boolean;       // Si es gasto fijo
  parentId?: string;       // Para subcategorías
}
```

**Categorías de Gastos:**
- Tarjetas
- Servicios (gastos fijos)
- Comida
- Salud
- Esparcimiento
- Limpieza
- Cuidado
- Educación
- Transporte
- Impuestos (gastos fijos)
- Extra

**Categorías de Ingresos:**
- Sueldo
- Alquiler
- Inversiones
- Venta Dólar
- Trabajos
- Otros

### reports

Almacena reportes mensuales generados automáticamente.

```typescript
{
  id: string;
  familyId: string;
  month: number;           // 1-12
  year: number;
  totalIncome: number;
  totalExpense: number;
  balance: number;
  byCategory: {
    [categoryId: string]: {
      total: number;
      percentage: number;
      transactionCount: number;
    }
  };
  byUser: {
    [userId: string]: {
      totalExpenses: number;
      totalIncome: number;
      transactionCount: number;
    }
  };
  fixedExpenses: number;
  variableExpenses: number;
  createdAt: Timestamp;
}
```

**Índices:**
- `familyId` (ASC) + `year` (DESC) + `month` (DESC)

### currency_exchanges

Almacena operaciones de compra/venta de divisas.

```typescript
{
  id: string;
  familyId: string;
  date: Timestamp;
  amountUSD: number;
  amountARS: number;
  exchangeRate: number;
  source: string;          // "cocos", "piamontesa", etc.
  type: "buy" | "sell";
  createdBy: string;
  createdAt: Timestamp;
}
```

## Reglas de Negocio

### Transacciones

1. **Gastos Fijos**: Categorías marcadas con `isFixed: true`
   - Servicios
   - Impuestos
   - Salud (Swiss Medical)
   - Educación (cuota colegio)

2. **Conversión de Moneda**:
   - Almacenar monto original y moneda
   - Registrar tipo de cambio en `currency_exchanges`
   - Calcular equivalencias para reportes

3. **Validaciones**:
   - Amount > 0
   - Category debe existir
   - Date no puede ser futura
   - User debe pertenecer a familyId

### Reportes

1. **Generación Automática**:
   - Cloud Function programada para 1er día del mes
   - Calcula totales del mes anterior
   - Agrupa por categoría y usuario

2. **Cálculos**:
   - Total Income = Suma de transactions tipo "income"
   - Total Expense = Suma de transactions tipo "expense"
   - Balance = Total Income - Total Expense
   - Fixed Expenses = Suma de categorías fijas
   - Variable Expenses = Total Expense - Fixed Expenses

## Queries Comunes

### Transacciones del mes actual

```javascript
db.collection('transactions')
  .where('familyId', '==', familyId)
  .where('date', '>=', startOfMonth)
  .where('date', '<=', endOfMonth)
  .orderBy('date', 'desc')
```

### Gastos por categoría

```javascript
db.collection('transactions')
  .where('familyId', '==', familyId)
  .where('type', '==', 'expense')
  .where('category', '==', categoryId)
  .orderBy('date', 'desc')
```

### Transacciones de un usuario

```javascript
db.collection('transactions')
  .where('userId', '==', userId)
  .orderBy('date', 'desc')
  .limit(50)
```

## Backup y Archivado

- Backup automático diario a las 2 AM
- Archivar transacciones > 2 años en colección separada
- Mantener reportes mensuales indefinidamente
