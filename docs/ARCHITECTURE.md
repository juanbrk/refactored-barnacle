# Arquitectura del Sistema

## Visión General

La plataforma de finanzas hogareñas está construida como un monorepo que incluye:

- **Frontend**: Aplicación web React con TypeScript
- **Backend**: Firebase Functions con Express.js y Telegraf
- **Shared**: Tipos y constantes compartidas entre frontend y backend

## Estructura del Proyecto

```
refactored-barnacle/
├── frontend/               # Aplicación web React
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── services/      # Servicios de API
│   │   ├── hooks/         # Custom hooks
│   │   ├── types/         # Definiciones de tipos
│   │   └── utils/         # Utilidades
│   └── package.json
│
├── backend/               # Firebase Functions
│   ├── functions/
│   │   ├── src/
│   │   │   ├── routes/   # Rutas de la API
│   │   │   ├── services/ # Lógica de negocio
│   │   │   ├── middleware/ # Middlewares
│   │   │   ├── bot/      # Bot de Telegram
│   │   │   └── types/    # Definiciones de tipos
│   │   └── package.json
│   ├── firebase.json
│   └── firestore.rules
│
├── shared/               # Código compartido
│   ├── types/           # Tipos compartidos
│   └── constants/       # Constantes compartidas
│
└── docs/                # Documentación
    ├── ARCHITECTURE.md
    ├── DATA_MODEL.md
    └── TODO.md
```

## Stack Tecnológico

### Frontend

- **React 18+**: Framework principal
- **TypeScript**: Tipado estático
- **Vite**: Build tool y dev server
- **TailwindCSS**: Framework de estilos
- **React Query**: Gestión de estado del servidor
- **React Router**: Navegación
- **Axios**: Cliente HTTP
- **date-fns**: Manejo de fechas
- **Recharts**: Gráficos y visualizaciones
- **React Hook Form + Zod**: Validación de formularios

### Backend

- **Firebase Functions**: Serverless functions
- **Express.js**: Framework web
- **Telegraf**: Framework para bot de Telegram
- **Firestore**: Base de datos NoSQL
- **Firebase Auth**: Autenticación
- **TypeScript**: Tipado estático

## Flujo de Datos

### 1. Autenticación

```
Usuario → Firebase Auth → Token JWT → Backend Middleware → Firestore
```

### 2. Registro de Transacción (Web)

```
Usuario → Frontend Form → Validación → API Call → Backend → Firestore
```

### 3. Registro de Transacción (Telegram)

```
Usuario → Telegram Bot → Telegraf → Parser → Firestore
```

### 4. Generación de Reportes

```
Scheduled Function → Query Firestore → Calcular Totales → Guardar Reporte
```

## Patrones de Diseño

### Frontend

- **Container/Presentational Pattern**: Separación de lógica y presentación
- **Custom Hooks**: Encapsulación de lógica reutilizable
- **React Query**: Cache y sincronización de datos del servidor

### Backend

- **RESTful API**: Endpoints siguiendo convenciones REST
- **Middleware Pattern**: Autenticación, validación, error handling
- **Service Layer**: Separación de lógica de negocio

## Seguridad

### Autenticación

- Firebase Authentication con tokens JWT
- Middleware de autenticación en todas las rutas protegidas
- Validación de permisos basada en roles

### Firestore Rules

- Reglas de seguridad a nivel de documento
- Validación de pertenencia a familia
- Restricción de operaciones por usuario

### Variables de Entorno

- Tokens y secretos en variables de entorno
- No commitear archivos .env
- Usar Firebase Config para functions

## Escalabilidad

### Horizontal

- Firebase Functions escalan automáticamente
- Firestore maneja múltiples lecturas/escrituras concurrentes

### Vertical

- Índices en Firestore para queries eficientes
- Paginación en listados grandes
- Cache con React Query en frontend

## Monitoreo

- Firebase Console para métricas de functions
- Logs estructurados con console.log/error
- Error tracking (a implementar: Sentry)

## Próximos Pasos

1. Implementar autenticación completa
2. Agregar tests unitarios e integración
3. Configurar CI/CD
4. Implementar monitoreo avanzado
5. Optimizar performance
