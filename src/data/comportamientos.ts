export type RolEvaluador = 'CAPATAZ' | 'COORD_CONTRATISTA' | 'LUZ_DEL_SUR' | 'JEFE_SECCION' | 'SUPERVISOR_AUTO';

export type CriterioEvaluacion = 'SEGURIDAD' | 'OBJETIVOS' | 'CALIDAD' | 'HABILIDADES_BLANDAS';

export interface EscalaNivel {
  valor: number;
  etiqueta: string;
  descripcion: string;
}

export const ESCALA_TECSUR: EscalaNivel[] = [
  { valor: 0, etiqueta: 'Ausente (0)', descripcion: 'El comportamiento no ocurre o no hay evidencia de que ocurra.' },
  { valor: 50, etiqueta: 'Irregular (50)', descripcion: 'Ocurre a veces; depende del día, del frente o de que alguien lo recuerde.' },
  { valor: 75, etiqueta: 'Conforme en parte (75)', descripcion: 'Ocurre en la mayoría de los casos, con apoyo o con omisiones no críticas.' },
  { valor: 100, etiqueta: 'Conforme (100)', descripcion: 'Ocurre como se describe, con evidencia verificable en la visita y en los registros.' },
  { valor: 120, etiqueta: 'Sostenido (120)', descripcion: 'Ocurre siempre, sin supervisión; modela y exige en su equipo.' },
];

export interface Comportamiento {
  id: number;
  bloque: 'INICIO Y VALIDACIÓN TÉCNICA' | 'PLANIFICACIÓN Y PREPARACIÓN' | 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO' | 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE';
  criterio: CriterioEvaluacion;
  descripcion: string;
  rolesObservadores: RolEvaluador[];
}

export const COMPORTAMIENTOS_SUPERVISOR: Comportamiento[] = [
  // 1-4: INICIO Y VALIDACIÓN TÉCNICA
  {
    id: 1,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'OBJETIVOS',
    descripcion: 'Realiza la inspección previa del frente de trabajo antes de autorizar el inicio de las actividades.',
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 2,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'CALIDAD',
    descripcion: 'Contrasta las condiciones reales del campo con el alcance, planos, croquis, especificaciones técnicas y requisitos del cliente.',
    rolesObservadores: ['LUZ_DEL_SUR', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 3,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica que la SST cuente con la documentación completa, vigente y admisible antes de iniciar los trabajos.',
    rolesObservadores: ['LUZ_DEL_SUR', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 4,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'CALIDAD',
    descripcion: 'Identifica oportunamente interferencias, accesos restringidos, riesgos del entorno, condiciones climáticas u otros obstáculos que puedan afectar la ejecución.',
    rolesObservadores: ['LUZ_DEL_SUR', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },

  // 5-10: PLANIFICACIÓN Y PREPARACIÓN
  {
    id: 5,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Programa las actividades y distribuye las SST de acuerdo con las prioridades operativas, los plazos comprometidos, la criticidad de los trabajos y la capacidad disponible.',
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 6,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Asigna o reasigna cuadrillas, frentes de trabajo y recursos de supervisión de acuerdo con la carga operativa y la criticidad de las actividades.',
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 7,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'CALIDAD',
    descripcion: 'Verifica anticipadamente la disponibilidad, cantidad, condición y especificación de los materiales requeridos para ejecutar el trabajo.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 8,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica que los equipos, herramientas, vehículos, maquinaria y recursos especiales requeridos se encuentren disponibles, operativos y en condiciones seguras.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 9,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Gestiona con anticipación los permisos, resguardos, apoyo policial, prevención vial, accesos, maquinaria u otros recursos necesarios para ejecutar el trabajo de forma segura y continua.',
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 10,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Identifica actividades críticas y establece medidas preventivas, coordinaciones o reprogramaciones para evitar impactos en seguridad, calidad, plazo o continuidad del servicio.',
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },

  // 11-16: SUPERVISIÓN Y EJECUCIÓN EN CAMPO
  {
    id: 11,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'HABILIDADES_BLANDAS',
    descripcion: 'Realiza y registra la Instrucción Previa en Campo, comunicando las tareas, riesgos, controles, responsabilidades y cambios de condición al equipo.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 12,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica antes y durante la ejecución el uso correcto de EPP y el cumplimiento de los controles de seguridad establecidos.',
    rolesObservadores: ['CAPATAZ', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 13,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica que la zona de trabajo cuente con señalización, delimitación y condiciones adecuadas para proteger a trabajadores, peatones, terceros y tránsito.',
    rolesObservadores: ['LUZ_DEL_SUR', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 14,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'CALIDAD',
    descripcion: 'Verifica que el personal y los contratistas cuenten con autorizaciones, identificación vigente, competencias y requisitos documentarios aplicables antes de ejecutar actividades.',
    rolesObservadores: ['LUZ_DEL_SUR', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 15,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'CALIDAD',
    descripcion: 'Supervisa directamente los momentos críticos de la actividad y verifica que el trabajo se ejecute de acuerdo con los planos, procedimientos, especificaciones técnicas y estándares del cliente.',
    rolesObservadores: ['LUZ_DEL_SUR', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 16,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'HABILIDADES_BLANDAS',
    descripcion: 'Brinda orientación técnica clara al capataz y a la cuadrilla, resuelve consultas y corrige oportunamente prácticas que puedan generar riesgos, retrabajos o incumplimientos.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },

  // 17-20: GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE
  {
    id: 17,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'SEGURIDAD',
    descripcion: 'Identifica, registra y comunica actos o condiciones subestándares; realiza inspecciones y observaciones preventivas y verifica la aplicación de Toma 5 y ALERT.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 18,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'SEGURIDAD',
    descripcion: 'Paraliza el trabajo ante una condición de riesgo inminente, comunica la situación a la línea de mando y verifica la corrección antes de autorizar el reinicio.',
    rolesObservadores: ['CAPATAZ', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 19,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'HABILIDADES_BLANDAS',
    descripcion: 'Gestiona cambios, interferencias, replanteos, contingencias y restricciones durante la ejecución; evalúa su impacto, obtiene las autorizaciones requeridas y registra las decisiones tomadas.',
    rolesObservadores: ['COORD_CONTRATISTA', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
  {
    id: 20,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'OBJETIVOS',
    descripcion: 'Da seguimiento al avance, indicadores, observaciones y compromisos de cierre, asegurando la conformidad técnica, ambiental, documentaria y económica de la SST.',
    rolesObservadores: ['COORD_CONTRATISTA', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'SUPERVISOR_AUTO'],
  },
];

export const SUBCONTRATISTAS_COMUNES = [
  'COBRA PERU S.A.',
  'CAM PERU S.R.L.',
  'EIFFAGE ENERGIA',
  'CONSORCIO ELECTRICO LIMA',
  'INGENIEROS Y CONTRATISTAS S.A.',
  'OTRA EMPRESA SUBCONTRATISTA',
];

export const CLAVES_ACCESO = {
  CAPATAZ: 'CAPATAZ2026',
  COORD_CONTRATISTA: 'COORD2026',
  LUZ_DEL_SUR: 'LDS2026',
  JEFE_SECCION: 'JEFE2026',
};
