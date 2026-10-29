# CHECKPOINTS DEL PROYECTO · SISTEMA DE EVALUACIÓN 20-20-20 (TECSUR / LUZ DEL SUR)

Este documento registra los hitos, decisiones de arquitectura y el progreso del desarrollo para mantener la trazabilidad del proyecto.

---

## 📌 Hito 1: Fundamentos y Modelo de Datos (Octubre 2026) · [COMPLETADO]
- **Modelo de Actuación:** Integración del Kit del Rol Tecsur (Programa 20-20-20).
- **Lista Maestra de Supervisores:** 24 supervisores cargados y categorizados por:
  - **CR 4070:** Planificación Obras y Mantto BT (3 supervisores).
  - **CR 4301:** Obras Baja Tensión (21 supervisores).
  - **Escalera de Talento:** Supervisor Junior (1), Supervisor C (22), Supervisor B (1).
- **Escala Oficial de Calificación:** Escala Personas & Cultura Tecsur:
  - `0`: Ausente / No lo presenta
  - `50`: Irregular
  - `75`: Conforme en parte
  - `100`: Conforme (Estándar esperado)
  - `120`: Sostenido (Referente / Modela y exige)
  - `N/A`: No observado

---

## 📌 Hito 2: Arquitectura del Flujo de Acceso Ágil · [COMPLETADO]
- **Objetivo:** Garantizar 95%+ de adopción en campo mediante acceso sin contraseñas engorrosas (*Zero-Friction UX*).
- **Pantalla de Inicio con 3 Roles Externos + Portal Jefatura:**
  1. 👷‍♂️ **Soy Capataz** (Contratista de Campo)
  2. 📋 **Soy Coordinador de Proyectos** (Contratista de Gestión)
  3. ⚡ **Soy Proyectista / Coordinador** (Luz del Sur)
  + 👔 **Portal Jefatura de Sección** (Evaluación oficial de 20 comportamientos + Data Dura + Consolidación)
- **Seguridad Ligera:** Validación por PIN/Clave por rol:
  - Capataz: `CAPATAZ2026`
  - Coordinador Contratista: `COORD2026`
  - Luz del Sur: `LDS2026`
  - Jefe de Sección: `JEFE2026`
- **Recolección de Contexto:**
  - Identificación de la **Subcontratista** evaluadora (ej. CAM, Cobra, Eiffage, etc.).
  - Selector inteligente de Supervisor (filtrado por CR 4070/4301 y nombre).
  - Frente / Proyecto / SST observado.

---

## 📌 Hito 3: Formulario Dinámico y Matriz MECE de Comportamientos · [COMPLETADO]
- **Principio de Observabilidad Estricta (McKinsey):**
  - **Capataz:** 7 comportamientos directos de campo (Comps. 7, 8, 11, 12, 16, 17, 18).
  - **Coordinador Contratista:** 9 comportamientos de programación y gestión (Comps. 1, 4, 5, 6, 7, 8, 9, 10, 14, 19, 20).
  - **Luz del Sur:** 10 comportamientos de calidad técnica, SST y cierre (Comps. 2, 3, 4, 12, 13, 14, 15, 18, 19, 20).
  - **Jefe de Sección:** **EVALÚA LOS 20 COMPORTAMIENTOS COMPLETOS**, organizados en los 4 bloques oficiales del Kit Tecsur:
    1. *Inicio y Validación Técnica* (Comps 1–4)
    2. *Planificación y Preparación* (Comps 5–10)
    3. *Supervisión y Ejecución en Campo* (Comps 11–16)
    4. *Gestión de Seguridad, Control y Cierre* (Comps 17–20)

---

## 📌 Hito 6: Despliegue en Producción y Enlace Público en Vivo · [COMPLETADO]
- **Repositorio Oficial:** [github.com/ValentinoCafu/growthbro](https://github.com/ValentinoCafu/growthbro)
- **Enlace Público para Pruebas (HTTPS):**
  👉 **https://valentinocafu.github.io/growthbro/**
- **Características Activas en el Despliegue:**
  - Acceso multidispositivo (celulares en campo, tablets y laptops).
  - Certificado SSL/HTTPS automático y CDN global de alta velocidad.
  - Claves PIN y DNI activas.
  - Motor SheetJS cargado para exportación a Excel `.xlsx` directamente en el navegador.
  - Tablero de KPIs en vivo y Ficha 360° operativas.

---

## 📌 Hito 7: Homologación de las 12 Subcontratistas Oficiales · [COMPLETADO]
- **Empresas Oficiales Incorporadas:**
  1. ALIHCOM BUILD SAC
  2. ALVIMAR
  3. CAMPOS LATAM
  4. COSORCIO CARTER RENSA
  5. ENCOSSA SAC
  6. EOS
  7. GRUCOIN S.A.C.
  8. GRUPO ACUARIUS
  9. GRUPO ENERGIA
  10. KIMSA
  11. NATURAL GAS COMPANY
  12. PRODUCSA
  + Opción abierta para "OTRA EMPRESA (Especificar)".

---

## 📌 Hito 8: Esquema de Autenticación por DNI, Claves de Sección y Gobernanza Edder · [COMPLETADO]
- **Capataces y Coordinadores de Proyecto:** Acceso mediante su número de **DNI (8 dígitos numéricos)**, garantizando trazabilidad y registro fidedigno del evaluador de campo.
- **Proyectistas e Inspectores Luz del Sur:** Clave institucional `LDS2026`.
- **Línea de Mando - 3 Jefaturas de Sección:**
  - Jefe Sección 1 (CR 4301): `SECCION1`
  - Jefe Sección 2 (CR 4301): `SECCION2`
  - Jefe Sección 3 (CR 4070 Planificación): `SECCION3`
  - Clave General Jefatura: `JEFE2026`
- **Jefe de Departamento Obras BT (Edder):** Clave directiva `EDDER2026`, con acceso macro a las 3 secciones, los 24 supervisores y descarga de reportes.

---

## 📌 Hito 9: Redacción Conductual Adaptada al Punto de Vista de Cada Actor · [COMPLETADO]
- Las preguntas se formulan dinámicamente según el rol logueado:
  - **Capataz:** Enfocado en acompañamiento, verificación previa, entrega de materiales, participación en charla de 5 min, uso de EPPs y orientación técnica con buen trato.
  - **Coordinador:** Enfocado en validación de frentes, programación de SST, movimiento de cuadrillas, gestión de permisos municipales/viales y cierre documentario/económico.
  - **Luz del Sur:** Enfocado en contraste estricto con planos y normas LDS, verificación de documentación SST, señalización pública, presencia en momentos críticos y calidad técnica final para recepción.
  - **Jefatura (Secciones / Edder):** Formulación directiva formal de los 20 comportamientos según el estándar corporativo Tecsur.

---

## 📌 Hito 10: Plantilla Excel para el Requerimiento de Matriz de Asignaciones de Edder · [COMPLETADO]
- Botón integrado en el Portal Jefatura que genera y descarga al instante `matriz_requerimiento_asignaciones_edder_tecsur_[fecha].xlsx` con 5 hojas estructuradas para el mapeo objetivo de quién evalúa a quién:
  1. `Supervisores_vs_JefesSec` (24 supervisores con asignación a Sección 1, 2 o 3)
  2. `Supervisores_vs_Coord` (Mapeo de supervisor con contratista, DNI y coordinador)
  3. `Supervisores_vs_Capataces` (Mapeo de supervisor con cuadrilla, DNI y capataz)
  4. `Supervisores_vs_LuzDelSur` (Mapeo de supervisor con inspector y proyectista LDS)
  5. `12_Contratistas_Oficiales` (Catálogo maestro de las 12 homologadas)

---

## 📌 Hito 11: Implementación del Marco Conductual de Martín (Eval 360) · [COMPLETADO]
- **Adopción de la Matriz Fenomenológica y Redacción Verbatim de Martín:**
  - **Capataz de Cuadrilla (17 comportamientos):**
    - 12 observables directos en campo + 5 efectos indirectos de la gestión previa del supervisor (materiales disponibles, herramientas operativas, permisos policiales/viales listos, papeles SST sin esperas, asignación clara de frentes).
    - Ítems: `[1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19]`. Excluye 5 (planificación macro), 10 (planificación preventiva) y 20 (cierre económico/documentario).
  - **Coordinador de Proyectos Contratista (Núcleo de 11 comportamientos):**
    - Opción elegida: Núcleo sugerido por Martín para un instrumento corto, de alto impacto y sin ruido operativo redundante.
    - Ítems: `[2, 4, 7, 9, 11, 12, 15, 16, 18, 19, 20]`.
    - Evalúa: contraste con planos (2), anticipación de interferencias (4), despacho oportuno de materiales (7), permisos y resguardos (9), charla de 5 min registrada (11), uso y control de EPPs (12), presencia en hitos críticos (15), orientación técnica clara (16), paralización ante riesgo inminente (18), gestión de cambios/replanteos (19) y cierre conforme sin pendientes (20).
  - **Proyectista / Inspector Luz del Sur (6 comportamientos de impacto cliente):**
    - Focalizado exclusivamente en la frontera cliente-contratista: contraste con planos y normas LDS (2), alerta temprana de interferencias (4), señalización pública y terceros (13), calidad en momentos críticos (15), replanteos autorizados (19) y entrega de SST conforme a tiempo (20).
    - Ítems: `[2, 4, 13, 15, 19, 20]`. Excluye auditorías internas de Tecsur.
  - **Línea de Mando Jefatura (20 comportamientos ancla):**
    - Conserva los 20 comportamientos estándar del Kit del Rol Tecsur para contrastar y calibrar las perspectivas externas.
- **Redacción de Preguntas:** Adaptada estrictamente desde la experiencia fenomenológica de cada evaluador conforme al documento de trabajo `Plantilla_Trabajo_Martin_Eval360_Parte-completa-MO.docx`.





