-- =========================================================================
-- ESQUEMA DE BASE DE DATOS · SISTEMA EVALUACIÓN 20-20-20 TECSUR / LUZ DEL SUR
-- Compatible con PostgreSQL y Supabase
-- =========================================================================

-- 1. Tabla de Centros de Rendimiento (CR)
CREATE TABLE IF NOT EXISTS centros_rendimiento (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo VARCHAR(10) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabla de Supervisores Tecsur
CREATE TABLE IF NOT EXISTS supervisores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre_completo VARCHAR(150) NOT NULL,
    cargo VARCHAR(50) NOT NULL CHECK (cargo IN ('SUPERVISOR JUNIOR', 'SUPERVISOR C', 'SUPERVISOR B', 'SUPERVISOR A')),
    cr_id UUID REFERENCES centros_rendimiento(id) ON DELETE RESTRICT,
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabla de Evaluaciones de Campo
CREATE TABLE IF NOT EXISTS evaluaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    supervisor_id UUID NOT NULL REFERENCES supervisores(id) ON DELETE CASCADE,
    rol_evaluador VARCHAR(30) NOT NULL CHECK (rol_evaluador IN ('CAPATAZ', 'COORD_CONTRATISTA', 'LUZ_DEL_SUR', 'JEFE_SECCION')),
    empresa_subcontratista VARCHAR(150),
    nombre_evaluador VARCHAR(150),
    proyecto_frente VARCHAR(200),
    fecha_evaluacion TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Respuestas por Comportamiento Observable (0, 50, 75, 100, 120 o -1 para N/A)
CREATE TABLE IF NOT EXISTS respuestas_comportamiento (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    evaluacion_id UUID NOT NULL REFERENCES evaluaciones(id) ON DELETE CASCADE,
    comportamiento_id INTEGER NOT NULL CHECK (comportamiento_id BETWEEN 1 AND 20),
    puntaje INTEGER NOT NULL CHECK (puntaje IN (-1, 0, 50, 75, 100, 120)),
    comentario TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Data Dura / KPIs Consolidados del Jefe de Sección
CREATE TABLE IF NOT EXISTS kpis_seccion (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    supervisor_id UUID NOT NULL REFERENCES supervisores(id) ON DELETE CASCADE,
    periodo VARCHAR(20) NOT NULL, -- Ej: '2026-10'
    pct_avance_objetivos NUMERIC(5,2), -- 0.00 a 100.00 %
    incidentes_seguridad INTEGER DEFAULT 0,
    no_conformidades_calidad INTEGER DEFAULT 0,
    calificacion_liderazgo_jefe INTEGER CHECK (calificacion_liderazgo_jefe IN (0, 50, 75, 100, 120)),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (supervisor_id, periodo)
);

-- =========================================================================
-- SEED DATA: CRs Y LOS 24 SUPERVISORES DE TECSUR
-- =========================================================================

INSERT INTO centros_rendimiento (codigo, nombre) VALUES
('4070', 'PLANIFICACION OBRAS Y MANTTO BT'),
('4301', 'OBRAS BAJA TENSION')
ON CONFLICT (codigo) DO NOTHING;

INSERT INTO supervisores (nombre_completo, cargo, cr_id)
SELECT s.nombre, s.cargo, cr.id
FROM (VALUES
    -- CR 4070 Planificación Obras y Mantto BT
    ('CARDENAS YNGA MARTHA ELENA', 'SUPERVISOR C', '4070'),
    ('MELGAREJO DIAZ STEVEN ALFREDO', 'SUPERVISOR C', '4070'),
    ('YATACO NAVARRO KEWIN HAROLD STEVE', 'SUPERVISOR C', '4070'),
    -- CR 4301 Obras Baja Tensión
    ('AYMA CHAUPIS EDSON LEONARDO', 'SUPERVISOR C', '4301'),
    ('YAPU ABARCA LARRY ERICK', 'SUPERVISOR C', '4301'),
    ('RAMOS AUQUE LUIS ALBERTO', 'SUPERVISOR C', '4301'),
    ('DIBURCIO RAMOS MARCO ANTONIO', 'SUPERVISOR C', '4301'),
    ('HERMITANO LEON SMITH FRANCKLIN', 'SUPERVISOR C', '4301'),
    ('QUISPE ALFARO BLADIMIRO', 'SUPERVISOR B', '4301'),
    ('VASCO MALLMA DENIS MARXS', 'SUPERVISOR C', '4301'),
    ('HERNANDEZ LOPEZ FREDDY ANTONIO', 'SUPERVISOR C', '4301'),
    ('VALLEJOS HOLGUIN CESAR ELOY', 'SUPERVISOR C', '4301'),
    ('ESPIRILLA CACERES MARCO ANTONIO', 'SUPERVISOR C', '4301'),
    ('VALENCIA AZULA SAMUEL ALEJANDRO', 'SUPERVISOR C', '4301'),
    ('ELIAS MANRIQUE ALEXANDER ALEXIS', 'SUPERVISOR C', '4301'),
    ('DOMINGUEZ RAMIREZ HENRY', 'SUPERVISOR C', '4301'),
    ('CHIRITO MILLONES VICTOR JUAN RODOLFO', 'SUPERVISOR C', '4301'),
    ('REANO LEON HANS ERNESTO', 'SUPERVISOR C', '4301'),
    ('ARANGO PENA RAUL ROLANDO', 'SUPERVISOR JUNIOR', '4301'),
    ('VILLA DIAZ JOEL ALFREDO', 'SUPERVISOR C', '4301'),
    ('CHILENO DIAZ ELVIS JOSEPH', 'SUPERVISOR C', '4301'),
    ('QUIMPER REYNOSO IVAN', 'SUPERVISOR C', '4301'),
    ('RAMIREZ QUISPE LUIS ANTONNY', 'SUPERVISOR C', '4301'),
    ('CARBAJAL VILLASANA JOEL', 'SUPERVISOR C', '4301')
) AS s(nombre, cargo, cr_codigo)
JOIN centros_rendimiento cr ON cr.codigo = s.cr_codigo;

-- =========================================================================
-- VISTAS SQL PARA EXTRACCIÓN DE DATA CRUDA Y CÁLCULO DE KPIS (POWER BI / EXCEL)
-- =========================================================================

-- Vista 1: Data Cruda Detallada (Todas las respuestas para análisis analítico)
CREATE OR REPLACE VIEW vista_data_cruda_evaluaciones AS
SELECT 
    e.id AS evaluacion_id,
    e.fecha_evaluacion,
    e.rol_evaluador,
    e.empresa_subcontratista,
    e.nombre_evaluador,
    e.proyecto_frente,
    s.nombre_completo AS supervisor_nombre,
    s.cargo AS supervisor_cargo,
    cr.codigo AS cr_codigo,
    cr.nombre AS cr_nombre,
    r.comportamiento_id,
    r.puntaje,
    CASE 
        WHEN r.puntaje = 0 THEN 'Ausente'
        WHEN r.puntaje = 50 THEN 'Irregular'
        WHEN r.puntaje = 75 THEN 'Conforme en parte'
        WHEN r.puntaje = 100 THEN 'Conforme'
        WHEN r.puntaje = 120 THEN 'Sostenido'
        WHEN r.puntaje = -1 THEN 'No aplica'
    END AS puntaje_descriptor
FROM evaluaciones e
JOIN supervisores s ON s.id = e.supervisor_id
JOIN centros_rendimiento cr ON cr.id = s.cr_id
JOIN respuestas_comportamiento r ON r.evaluacion_id = e.id;

-- Vista 2: Scorecard Consolidado de KPIs por Supervisor
CREATE OR REPLACE VIEW vista_kpi_consolidado_supervisores AS
SELECT 
    s.id AS supervisor_id,
    s.nombre_completo,
    s.cargo,
    cr.codigo AS cr_codigo,
    -- Promedio Jefe de Sección (20 Comps)
    ROUND(AVG(CASE WHEN e.rol_evaluador = 'JEFE_SECCION' AND r.puntaje >= 0 THEN r.puntaje END), 1) AS prom_jefatura,
    -- Promedio Capataz
    ROUND(AVG(CASE WHEN e.rol_evaluador = 'CAPATAZ' AND r.puntaje >= 0 THEN r.puntaje END), 1) AS prom_capataz,
    -- Promedio Coordinador Contratista
    ROUND(AVG(CASE WHEN e.rol_evaluador = 'COORD_CONTRATISTA' AND r.puntaje >= 0 THEN r.puntaje END), 1) AS prom_coord_contratista,
    -- Promedio Luz del Sur
    ROUND(AVG(CASE WHEN e.rol_evaluador = 'LUZ_DEL_SUR' AND r.puntaje >= 0 THEN r.puntaje END), 1) AS prom_luz_del_sur,
    -- Conteo de Evaluaciones Recibidas
    COUNT(DISTINCT e.id) AS total_evaluaciones_recibidas
FROM supervisores s
JOIN centros_rendimiento cr ON cr.id = s.cr_id
LEFT JOIN evaluaciones e ON e.supervisor_id = s.id
LEFT JOIN respuestas_comportamiento r ON r.evaluacion_id = e.id
GROUP BY s.id, s.nombre_completo, s.cargo, cr.codigo;

