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

## ADR-002: Esqueleto UI/UX de la Landing (Fase 1, Frontend-Only)

* **Estado:** Aceptado
* **Fecha:** 2026-08-31

### Contexto
Con el stack aprobado (ADR-001), se materializa la propuesta visual de la landing para revisión comercial antes de integrar cualquier CMS. El `AGENT.md` exige trabajo incremental, uso de mock data y la prohibición de tocar backend en esta fase.

### Decisiones
1. **Paleta institucional como tokens de Tailwind:** `primary` (#48A9A6), `accent` (#D4AF37), `surface` (#F8FAF9) y `darkText` (#1E293B) definidos en `tailwind.config.ts`.
2. **Datos simulados tipados:** `src/components/mock/data.ts` expone `mockServices` (capacitaciones + inspección normativa municipal/departamental), `mockJornadas` (5 públicos objetivo) y `mockProducts` (4 productos), con las interfaces `IService`, `IJornada` e `IProduct`.
3. **Composición por secciones:** la landing (`src/app/(site)/page.tsx`) se arma con `Navbar`, `Hero`, `CapacitacionesSection`, `InspeccionSection`, `JornadasSection`, `ProductosPreview` y `Footer`, ubicados en `src/components/sections/` y responsivos con Tailwind CSS.
4. **Iconografía:** `lucide-react` como set de iconos de interfaz. Al no incluir iconos de marcas, las redes sociales del `Footer` se implementan con SVG inline.
5. **Layouts:** layout raíz en `src/app/layout.tsx` (fuente `Inter` como `--font-inter`, metadata e import de `globals.css`); `src/app/(site)/layout.tsx` queda como layout de grupo simple, sin `<html>/<body>`. Se corrigieron el import roto de `globals.css` y un import sin usar en `productos/[slug]/page.tsx` que impedían compilar.
6. **Sin backend:** no se instala ni configura Sanity ni base de datos alguna; los datos permanecen estáticos hasta la aprobación visual.

### Consecuencias
- La landing compila y es navegable (`pnpm build` y `pnpm type-check` en verde) para la revisión comercial.
- La futura integración de Sanity queda acotada a `data.ts` y a los componentes de sección.
- `lucide-react` se incorpora como dependencia de UI de la fase 1.

## ADR-003: Identidad Visual y Tratamiento del Logo

* **Estado:** Aceptado
* **Fecha:** 2026-08-31

### Contexto
El activo de marca se recibió como `Assets/logo genial smile care.jpeg` (1408×768, fondo crema uniforme). Para usarlo en la web se requiere una versión con fondo transparente y una versión vectorial, sin alterar ni reemplazar el archivo original.

### Decisiones
1. **Activos generados sin reemplazar el original:** `logo-genial-smile-care.png` (transparente, 400×460, escala de grises + alpha) y `logo-genial-smile-care.svg` (vectorial, 153 curvas, `viewBox="0 0 526 606"`), publicados en `public/images/` y con copia en `Assets/`.
2. **Procesamiento de imagen:** recorte de márgenes, remoción de fondo por umbral de distancia al color de fondo y limpieza morfológica con Pillow + numpy + scipy. Vectorización con `potracer` (puerto puro de Potrace); se descartó `vtracer` por fallos de ejecución (Access Violation) en el entorno actual.
3. **Uso en la interfaz:** el logo reemplaza al icono genérico en `Navbar` y `Footer`, que son sus únicos puntos de aparición (verificado por búsqueda del asset).
4. **Nomenclatura de marca:** se elimina el sufijo `.com` del nombre, quedando «Genial Smile Care» en navbar, footer y pie de copyright.
5. **Color de marca del logo:** el logo se tiñe con el dorado institucional (#D4AF37, token `accent`) mediante la utilidad `.logo-accent` definida en `globals.css`: `filter: brightness(0) invert(96%) sepia(87%) saturate(753%) hue-rotate(323deg) brightness(69%) contrast(171%) drop-shadow(0 1px 1px rgba(0,0,0,.25))`. La cadena se calculó por optimización numérica (error RMS 0.0 frente al hex objetivo) y se centraliza en una clase CSS por legibilidad y reutilización. Sobre el fondo oscuro del footer el contraste dorado resultante es de ≈7:1.

### Consecuencias
- La marca se muestra con el activo real, en el dorado institucional y es escalable (PNG para bitmaps, SVG para usos vectoriales).
- El color del logo se controla por CSS, sin necesidad de regenerar activos.
- Los activos derivados son reproducibles a partir del JPEG original, que se conserva intacto en `Assets/`.