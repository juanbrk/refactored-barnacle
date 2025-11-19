# Guía de Contribución

## Configuración del Entorno de Desarrollo

### Prerequisitos

- Node.js 18+
- npm 9+
- Git
- Cuenta de Firebase
- Cuenta de Telegram (para bot)

### Setup Inicial

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd refactored-barnacle
```

2. **Instalar dependencias**
```bash
npm install
cd frontend && npm install
cd ../backend/functions && npm install
cd ../../shared && npm install
```

3. **Configurar Firebase**
- Crear proyecto en [Firebase Console](https://console.firebase.google.com)
- Instalar Firebase CLI: `npm install -g firebase-tools`
- Login: `firebase login`
- Actualizar `.firebaserc` con tu project ID

4. **Configurar variables de entorno**
- Copiar `.env.example` a `.env` en frontend
- Copiar `.env.example` a `.env` en backend/functions
- Completar con tus credenciales

5. **Iniciar desarrollo**
```bash
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend (emuladores)
cd backend && npm run serve
```

## Convenciones de Código

### TypeScript

- Usar TypeScript strict mode
- Definir tipos explícitos para funciones públicas
- Evitar `any`, usar `unknown` si es necesario
- Usar interfaces para objetos, types para uniones

### Naming Conventions

- **Componentes React**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useTransactions.ts`)
- **Utilities**: camelCase (`formatCurrency.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`MAX_TRANSACTIONS`)
- **Funciones**: camelCase (`calculateTotal`)
- **Interfaces/Types**: PascalCase (`Transaction`, `UserRole`)

### Estructura de Archivos

```
component/
├── ComponentName.tsx          # Componente principal
├── ComponentName.test.tsx     # Tests
├── useComponentName.ts        # Hook personalizado (si aplica)
└── types.ts                   # Tipos específicos (si aplica)
```

### Imports

Orden de imports:
1. React y librerías externas
2. Imports absolutos del proyecto (@/)
3. Imports relativos
4. Tipos
5. Estilos

```typescript
// ✅ Correcto
import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { api } from '@/services/api';
import { Button } from '@/components/Button';

import { formatCurrency } from './utils';

import type { Transaction } from '@/types';
```

## Git Workflow

### Branches

- `main`: Código en producción
- `develop`: Código en desarrollo
- `feature/TICKET-XXX-descripcion`: Features nuevas
- `fix/TICKET-XXX-descripcion`: Bug fixes
- `docs/descripcion`: Cambios en documentación

### Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: Nueva funcionalidad
- `fix`: Bug fix
- `docs`: Cambios en documentación
- `style`: Formateo, punto y coma faltante, etc.
- `refactor`: Refactorización
- `test`: Agregar tests
- `chore`: Mantenimiento

**Ejemplos:**
```bash
git commit -m "feat(transactions): add filter by category"
git commit -m "fix(bot): handle invalid amount input"
git commit -m "docs(readme): update installation steps"
```

### Pull Requests

1. Crear branch desde `develop`
2. Hacer cambios y commits
3. Push a origin
4. Crear PR a `develop`
5. Esperar review
6. Mergear después de aprobación

**Template de PR:**
```markdown
## Descripción
Breve descripción de los cambios

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva feature
- [ ] Breaking change
- [ ] Documentación

## Checklist
- [ ] Código sigue las convenciones del proyecto
- [ ] Se agregaron tests
- [ ] Tests pasan localmente
- [ ] Se actualizó documentación
- [ ] No hay warnings de linter
```

## Testing

### Frontend

```bash
cd frontend
npm run test
```

- Usar React Testing Library
- Mockear APIs y services
- Testing de interacción de usuario

### Backend

```bash
cd backend/functions
npm run test
```

- Testing de endpoints
- Testing de funciones programadas
- Mockear Firestore

## Code Review

### Como Autor

1. **Auto-review primero**: Revisa tus propios cambios antes de PR
2. **Descripción clara**: Explica qué y por qué
3. **Screenshots**: Agregar para cambios UI
4. **Tests**: Asegurar que pasen todos los tests
5. **Tamaño razonable**: PRs pequeños son más fáciles de revisar

### Como Reviewer

1. **Ser constructivo**: Sugerir mejoras, no criticar
2. **Preguntar**: Si algo no está claro, preguntar
3. **Testing**: Probar localmente si es posible
4. **Performance**: Considerar implicaciones de performance
5. **Seguridad**: Verificar manejo de datos sensibles

## Debugging

### Frontend

- Usar React DevTools
- Usar Redux DevTools (si aplica)
- Console.log estratégico
- Source maps habilitados

### Backend

- Usar emuladores de Firebase
- Logs en Firebase Console
- Testing con Postman/Insomnia

## Deploy

### Staging

```bash
# Deploy functions a staging
cd backend
firebase use staging
firebase deploy --only functions
```

### Production

```bash
# Deploy a producción (solo después de testing exhaustivo)
cd backend
firebase use production
firebase deploy --only functions

# Deploy frontend
cd frontend
npm run build
# Upload a hosting
```

## Recursos

- [React Docs](https://react.dev)
- [Firebase Docs](https://firebase.google.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Telegraf Docs](https://telegraf.js.org)

## Preguntas

Si tienes preguntas o encuentras problemas:
1. Revisa la documentación en `/docs`
2. Busca en issues existentes
3. Crea un nuevo issue con detalles
