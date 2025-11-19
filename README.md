# Plataforma de Gestión de Finanzas Hogareñas

Una plataforma integral para la gestión y control de finanzas familiares, con bot de Telegram para seguimiento diario y aplicación web para análisis detallado.

## 🎯 Características Principales

- **Bot de Telegram**: Registro rápido de gastos e ingresos mediante chat
- **Reportes Mensuales**: Análisis detallado de gastos por categorías
- **Multi-usuario**: Seguimiento de transacciones por miembro familiar
- **Gestión de Categorías**: Tarjetas, Servicios, Comida, Salud, Esparcimiento, etc.
- **Seguimiento de Costos Fijos**: Monitoreo de evolución de gastos recurrentes
- **Análisis de Tendencias**: Visualización de progresión de ingresos y egresos

## 🏗️ Arquitectura del Proyecto

```
refactored-barnacle/
├── frontend/          # Aplicación React con Vite
├── backend/           # Firebase Functions + Express + Telegraf
├── shared/            # Tipos y constantes compartidas
└── docs/              # Documentación del proyecto
```

## 🛠️ Stack Tecnológico

### Frontend
- **React** 18+ con TypeScript
- **Vite** para desarrollo y build
- **TailwindCSS** para estilos
- **React Query** para gestión de estado del servidor
- **React Router** para navegación

### Backend
- **Firebase Functions** para serverless
- **Express.js** para API REST
- **Telegraf** para bot de Telegram
- **Firestore** como base de datos
- **TypeScript** para type safety

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+
- npm o yarn
- Firebase CLI
- Cuenta de Firebase
- Bot Token de Telegram

### Instalación

```bash
# Instalar dependencias del workspace
npm install

# Instalar dependencias del frontend
cd frontend && npm install

# Instalar dependencias del backend
cd ../backend/functions && npm install

# Instalar dependencias compartidas
cd ../../shared && npm install
```

### Configuración

1. **Firebase**:
   - Crear proyecto en Firebase Console
   - Configurar Firestore
   - Configurar Firebase Functions
   - Actualizar `.firebaserc` con tu project ID

2. **Telegram Bot**:
   - Crear bot con @BotFather
   - Obtener token del bot
   - Configurar variables de entorno

3. **Variables de Entorno**:
   - Copiar `.env.example` a `.env` en cada proyecto
   - Configurar las variables necesarias

### Desarrollo

```bash
# Frontend (puerto 5173)
cd frontend
npm run dev

# Backend (emuladores Firebase)
cd backend
npm run serve

# Deploy a Firebase
cd backend
npm run deploy
```

## 📚 Documentación

- [Arquitectura del Sistema](./docs/ARCHITECTURE.md)
- [Modelo de Datos](./docs/DATA_MODEL.md)
- [Plan de Desarrollo (TODO)](./docs/TODO.md)
- [Guía de Contribución](./docs/CONTRIBUTING.md)

## 🎯 Roadmap

### Fase 1 - MVP (Actual)
- ✅ Estructura base del proyecto
- ⏳ Bot de Telegram básico
- ⏳ API REST para transacciones
- ⏳ Modelo de datos en Firestore
- ⏳ Autenticación de usuarios

### Fase 2 - Interfaz Web
- ⏳ Dashboard principal
- ⏳ Gestión de categorías
- ⏳ Reportes mensuales
- ⏳ Visualización de tendencias

### Fase 3 - Análisis Avanzado
- ⏳ Predicción de gastos
- ⏳ Alertas de presupuesto
- ⏳ Comparativas mensuales
- ⏳ Exportación de datos

### Fase 4 - Inversiones
- ⏳ Integración con plataformas de inversión
- ⏳ Sugerencias de ahorro
- ⏳ Estrategias de inversión personalizadas

## 📝 Licencia

Proyecto privado - Uso familiar

## 👥 Equipo

Desarrollado para la gestión financiera familiar
