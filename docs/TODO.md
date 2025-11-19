# Plan de Desarrollo - Tickets TODO

## Fase 1: Setup y Configuración Inicial

### SETUP-001: Configurar Firebase Project
**Prioridad**: Alta
**Estimación**: 2 horas

- [ ] Crear proyecto en Firebase Console
- [ ] Habilitar Firestore Database
- [ ] Habilitar Firebase Authentication
- [ ] Habilitar Firebase Functions
- [ ] Configurar billing para Functions
- [ ] Actualizar `.firebaserc` con project ID
- [ ] Crear archivo `.env` en frontend con configuración
- [ ] Crear archivo `.env` en backend/functions con configuración

### SETUP-002: Configurar Telegram Bot
**Prioridad**: Alta
**Estimación**: 1 hora

- [ ] Crear bot con @BotFather en Telegram
- [ ] Obtener token del bot
- [ ] Configurar token en Firebase Functions config
- [ ] Configurar webhook URL

### SETUP-003: Instalar Dependencias
**Prioridad**: Alta
**Estimación**: 30 minutos

```bash
# Root
npm install

# Frontend
cd frontend && npm install

# Backend Functions
cd backend/functions && npm install

# Shared
cd shared && npm install
```

### SETUP-004: Configurar Categorías Iniciales
**Prioridad**: Media
**Estimación**: 1 hora

- [ ] Crear script para poblar categorías en Firestore
- [ ] Ejecutar script con categorías de gastos e ingresos
- [ ] Verificar categorías en Firebase Console

---

## Fase 2: Backend - API y Bot

### BACKEND-001: Implementar Autenticación
**Prioridad**: Alta
**Estimación**: 4 horas

- [ ] Configurar Firebase Auth en frontend
- [ ] Implementar signup/login en frontend
- [ ] Crear middleware de autenticación completo
- [ ] Implementar verificación de roles
- [ ] Agregar endpoints de autenticación
- [ ] Testing de autenticación

### BACKEND-002: Completar CRUD de Transacciones
**Prioridad**: Alta
**Estimación**: 4 horas

- [ ] Agregar validaciones con Zod
- [ ] Implementar paginación
- [ ] Agregar filtros avanzados
- [ ] Implementar búsqueda por texto
- [ ] Testing de endpoints

### BACKEND-003: Implementar Servicio de Reportes
**Prioridad**: Media
**Estimación**: 6 horas

- [ ] Crear servicio de generación de reportes
- [ ] Implementar cálculo de totales por categoría
- [ ] Implementar cálculo de totales por usuario
- [ ] Implementar detección de gastos fijos
- [ ] Optimizar queries con índices
- [ ] Testing de reportes

### BACKEND-004: Mejorar Bot de Telegram
**Prioridad**: Alta
**Estimación**: 8 horas

- [ ] Implementar registro de usuarios desde Telegram
- [ ] Vincular telegramId con userId en Firestore
- [ ] Agregar validación de permisos por familia
- [ ] Implementar comando para ver últimas transacciones
- [ ] Agregar comando para editar transacciones
- [ ] Agregar comando para eliminar transacciones
- [ ] Implementar conversaciones interactivas
- [ ] Agregar botones inline para categorías
- [ ] Mejorar mensajes de respuesta con formato
- [ ] Testing del bot

### BACKEND-005: Implementar Cloud Functions Programadas
**Prioridad**: Media
**Estimación**: 4 horas

- [ ] Implementar generación automática de reportes mensuales
- [ ] Implementar backup automático diario
- [ ] Implementar función de limpieza de datos antiguos
- [ ] Configurar timezone correcto
- [ ] Testing de scheduled functions

### BACKEND-006: Gestión de Divisas
**Prioridad**: Media
**Estimación**: 3 horas

- [ ] Crear endpoints para currency_exchanges
- [ ] Implementar cálculo automático de tipo de cambio
- [ ] Agregar conversión ARS ↔ USD en reportes
- [ ] Testing de conversiones

---

## Fase 3: Frontend - Interfaz Web

### FRONTEND-001: Implementar Autenticación UI
**Prioridad**: Alta
**Estimación**: 4 horas

- [ ] Crear página de Login
- [ ] Crear página de Signup
- [ ] Implementar Firebase Auth en frontend
- [ ] Agregar protección de rutas
- [ ] Implementar logout
- [ ] Agregar manejo de errores de autenticación

### FRONTEND-002: Dashboard Principal
**Prioridad**: Alta
**Estimación**: 8 horas

- [ ] Crear tarjetas de resumen (ingresos, egresos, balance)
- [ ] Implementar gráfico de ingresos vs egresos (Recharts)
- [ ] Implementar gráfico de gastos por categoría
- [ ] Agregar filtros por período (mes actual, trimestre, año)
- [ ] Implementar hooks personalizados para datos
- [ ] Integrar con React Query
- [ ] Agregar skeleton loaders

### FRONTEND-003: Gestión de Transacciones
**Prioridad**: Alta
**Estimación**: 10 horas

- [ ] Crear tabla de transacciones con paginación
- [ ] Implementar formulario de nueva transacción
- [ ] Agregar validación con React Hook Form + Zod
- [ ] Implementar edición de transacciones
- [ ] Implementar eliminación de transacciones
- [ ] Agregar filtros (fecha, categoría, tipo, usuario)
- [ ] Implementar búsqueda por texto
- [ ] Agregar ordenamiento por columnas
- [ ] Implementar exportación a CSV
- [ ] Agregar confirmación antes de eliminar

### FRONTEND-004: Reportes Mensuales
**Prioridad**: Media
**Estimación**: 8 horas

- [ ] Crear página de reportes
- [ ] Implementar selector de mes/año
- [ ] Mostrar totales del mes
- [ ] Crear tabla de gastos por categoría
- [ ] Crear tabla de gastos por usuario
- [ ] Implementar gráfico de evolución mensual
- [ ] Agregar comparativa con mes anterior
- [ ] Implementar visualización de gastos fijos
- [ ] Agregar exportación de reporte a PDF

### FRONTEND-005: Configuración y Perfil
**Prioridad**: Baja
**Estimación**: 4 horas

- [ ] Crear página de configuración
- [ ] Implementar edición de perfil de usuario
- [ ] Agregar gestión de categorías personalizadas
- [ ] Implementar invitación de miembros a familia
- [ ] Agregar configuración de notificaciones

### FRONTEND-006: Responsive Design
**Prioridad**: Media
**Estimación**: 4 horas

- [ ] Implementar menú móvil
- [ ] Optimizar dashboard para móvil
- [ ] Optimizar formularios para móvil
- [ ] Optimizar tablas para móvil
- [ ] Testing en diferentes dispositivos

---

## Fase 4: Mejoras y Optimizaciones

### OPT-001: Testing
**Prioridad**: Media
**Estimación**: 10 horas

- [ ] Configurar Jest y React Testing Library
- [ ] Escribir tests unitarios de componentes
- [ ] Escribir tests de hooks personalizados
- [ ] Configurar testing de functions
- [ ] Escribir tests de endpoints API
- [ ] Configurar coverage reports

### OPT-002: Performance
**Prioridad**: Media
**Estimación**: 4 horas

- [ ] Implementar code splitting en frontend
- [ ] Optimizar bundle size
- [ ] Implementar lazy loading de componentes
- [ ] Optimizar queries de Firestore
- [ ] Agregar índices faltantes
- [ ] Implementar cache strategy

### OPT-003: Error Handling y Logging
**Prioridad**: Media
**Estimación**: 3 horas

- [ ] Implementar error boundaries en React
- [ ] Agregar toast notifications para errores
- [ ] Implementar logging estructurado en backend
- [ ] Configurar Sentry (opcional)

### OPT-004: CI/CD
**Prioridad**: Baja
**Estimación**: 4 horas

- [ ] Configurar GitHub Actions
- [ ] Implementar linting automático
- [ ] Implementar testing automático
- [ ] Configurar deploy automático a Firebase

---

## Fase 5: Features Avanzadas

### FEATURE-001: Presupuestos
**Prioridad**: Baja
**Estimación**: 8 horas

- [ ] Crear modelo de presupuestos
- [ ] Implementar CRUD de presupuestos
- [ ] Agregar alertas de exceso de presupuesto
- [ ] Visualizar progreso de presupuesto
- [ ] Integrar con reportes

### FEATURE-002: Metas de Ahorro
**Prioridad**: Baja
**Estimación**: 6 horas

- [ ] Crear modelo de metas de ahorro
- [ ] Implementar CRUD de metas
- [ ] Agregar tracking de progreso
- [ ] Visualizar metas en dashboard

### FEATURE-003: Predicción de Gastos
**Prioridad**: Baja
**Estimación**: 10 horas

- [ ] Implementar análisis de tendencias
- [ ] Crear predicciones basadas en histórico
- [ ] Agregar sugerencias de ahorro
- [ ] Visualizar predicciones

### FEATURE-004: Integración con Bancos (Futuro)
**Prioridad**: Muy Baja
**Estimación**: TBD

- [ ] Investigar APIs bancarias disponibles
- [ ] Implementar conectores
- [ ] Importación automática de transacciones

### FEATURE-005: Inversiones (Futuro)
**Prioridad**: Muy Baja
**Estimación**: TBD

- [ ] Integrar con plataformas de inversión
- [ ] Tracking de portfolio
- [ ] Sugerencias de inversión basadas en perfil

---

## Priorización Sugerida

### Sprint 1 (2 semanas)
1. SETUP-001, SETUP-002, SETUP-003
2. BACKEND-001
3. FRONTEND-001
4. SETUP-004

### Sprint 2 (2 semanas)
1. BACKEND-002, BACKEND-004
2. FRONTEND-002
3. FRONTEND-003 (parcial)

### Sprint 3 (2 semanas)
1. FRONTEND-003 (completar)
2. BACKEND-003
3. FRONTEND-004

### Sprint 4 (2 semanas)
1. BACKEND-005, BACKEND-006
2. FRONTEND-005, FRONTEND-006
3. OPT-001 (parcial)

### Backlog
- OPT-002, OPT-003, OPT-004
- Todas las FEATURE-XXX

---

## Notas Importantes

1. **Prioriza el MVP**: Enfócate primero en las funcionalidades core (transacciones, reportes, bot básico)

2. **Testing continuo**: No dejes testing para el final, escribe tests a medida que desarrollas

3. **Documentación**: Actualiza documentación de API y tipos a medida que desarrollas

4. **Code Review**: Revisa tu propio código antes de cada commit

5. **Commits semánticos**: Usa conventional commits (feat:, fix:, docs:, etc.)

6. **Branches**: Crea una branch por feature/ticket

7. **Deploy gradual**: Despliega a Firebase solo cuando tengas features estables

## Comandos Útiles

```bash
# Desarrollo frontend
npm run dev:frontend

# Desarrollo backend (emuladores)
cd backend && npm run serve

# Build completo
npm run build

# Deploy functions
cd backend && npm run deploy

# Linting
npm run lint

# Testing
npm run test
```
