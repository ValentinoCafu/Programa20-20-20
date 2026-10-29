export type RolEvaluador = 
  | 'CAPATAZ' 
  | 'COORD_CONTRATISTA' 
  | 'LUZ_DEL_SUR' 
  | 'JEFE_SECCION' 
  | 'JEFE_DEPARTAMENTO' 
  | 'SUPERVISOR_AUTO';

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
  descPorRol?: Partial<Record<RolEvaluador, string>>;
}

/**
 * Matriz de Comportamientos 20-20-20 (Kit del Rol Tecsur)
 * Adaptada con las redacciones fenomenológicas y filtros de pertinencia de Martín (Eval 360).
 * - Capataz: 17 comportamientos observables (12 directos + 5 indirectos)
 * - Coordinador de Proyectos: 11 comportamientos (Núcleo recomendado: 2, 4, 7, 9, 11, 12, 15, 16, 18, 19, 20)
 * - Proyectista Luz del Sur: 6 comportamientos de impacto directo cliente (2, 4, 13, 15, 19, 20)
 * - Jefes de Sección y Departamento: 20 comportamientos completos (Instrumento Ancla original)
 */
export const COMPORTAMIENTOS_SUPERVISOR: Comportamiento[] = [
  // 1-4: INICIO Y VALIDACIÓN TÉCNICA
  {
    id: 1,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'OBJETIVOS',
    descripcion: 'Realiza la inspección previa del frente de trabajo antes de autorizar el inicio de las actividades.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Antes de que mi cuadrilla empiece, el supervisor ha revisado el frente de trabajo y autoriza el inicio recién después de esa revisión.',
      JEFE_SECCION: 'Realiza la inspección previa del frente de trabajo antes de autorizar el inicio de las actividades.',
      JEFE_DEPARTAMENTO: 'Realiza la inspección previa del frente de trabajo antes de autorizar el inicio de las actividades.'
    }
  },
  {
    id: 2,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'CALIDAD',
    descripcion: 'Contrasta las condiciones reales del campo con el alcance, planos, croquis, especificaciones técnicas y requisitos del cliente.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Cuando lo que encontramos en campo no coincide con los planos, el croquis o el alcance, el supervisor lo detecta y lo aclara antes de que ejecutemos.',
      COORD_CONTRATISTA: 'Cuando las condiciones de campo no coinciden con los planos o el alcance, el supervisor lo identifica y define con nosotros cómo proceder antes de ejecutar, no después.',
      LUZ_DEL_SUR: 'Cuando las condiciones de campo difieren del proyecto, el supervisor lo identifica y lo consulta con nosotros antes de ejecutar, no después.',
      JEFE_SECCION: 'Contrasta las condiciones reales del campo con el alcance, planos, croquis, especificaciones técnicas y requisitos del cliente.',
      JEFE_DEPARTAMENTO: 'Contrasta las condiciones reales del campo con el alcance, planos, croquis, especificaciones técnicas y requisitos del cliente.'
    }
  },
  {
    id: 3,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica que la SST cuente con la documentación completa, vigente y admisible antes de iniciar los trabajos.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Cuando llegamos al frente, la SST tiene la documentación necesaria para iniciar; no nos quedamos esperando por papeles.',
      JEFE_SECCION: 'Verifica que la SST cuente con la documentación completa, vigente y admisible antes de iniciar los trabajos.',
      JEFE_DEPARTAMENTO: 'Verifica que la SST cuente con la documentación completa, vigente y admisible antes de iniciar los trabajos.'
    }
  },
  {
    id: 4,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'CALIDAD',
    descripcion: 'Identifica oportunamente interferencias, accesos restringidos, riesgos del entorno, condiciones climáticas u otros obstáculos que puedan afectar la ejecución.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'El supervisor advierte a tiempo las interferencias, accesos restringidos, riesgos del entorno o condiciones de clima que afectan el trabajo, antes de que nos frenen en campo.',
      COORD_CONTRATISTA: 'El supervisor anticipa las interferencias, accesos restringidos o riesgos del entorno y los coordina con nosotros con tiempo.',
      LUZ_DEL_SUR: 'El supervisor advierte con anticipación las interferencias o restricciones del entorno que afectan el proyecto y las coordina con nosotros.',
      JEFE_SECCION: 'Identifica oportunamente interferencias, accesos restringidos, riesgos del entorno, condiciones climáticas u otros obstáculos que puedan afectar la ejecución.',
      JEFE_DEPARTAMENTO: 'Identifica oportunamente interferencias, accesos restringidos, riesgos del entorno, condiciones climáticas u otros obstáculos que puedan afectar la ejecución.'
    }
  },

  // 5-10: PLANIFICACIÓN Y PREPARACIÓN
  {
    id: 5,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Programa las actividades y distribuye las SST de acuerdo con las prioridades operativas, los plazos comprometidos, la criticidad de los trabajos y la capacidad disponible.',
    rolesObservadores: ['JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      JEFE_SECCION: 'Programa las actividades y distribuye las SST de acuerdo con las prioridades operativas, los plazos comprometidos, la criticidad de los trabajos y la capacidad disponible.',
      JEFE_DEPARTAMENTO: 'Programa las actividades y distribuye las SST de acuerdo con las prioridades operativas, los plazos comprometidos, la criticidad de los trabajos y la capacidad disponible.'
    }
  },
  {
    id: 6,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Asigna o reasigna cuadrillas, frentes de trabajo y recursos de supervisión de acuerdo con la carga operativa y la criticidad de las actividades.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'La asignación de mi cuadrilla a los frentes es clara y tiene sentido con la carga de trabajo; no nos cambian de frente sobre la marcha sin una razón explicada.',
      JEFE_SECCION: 'Asigna o reasigna cuadrillas, frentes de trabajo y recursos de supervisión de acuerdo con la carga operativa y la criticidad de las actividades.',
      JEFE_DEPARTAMENTO: 'Asigna o reasigna cuadrillas, frentes de trabajo y recursos de supervisión de acuerdo con la carga operativa y la criticidad de las actividades.'
    }
  },
  {
    id: 7,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'CALIDAD',
    descripcion: 'Verifica anticipadamente la disponibilidad, cantidad, condición y especificación de los materiales requeridos para ejecutar el trabajo.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Cuando llegamos al frente, los materiales están disponibles, en la cantidad y con la especificación que la tarea requiere.',
      COORD_CONTRATISTA: 'El supervisor coordina con anticipación la disponibilidad y la especificación de los materiales; el trabajo no se detiene por materiales que debió prever.',
      JEFE_SECCION: 'Verifica anticipadamente la disponibilidad, cantidad, condición y especificación de los materiales requeridos para ejecutar el trabajo.',
      JEFE_DEPARTAMENTO: 'Verifica anticipadamente la disponibilidad, cantidad, condición y especificación de los materiales requeridos para ejecutar el trabajo.'
    }
  },
  {
    id: 8,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica que los equipos, herramientas, vehículos, maquinaria y recursos especiales requeridos se encuentren disponibles, operativos y en condiciones seguras.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Los equipos, herramientas y vehículos que necesitamos están disponibles y en condiciones seguras antes de empezar.',
      JEFE_SECCION: 'Verifica que los equipos, herramientas, vehículos, maquinaria y recursos especiales requeridos se encuentren disponibles, operativos y en condiciones seguras.',
      JEFE_DEPARTAMENTO: 'Verifica que los equipos, herramientas, vehículos, maquinaria y recursos especiales requeridos se encuentren disponibles, operativos y en condiciones seguras.'
    }
  },
  {
    id: 9,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Gestiona con anticipación los permisos, resguardos, apoyo policial, prevención vial, accesos, maquinaria u otros recursos necesarios para ejecutar el trabajo de forma segura y continua.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Los permisos, resguardos, apoyo policial o accesos están gestionados antes de iniciar; no paralizamos el trabajo por falta de alguno de ellos.',
      COORD_CONTRATISTA: 'Los permisos, resguardos, apoyo policial y accesos están gestionados antes del inicio; no paralizamos por falta de alguno de ellos.',
      JEFE_SECCION: 'Gestiona con anticipación los permisos, resguardos, apoyo policial, prevención vial, accesos, maquinaria u otros recursos necesarios para ejecutar el trabajo de forma segura y continua.',
      JEFE_DEPARTAMENTO: 'Gestiona con anticipación los permisos, resguardos, apoyo policial, prevención vial, accesos, maquinaria u otros recursos necesarios para ejecutar el trabajo de forma segura y continua.'
    }
  },
  {
    id: 10,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Identifica actividades críticas y establece medidas preventivas, coordinaciones o reprogramaciones para evitar impactos en seguridad, calidad, plazo o continuidad del servicio.',
    rolesObservadores: ['JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      JEFE_SECCION: 'Identifica actividades críticas y establece medidas preventivas, coordinaciones o reprogramaciones para evitar impactos en seguridad, calidad, plazo o continuidad del servicio.',
      JEFE_DEPARTAMENTO: 'Identifica actividades críticas y establece medidas preventivas, coordinaciones o reprogramaciones para evitar impactos en seguridad, calidad, plazo o continuidad del servicio.'
    }
  },

  // 11-16: SUPERVISIÓN Y EJECUCIÓN EN CAMPO
  {
    id: 11,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'HABILIDADES_BLANDAS',
    descripcion: 'Realiza y registra la Instrucción Previa en Campo, comunicando las tareas, riesgos, controles, responsabilidades y cambios de condición al equipo.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'El supervisor realiza la Instrucción Previa en Campo con mi cuadrilla: nos explica las tareas, los riesgos, los controles y quién hace qué, y nos avisa cuando cambian las condiciones.',
      COORD_CONTRATISTA: 'El supervisor realiza y registra la Instrucción Previa en Campo con nuestras cuadrillas antes de iniciar cada actividad.',
      JEFE_SECCION: 'Realiza y registra la Instrucción Previa en Campo, comunicando las tareas, riesgos, controles, responsabilidades y cambios de condición al equipo.',
      JEFE_DEPARTAMENTO: 'Realiza y registra la Instrucción Previa en Campo, comunicando las tareas, riesgos, controles, responsabilidades y cambios de condición al equipo.'
    }
  },
  {
    id: 12,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica antes y durante la ejecución el uso correcto de EPP y el cumplimiento de los controles de seguridad establecidos.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Durante el trabajo, el supervisor verifica el uso del EPP y los controles de seguridad, y corrige en el momento si algo no está bien.',
      COORD_CONTRATISTA: 'El supervisor verifica el EPP y los controles de seguridad de nuestro personal antes y durante la ejecución, y corrige cuando corresponde.',
      JEFE_SECCION: 'Verifica antes y durante la ejecución el uso correcto de EPP y el cumplimiento de los controles de seguridad establecidos.',
      JEFE_DEPARTAMENTO: 'Verifica antes y durante la ejecución el uso correcto de EPP y el cumplimiento de los controles de seguridad establecidos.'
    }
  },
  {
    id: 13,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica que la zona de trabajo cuente con señalización, delimitación y condiciones adecuadas para proteger a trabajadores, peatones, terceros y tránsito.',
    rolesObservadores: ['CAPATAZ', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'El supervisor exige y verifica que la zona de trabajo esté señalizada y delimitada antes de que empecemos, y que se mantenga así durante la tarea.',
      LUZ_DEL_SUR: 'Cuando visito el frente, la zona de trabajo está señalizada y delimitada de modo que protege a terceros, peatones y tránsito.',
      JEFE_SECCION: 'Verifica que la zona de trabajo cuente con señalización, delimitación y condiciones adecuadas para proteger a trabajadores, peatones, terceros y tránsito.',
      JEFE_DEPARTAMENTO: 'Verifica que la zona de trabajo cuente con señalización, delimitación y condiciones adecuadas para proteger a trabajadores, peatones, terceros y tránsito.'
    }
  },
  {
    id: 14,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'CALIDAD',
    descripcion: 'Verifica que el personal y los contratistas cuenten con autorizaciones, identificación vigente, competencias y requisitos documentarios aplicables antes de ejecutar actividades.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'El supervisor verifica que todo el personal que ingresa al frente tenga autorización e identificación vigente antes de ejecutar.',
      JEFE_SECCION: 'Verifica que el personal y los contratistas cuenten con autorizaciones, identificación vigente, competencias y requisitos documentarios aplicables antes de ejecutar actividades.',
      JEFE_DEPARTAMENTO: 'Verifica que el personal y los contratistas cuenten con autorizaciones, identificación vigente, competencias y requisitos documentarios aplicables antes de ejecutar actividades.'
    }
  },
  {
    id: 15,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'CALIDAD',
    descripcion: 'Supervisa directamente los momentos críticos de la actividad y verifica que el trabajo se ejecute de acuerdo con los planos, procedimientos, especificaciones técnicas y estándares del cliente.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'El supervisor está presente en los momentos críticos de la tarea y verifica que se ejecute según los planos y el procedimiento.',
      COORD_CONTRATISTA: 'El supervisor está presente en los momentos críticos de la actividad y verifica que se ejecute según los planos, procedimientos y estándares del cliente.',
      LUZ_DEL_SUR: 'Los trabajos se ejecutan de acuerdo con los planos, las especificaciones y los estándares de Luz del Sur; las desviaciones son excepcionales y están justificadas.',
      JEFE_SECCION: 'Supervisa directamente los momentos críticos de la actividad y verifica que el trabajo se ejecute de acuerdo con los planos, procedimientos, especificaciones técnicas y estándares del cliente.',
      JEFE_DEPARTAMENTO: 'Supervisa directamente los momentos críticos de la actividad y verifica que el trabajo se ejecute de acuerdo con los planos, procedimientos, especificaciones técnicas y estándares del cliente.'
    }
  },
  {
    id: 16,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'HABILIDADES_BLANDAS',
    descripcion: 'Brinda orientación técnica clara al capataz y a la cuadrilla, resuelve consultas y corrige oportunamente prácticas que puedan generar riesgos, retrabajos o incumplimientos.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Cuando tengo una duda técnica, el supervisor me da una orientación clara y oportuna; si algo se está haciendo mal, lo corrige explicando por qué.',
      COORD_CONTRATISTA: 'El supervisor orienta técnicamente a nuestros capataces y corrige las prácticas a tiempo, con claridad y sin generar retrabajos evitables.',
      JEFE_SECCION: 'Brinda orientación técnica clara al capataz y a la cuadrilla, resuelve consultas y corrige oportunamente prácticas que puedan generar riesgos, retrabajos o incumplimientos.',
      JEFE_DEPARTAMENTO: 'Brinda orientación técnica clara al capataz y a la cuadrilla, resuelve consultas y corrige oportunamente prácticas que puedan generar riesgos, retrabajos o incumplimientos.'
    }
  },

  // 17-20: GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE
  {
    id: 17,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'SEGURIDAD',
    descripcion: 'Identifica, registra y comunica actos o condiciones subestándares; realiza inspecciones y observaciones preventivas y verifica la aplicación de Toma 5 y ALERT.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'El supervisor observa y corrige los actos o condiciones subestándar en el frente, y verifica que hagamos la Toma 5 y el ALERT.',
      JEFE_SECCION: 'Identifica, registra y comunica actos o condiciones subestándares; realiza inspecciones y observaciones preventivas y verifica la aplicación de Toma 5 y ALERT.',
      JEFE_DEPARTAMENTO: 'Identifica, registra y comunica actos o condiciones subestándares; realiza inspecciones y observaciones preventivas y verifica la aplicación de Toma 5 y ALERT.'
    }
  },
  {
    id: 18,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'SEGURIDAD',
    descripcion: 'Paraliza el trabajo ante una condición de riesgo inminente, comunica la situación a la línea de mando y verifica la corrección antes de autorizar el reinicio.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Ante una condición de riesgo inminente, el supervisor detiene el trabajo y no autoriza reiniciar hasta que se corrige.',
      COORD_CONTRATISTA: 'Ante una condición de riesgo inminente, el supervisor paraliza el trabajo, lo comunica y verifica la corrección antes de autorizar el reinicio.',
      JEFE_SECCION: 'Paraliza el trabajo ante una condición de riesgo inminente, comunica la situación a la línea de mando y verifica la corrección antes de autorizar el reinicio.',
      JEFE_DEPARTAMENTO: 'Paraliza el trabajo ante una condición de riesgo inminente, comunica la situación a la línea de mando y verifica la corrección antes de autorizar el reinicio.'
    }
  },
  {
    id: 19,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'HABILIDADES_BLANDAS',
    descripcion: 'Gestiona cambios, interferencias, replanteos, contingencias y restricciones durante la ejecución; evalúa su impacto, obtiene las autorizaciones requeridas y registra las decisiones tomadas.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: 'Cuando surge un cambio o un imprevisto en campo, el supervisor lo gestiona y nos da una indicación clara; no quedamos improvisando ni esperando.',
      COORD_CONTRATISTA: 'Ante cambios, replanteos o contingencias, el supervisor evalúa el impacto, obtiene las autorizaciones necesarias y nos comunica la decisión con registro.',
      LUZ_DEL_SUR: 'Ante replanteos o cambios, el supervisor evalúa el impacto, solicita nuestra autorización y deja registro de lo acordado.',
      JEFE_SECCION: 'Gestiona cambios, interferencias, replanteos, contingencias y restricciones durante la ejecución; evalúa su impacto, obtiene las autorizaciones requeridas y registra las decisiones tomadas.',
      JEFE_DEPARTAMENTO: 'Gestiona cambios, interferencias, replanteos, contingencias y restricciones durante la ejecución; evalúa su impacto, obtiene las autorizaciones requeridas y registra las decisiones tomadas.'
    }
  },
  {
    id: 20,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'OBJETIVOS',
    descripcion: 'Da seguimiento al avance, indicadores, observaciones y compromisos de cierre, asegurando la conformidad técnica, ambiental, documentaria y económica de la SST.',
    rolesObservadores: ['COORD_CONTRATISTA', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      COORD_CONTRATISTA: 'El supervisor hace seguimiento al avance y a las observaciones de cierre con nosotros; la SST se cierra con conformidad técnica y documentaria, sin pendientes que aparezcan después.',
      LUZ_DEL_SUR: 'La SST se cierra con conformidad técnica y documentaria; las observaciones y los pendientes se atienden en el plazo acordado.',
      JEFE_SECCION: 'Da seguimiento al avance, indicadores, observaciones y compromisos de cierre, asegurando la conformidad técnica, ambiental, documentaria y económica de la SST.',
      JEFE_DEPARTAMENTO: 'Da seguimiento al avance, indicadores, observaciones y compromisos de cierre, asegurando la conformidad técnica, ambiental, documentaria y económica de la SST.'
    }
  },
];

export const SUBCONTRATISTAS_COMUNES = [
  'ALIHCOM BUILD SAC',
  'ALVIMAR',
  'CAMPOS LATAM',
  'COSORCIO CARTER RENSA',
  'ENCOSSA SAC',
  'EOS',
  'GRUCOIN S.A.C.',
  'GRUPO ACUARIUS',
  'GRUPO ENERGIA',
  'KIMSA',
  'NATURAL GAS COMPANY',
  'PRODUCSA',
  'OTRA EMPRESA SUBCONTRATISTA',
];

export const CLAVES_ACCESO = {
  // Capataces y Coordinadores ingresan con su DNI (8 dígitos)
  CAPATAZ: 'DNI', 
  COORD_CONTRATISTA: 'DNI',
  // Luz del Sur
  LUZ_DEL_SUR: 'LDS2026',
  // 3 Jefaturas de Sección
  JEFE_SECCION_1: 'SECCION1',
  JEFE_SECCION_2: 'SECCION2',
  JEFE_SECCION_3: 'SECCION3',
  JEFE_SECCION_GENERAL: 'JEFE2026',
  // Jefe de Departamento (Edder)
  JEFE_DEPARTAMENTO_EDDER: 'EDDER2026',
};
