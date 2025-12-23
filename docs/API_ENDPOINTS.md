# API Endpoints - Documentación

## Base URL

```
http://localhost:5001/your-project-id/us-central1/api
```

## Autenticación

Todos los endpoints requieren autenticación mediante token JWT de Firebase.

```http
Authorization: Bearer <firebase_id_token>
```

---

## 📊 Transacciones

### GET /transactions

Obtener transacciones de la familia.

**Query Parameters:**
- `startDate` (opcional): Fecha de inicio (ISO 8601)
- `endDate` (opcional): Fecha de fin (ISO 8601)
- `type` (opcional): `income` | `expense`
- `category` (opcional): ID de categoría

**Response:**
```json
{
  "transactions": [
    {
      "id": "trans123",
      "familyId": "family123",
      "userId": "user123",
      "type": "expense",
      "amount": 5000,
      "currency": "ARS",
      "category": "comida",
      "description": "Supermercado",
      "date": "2024-10-15T...",
      "createdBy": "user123",
      "createdAt": "2024-10-15T..."
    }
  ]
}
```

### POST /transactions

Crear nueva transacción.

**Body:**
```json
{
  "type": "expense",
  "amount": 5000,
  "currency": "ARS",
  "category": "comida",
  "description": "Supermercado",
  "date": "2024-10-15",
  "paymentMethod": "debito",
  "tags": ["mercado", "semanal"]
}
```

**Response:**
```json
{
  "id": "trans123",
  "message": "Transaction created successfully"
}
```

### PUT /transactions/:id

Actualizar transacción.

**Body:** (campos a actualizar)
```json
{
  "amount": 5500,
  "description": "Supermercado - corregido"
}
```

**Response:**
```json
{
  "message": "Transaction updated successfully"
}
```

### DELETE /transactions/:id

Eliminar transacción.

**Response:**
```json
{
  "message": "Transaction deleted successfully"
}
```

---

## 📈 Reportes Mensuales

### GET /reports/monthly/:year/:month

Obtener reporte del mes.

**Ejemplo:** `/reports/monthly/2024/10`

**Response:**
```json
{
  "report": {
    "familyId": "family123",
    "year": 2024,
    "month": 10,
    "totalIncome": 4763185.00,
    "totalExpense": 6032748.25,
    "balance": -1269563.25,
    "byCategory": {
      "comida": 921580.79,
      "servicios": 899817.09,
      // ...
    },
    "generatedAt": "2024-11-01T..."
  }
}
```

---

## 📊 Reportes Anuales

### GET /reports/yearly/:year

Obtener reporte anual completo (matriz categorías × meses).

**Ejemplo:** `/reports/yearly/2024`

**Response:**
```json
{
  "report": {
    "id": "yearly-family123-2024",
    "familyId": "family123",
    "year": 2024,
    "expenseMatrix": [
      {
        "categoryId": "comida",
        "categoryName": "Comida",
        "type": "expense",
        "months": {
          "1": { "month": 1, "total": 75000, "transactionCount": 12 },
          "2": { "month": 2, "total": 82000, "transactionCount": 15 },
          // ... hasta mes 12
        },
        "yearTotal": 921580.79,
        "monthlyAverage": 76798.40,
        "peakMonth": 12,
        "peakAmount": 125000
      }
      // ... más categorías
    ],
    "incomeMatrix": [...],
    "monthlyTotals": [
      {
        "month": 1,
        "year": 2024,
        "totalIncome": 4500000,
        "totalExpense": 5200000,
        "balance": -700000,
        "comparison": {
          "incomeChange": 0,
          "expenseChange": 0,
          "balanceChange": 0
        }
      }
      // ... 12 meses
    ],
    "categoryTotals": [...],
    "currencyEvolution": [...],
    "summary": {
      "year": 2024,
      "totalIncome": 57158220.00,
      "totalExpense": 72390579.00,
      "balance": -15232359.00,
      "fixedExpenses": 36210000.00,
      "variableExpenses": 36180579.00,
      "averageMonthlyIncome": 4763185.00,
      "averageMonthlyExpense": 6032548.25,
      "averageMonthlyBalance": -1269363.25,
      "bestMonth": { "month": 4, "balance": 2500000 },
      "worstMonth": { "month": 10, "balance": -2800000 },
      "topExpenseCategories": [...],
      "topIncomeCategories": [...]
    }
  }
}
```

### GET /reports/yearly/:year/summary

Obtener solo resumen ejecutivo del año.

**Response:**
```json
{
  "summary": {
    "year": 2024,
    "totalIncome": 57158220.00,
    "totalExpense": 72390579.00,
    "balance": -15232359.00,
    // ... resto del resumen
  }
}
```

### GET /reports/yearly/:year/category/:categoryId

Obtener evolución anual de una categoría específica.

**Ejemplo:** `/reports/yearly/2024/category/comida`

**Response:**
```json
{
  "category": {
    "categoryId": "comida",
    "categoryName": "Comida",
    "type": "expense",
    "months": {
      "1": { "month": 1, "total": 75000, "transactionCount": 12 },
      // ... 12 meses
    },
    "yearTotal": 921580.79,
    "monthlyAverage": 76798.40
  }
}
```

### GET /reports/yearly/:year/charts

Obtener datos preparados para gráficos.

**Response:**
```json
{
  "charts": {
    "evolution": {
      "type": "line",
      "data": [
        {
          "label": "Enero",
          "income": 4500000,
          "expense": 5200000,
          "balance": -700000
        }
        // ... 12 meses
      ]
    },
    "categoryBreakdown": {
      "type": "pie",
      "data": [
        {
          "label": "Servicios",
          "value": 10798605.08,
          "percentage": 14.9
        }
        // ... categorías
      ]
    }
  }
}
```

### GET /reports/yearly/:year/export?format=csv|excel|pdf

Exportar reporte anual.

**Query Parameters:**
- `format`: `csv` | `excel` | `pdf`

**Response:** Archivo descargable

---

## 📁 Categorías

### GET /categories

Obtener todas las categorías.

**Response:**
```json
{
  "categories": [
    {
      "id": "comida",
      "name": "Comida",
      "type": "expense",
      "icon": "🍕",
      "color": "#10b981",
      "isFixed": false,
      "subcategories": ["Verdulería", "Carnicería", "Supermercado"]
    }
    // ... más categorías
  ]
}
```

### POST /categories

Crear nueva categoría (solo admin).

**Body:**
```json
{
  "name": "Nueva Categoría",
  "type": "expense",
  "icon": "📦",
  "color": "#3b82f6",
  "isFixed": false
}
```

---

## 👥 Usuarios

### GET /users/me

Obtener perfil del usuario actual.

**Response:**
```json
{
  "id": "user123",
  "email": "user@example.com",
  "name": "Juan Pérez",
  "familyId": "family123",
  "role": "admin",
  "telegramId": "123456789",
  "createdAt": "2024-01-01T..."
}
```

### GET /users/family

Obtener todos los miembros de la familia.

**Response:**
```json
{
  "members": [
    {
      "id": "user123",
      "name": "Juan Pérez",
      "email": "juan@example.com",
      "role": "admin"
    },
    {
      "id": "user456",
      "name": "María García",
      "email": "maria@example.com",
      "role": "member"
    }
  ]
}
```

---

## ❤️ Health Check

### GET /health

Verificar estado de la API.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-10-15T12:34:56.789Z"
}
```

---

## Códigos de Error

| Código | Descripción |
|--------|-------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request - Datos inválidos |
| 401 | Unauthorized - Token inválido o ausente |
| 403 | Forbidden - Sin permisos |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error |

## Ejemplo de Error

```json
{
  "error": "Unauthorized - Invalid token"
}
```

---

## Rate Limiting

Firebase Functions tiene límites por defecto:
- 10,000 invocaciones por día (plan gratuito)
- 2GB de salida por día

Para producción, considerar upgrade a plan Blaze.

---

## Versionado

Actualmente: **v1** (implícito en todas las rutas)

Futuras versiones usarán prefijo `/v2/`, `/v3/`, etc.
