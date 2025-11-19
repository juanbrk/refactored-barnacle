# Quick Start Guide

Guía rápida para comenzar a desarrollar en la plataforma de finanzas hogareñas.

## 1. Configuración Inicial

### Instalar dependencias

```bash
# Desde la raíz del proyecto
npm install

# Frontend
cd frontend && npm install && cd ..

# Backend
cd backend/functions && npm install && cd ../..

# Shared
cd shared && npm install && cd ..
```

### Configurar Firebase

1. Crear proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilitar:
   - Firestore Database
   - Authentication
   - Functions
   - Storage (opcional)

3. Instalar Firebase CLI:
```bash
npm install -g firebase-tools
firebase login
```

4. Actualizar `.firebaserc`:
```json
{
  "projects": {
    "default": "tu-project-id-aqui"
  }
}
```

5. Configurar variables de entorno:

**Frontend** (`frontend/.env`):
```env
VITE_API_URL=http://localhost:5001/tu-project-id/us-central1
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-project-id
VITE_FIREBASE_STORAGE_BUCKET=tu-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

**Backend** (`backend/functions/.env`):
```env
TELEGRAM_BOT_TOKEN=tu_telegram_bot_token
FIREBASE_PROJECT_ID=tu-project-id
```

### Configurar Bot de Telegram

1. Abrir Telegram y buscar @BotFather
2. Enviar `/newbot`
3. Seguir las instrucciones
4. Copiar el token y agregarlo a `.env`

## 2. Inicializar Base de Datos

```bash
cd backend/functions

# Compilar TypeScript
npm run build

# Inicializar categorías
node lib/utils/init-categories.js
```

## 3. Desarrollo Local

### Frontend

```bash
cd frontend
npm run dev
```

Abrir http://localhost:5173

### Backend (Emuladores)

```bash
cd backend
firebase emulators:start
```

Esto iniciará:
- Functions en http://localhost:5001
- Firestore en http://localhost:8080
- UI de emuladores en http://localhost:4000

## 4. Estructura del Proyecto

```
refactored-barnacle/
├── frontend/          # App React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   └── package.json
│
├── backend/           # Firebase Functions
│   ├── functions/
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   ├── bot/
│   │   │   └── middleware/
│   │   └── package.json
│   └── firebase.json
│
└── shared/           # Código compartido
    ├── types/
    └── constants/
```

## 5. Flujo de Trabajo

### Crear una nueva feature

```bash
# Crear branch
git checkout -b feature/nueva-funcionalidad

# Hacer cambios
# ...

# Commit
git add .
git commit -m "feat: descripción de la feature"

# Push
git push origin feature/nueva-funcionalidad
```

### Testing

```bash
# Frontend
cd frontend
npm run test

# Backend
cd backend/functions
npm run test
```

## 6. Comandos Útiles

```bash
# Linting
npm run lint

# Build
npm run build

# Deploy functions
cd backend
npm run deploy

# Ver logs de functions
firebase functions:log
```

## 7. Probar el Bot de Telegram

1. Buscar tu bot en Telegram
2. Enviar `/start`
3. Probar comandos:
   - `/gasto 1000 comida Pizza`
   - `/ingreso 50000 Sueldo`
   - `/resumen`
   - `/categorias`

## 8. Próximos Pasos

Revisar `/docs/TODO.md` para ver el plan de desarrollo completo.

### Tickets prioritarios:

1. **SETUP-001**: Configurar Firebase Project ✓
2. **SETUP-002**: Configurar Telegram Bot ✓
3. **BACKEND-001**: Implementar Autenticación
4. **FRONTEND-001**: Implementar Autenticación UI
5. **FRONTEND-002**: Dashboard Principal
6. **BACKEND-004**: Mejorar Bot de Telegram

## 9. Recursos

- [Documentación Completa](./docs/)
- [Arquitectura](./docs/ARCHITECTURE.md)
- [Modelo de Datos](./docs/DATA_MODEL.md)
- [Plan de Desarrollo](./docs/TODO.md)
- [Guía de Contribución](./docs/CONTRIBUTING.md)

## 10. Troubleshooting

### Error: Firebase project not found

```bash
firebase use --add
# Seleccionar tu proyecto
```

### Error: Permission denied

Verificar Firestore Rules en Firebase Console.

### Bot no responde

1. Verificar token en `.env`
2. Verificar que functions estén desplegadas
3. Verificar logs: `firebase functions:log`

## Contacto

Para preguntas o problemas, crear un issue en el repositorio.
