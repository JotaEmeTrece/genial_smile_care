# Architectural Decision Records (ADR)

## ADR-001: Selección de Stack y Enfoque Frontend-First

* **Estado:** Aceptado
* **Fecha:** 2026-08-31

### Contexto
El cliente necesita visualizar la propuesta estética y de UI/UX inspirada en Colgate tempranamente para aprobación comercial. Se requiere un desarrollo rápido, sin costos de infraestructura y escalable.

### Decisiones
1. **Framework:** Next.js (App Router) con TypeScript.
2. **Estilos:** Tailwind CSS con la paleta institucional (#48A9A6 Teal, #D4AF37 Gold).
3. **CMS Futuro:** Sanity.io (se integrará en la fase 2 tras la aprobación visual).
4. **Estrategia Inicial:** Mock Data estático en `src/components/mock/` para maquetación rápida sin dependencias externas bloqueantes.