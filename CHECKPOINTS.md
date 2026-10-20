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
  - Claves PIN activas (`CAPATAZ2026`, `COORD2026`, `LDS2026`, `JEFE2026`).
  - Motor SheetJS cargado para exportación a Excel `.xlsx` directamente en el navegador.
  - Tablero de KPIs en vivo y Ficha 360° operativas.



