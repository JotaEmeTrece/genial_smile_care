# Cline Instructions - Genial Smile Care

## Propósito
Guía de trabajo y reglas para el agente Cline en el proyecto Genial Smile Care.

## Reglas Principales

### Código
- Usar TypeScript en todo el proyecto
- Seguir convenciones de Next.js 14+ con App Router
- Componentes funcionales con hooks de React
- Utilizar Tailwind CSS para estilos

### Estructura
- Mantener componentes pequeños y reutilizables
- Separar lógica de negocio en `lib/`
- Tipos de TypeScript en `types/`
- Datos de prueba en `components/mock/`

### Naming Conventions
- Componentes: PascalCase (`Hero.tsx`, `Navbar.tsx`)
- Funciones/variables: camelCase
- Tipos: PascalCase con prefijo `I` (ej: `IProduct`)

### Commits
- Mensajes descriptivos en español
- Prefijos: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`

## Conectar a Sanity
Cuando se conecte Sanity CMS, reemplazar datos en `components/mock/` con consultas en tiempo real.

## Referencias
- Documentación: `docs/`
- ADRs: `docs/ADR.md`
