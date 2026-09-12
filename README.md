# Genial Smile Care

Plataforma digital para Genial Smile Care - Servicios de higiene bucal y capacitaciones.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **CMS**: Sanity (próximamente)
- **Deployment**: Vercel (recomendado)

## 📁 Estructura del Proyecto

```
genial-smile-care/
├── .cline/                 # Instrucciones para agentes
├── docs/                   # Documentación
├── src/
│   ├── app/               # Páginas y rutas (Next.js App Router)
│   ├── components/        # Componentes React
│   ├── lib/              # Utilidades y configuración
│   └── types/            # Definiciones TypeScript
├── public/               # Archivos estáticos
└── tailwind.config.ts    # Configuración de Tailwind
```

## 🛠️ Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   cd genial-smile-care
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   ```
   http://localhost:3000
   ```

## 📝 Características Principales

### Fase 1: MVP (Actual)
- ✅ Landing page responsiva
- ✅ Página de productos/servicios
- ✅ Página de detalle de producto
- 🔲 Datos simulados (mock)

### Fase 2: Integración Sanity
- 🔲 Conexión a Sanity CMS
- 🔲 Listados dinámicos
- 🔲 Búsqueda y filtros

### Fase 3: Interacción
- 🔲 Formulario de contacto
- 🔲 Sistema de reservas
- 🔲 Carrito de servicios

## 📚 Documentación

- [Guía del Agente](docs/AGENT.md) - Funcionalidades y tipos de datos
- [ADR](docs/ADR.md) - Decisiones arquitectónicas
- [Instrucciones Cline](docs/.cline/instructions.md) - Reglas de desarrollo

## 🔗 Próximos Pasos

1. Conectar Sanity CMS
2. Crear componentes de secciones (Hero, Capacitaciones, etc.)
3. Implementar formularios y contacto
4. Agregar animaciones y transiciones

## 📧 Contacto

Para dudas sobre el desarrollo, consultar la guía del agente en `docs/AGENT.md`.

---

**Última actualización**: 2026-08-31
