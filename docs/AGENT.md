# Guía de Operación para el Agente (Cline)

## Reglas de Trabajo Obligatorias

1. **Modo Incremental:** No intentes construir múltiples páginas de una vez. Trabaja componente por componente.
2. **Prohibido tocar Backend en Fase 1:** No instales ni configures SDKs de Sanity hasta que el esqueleto visual sea aprobado. Usa los datos estáticos de `src/components/mock/`.
3. **Estilos Obligatorios:** 
   - Primario: `#48A9A6`
   - Acento / Gold: `#D4AF37`
   - Texto oscuro: `#1E293B`
   - Fondo superficie: `#F8FAF9`
4. **Resumen de Diffs:** Al finalizar CADA tarea, debes generar un resumen claro de los archivos creados o modificados y mostrar el `git diff` o listado de cambios exactos para revisión antes de pasar al siguiente paso.
5. **No Refactorizar Sin Permiso:** Solo modifica los componentes especificados en el prompt activo.