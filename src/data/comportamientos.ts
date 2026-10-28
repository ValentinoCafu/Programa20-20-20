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

export const COMPORTAMIENTOS_SUPERVISOR: Comportamiento[] = [
  // 1-4: INICIO Y VALIDACIÓN TÉCNICA
  {
    id: 1,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'OBJETIVOS',
    descripcion: 'Realiza la inspección previa del frente de trabajo antes de autorizar el inicio de las actividades.',
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      COORD_CONTRATISTA: '¿El supervisor inspecciona y valida previamente con nosotros el frente de trabajo antes de autorizar el inicio de las actividades?',
      JEFE_SECCION: 'Realiza la inspección previa del frente de trabajo antes de autorizar el inicio de las actividades.',
      JEFE_DEPARTAMENTO: 'Realiza la inspección previa del frente de trabajo antes de autorizar el inicio de las actividades.'
    }
  },
  {
    id: 2,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'CALIDAD',
    descripcion: 'Contrasta las condiciones reales del campo con el alcance, planos, croquis, especificaciones técnicas y requisitos del cliente.',
    rolesObservadores: ['LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      LUZ_DEL_SUR: '¿El supervisor verifica que lo ejecutado en terreno coincida estrictamente con los planos, croquis y especificaciones técnicas normadas por Luz del Sur?',
      JEFE_SECCION: 'Contrasta las condiciones reales del campo con el alcance, planos, croquis, especificaciones técnicas y requisitos del cliente.',
      JEFE_DEPARTAMENTO: 'Contrasta las condiciones reales del campo con el alcance, planos, croquis, especificaciones técnicas y requisitos del cliente.'
    }
  },
  {
    id: 3,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica que la SST cuente con la documentación completa, vigente y admisible antes de iniciar los trabajos.',
    rolesObservadores: ['LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      LUZ_DEL_SUR: '¿El supervisor fiscaliza que la cuadrilla cuente con toda la documentación de SST (permisos, AST, cartas de pase) completa, vigente y conforme a los estándares LDS?',
      JEFE_SECCION: 'Verifica que la SST cuente con la documentación completa, vigente y admisible antes de iniciar los trabajos.',
      JEFE_DEPARTAMENTO: 'Verifica que la SST cuente con la documentación completa, vigente y admisible antes de iniciar los trabajos.'
    }
  },
  {
    id: 4,
    bloque: 'INICIO Y VALIDACIÓN TÉCNICA',
    criterio: 'CALIDAD',
    descripcion: 'Identifica oportunamente interferencias, accesos restringidos, riesgos del entorno, condiciones climáticas u otros obstáculos que puedan afectar la ejecución.',
    rolesObservadores: ['LUZ_DEL_SUR', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      COORD_CONTRATISTA: '¿El supervisor detecta a tiempo interferencias, restricciones de acceso o riesgos del entorno para coordinar soluciones conjuntas antes de que afecten el avance?',
      LUZ_DEL_SUR: '¿El supervisor identifica y nos alerta anticipadamente sobre interferencias con otras redes o condiciones del entorno que puedan impactar la infraestructura de LDS?',
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
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      COORD_CONTRATISTA: '¿El supervisor programa y distribuye las órdenes de trabajo con anticipación clara, considerando las prioridades, plazos y recursos reales acordados con nuestra contrata?',
      JEFE_SECCION: 'Programa las actividades y distribuye las SST de acuerdo con las prioridades operativas, los plazos comprometidos, la criticidad de los trabajos y la capacidad disponible.',
      JEFE_DEPARTAMENTO: 'Programa las actividades y distribuye las SST de acuerdo con las prioridades operativas, los plazos comprometidos, la criticidad de los trabajos y la capacidad disponible.'
    }
  },
  {
    id: 6,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Asigna o reasigna cuadrillas, frentes de trabajo y recursos de supervisión de acuerdo con la carga operativa y la criticidad de las actividades.',
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      COORD_CONTRATISTA: '¿El supervisor coordina de forma equitativa y oportuna la asignación o movimiento de cuadrillas según la criticidad y demanda de los frentes de trabajo?',
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
      CAPATAZ: '¿El supervisor revisa con nosotros (capataz/cuadrilla) que tengamos los materiales correctos, completos y en buen estado antes de empezar la faena?',
      COORD_CONTRATISTA: '¿El supervisor valida con nosotros la disponibilidad, despacho y especificación técnica de los materiales para que las cuadrillas no queden desabastecidas?',
      JEFE_SECCION: 'Verifica anticipadamente la disponibilidad, cantidad, condición y especificación de los materiales requeridos para ejecutar el trabajo.',
      JEFE_DEPARTAMENTO: 'Verifica anticipadamente la disponibilidad, cantidad, condición y especificación de los materiales requeridos para ejecutar el trabajo.'
    }
  },
  {
    id: 8,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica que los equipos, herramientas, vehículos, maquinaria y recursos especiales requeridos se encuentren disponibles, operativos y en condiciones seguras.',
    rolesObservadores: ['CAPATAZ', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: '¿El supervisor inspecciona que nuestras herramientas, equipos y vehículos de trabajo estén operativos, con check-list al día y en condiciones seguras?',
      COORD_CONTRATISTA: '¿El supervisor audita la operatividad y estado de mantenimiento de los equipos, herramientas y vehículos asignados a nuestros frentes?',
      JEFE_SECCION: 'Verifica que los equipos, herramientas, vehículos, maquinaria y recursos especiales requeridos se encuentren disponibles, operativos y en condiciones seguras.',
      JEFE_DEPARTAMENTO: 'Verifica que los equipos, herramientas, vehículos, maquinaria y recursos especiales requeridos se encuentren disponibles, operativos y en condiciones seguras.'
    }
  },
  {
    id: 9,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Gestiona con anticipación los permisos, resguardos, apoyo policial, prevención vial, accesos, maquinaria u otros recursos necesarios para ejecutar el trabajo de forma segura y continua.',
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      COORD_CONTRATISTA: '¿El supervisor gestiona con la debida anticipación los permisos municipales, planes de desvío vial, apoyos policiales o accesos necesarios para no trabar el avance?',
      JEFE_SECCION: 'Gestiona con anticipación los permisos, resguardos, apoyo policial, prevención vial, accesos, maquinaria u otros recursos necesarios para ejecutar el trabajo de forma segura y continua.',
      JEFE_DEPARTAMENTO: 'Gestiona con anticipación los permisos, resguardos, apoyo policial, prevención vial, accesos, maquinaria u otros recursos necesarios para ejecutar el trabajo de forma segura y continua.'
    }
  },
  {
    id: 10,
    bloque: 'PLANIFICACIÓN Y PREPARACIÓN',
    criterio: 'OBJETIVOS',
    descripcion: 'Identifica actividades críticas y establece medidas preventivas, coordinaciones o reprogramaciones para evitar impactos en seguridad, calidad, plazo o continuidad del servicio.',
    rolesObservadores: ['COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      COORD_CONTRATISTA: '¿El supervisor identifica con anticipación maniobras o empalmes de alta criticidad y coordina planes preventivos para no comprometer los plazos ni el servicio?',
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
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: '¿El supervisor participa y verifica que yo (el capataz) realice la Charla de 5 Minutos / Instrucción Previa, reforzando los riesgos críticos con mi cuadrilla?',
      JEFE_SECCION: 'Realiza y registra la Instrucción Previa en Campo, comunicando las tareas, riesgos, controles, responsabilidades y cambios de condición al equipo.',
      JEFE_DEPARTAMENTO: 'Realiza y registra la Instrucción Previa en Campo, comunicando las tareas, riesgos, controles, responsabilidades y cambios de condición al equipo.'
    }
  },
  {
    id: 12,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica antes y durante la ejecución el uso correcto de EPP y el cumplimiento de los controles de seguridad establecidos.',
    rolesObservadores: ['CAPATAZ', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: '¿El supervisor exige activamente en campo que todo mi personal use correctamente sus EPP (dieléctricos, barboquejo, guantes) y cumpla las normas de seguridad?',
      LUZ_DEL_SUR: '¿El supervisor de Tecsur fiscaliza rigurosamente en campo que las cuadrillas contratistas utilicen los EPP normados y cumplan las reglas de oro de seguridad?',
      JEFE_SECCION: 'Verifica antes y durante la ejecución el uso correcto de EPP y el cumplimiento de los controles de seguridad establecidos.',
      JEFE_DEPARTAMENTO: 'Verifica antes y durante la ejecución el uso correcto de EPP y el cumplimiento de los controles de seguridad establecidos.'
    }
  },
  {
    id: 13,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'SEGURIDAD',
    descripcion: 'Verifica que la zona de trabajo cuente con señalización, delimitación y condiciones adecuadas para proteger a trabajadores, peatones, terceros y tránsito.',
    rolesObservadores: ['LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      LUZ_DEL_SUR: '¿El supervisor asegura que la zona de trabajo esté correctamente cercada, con cachacos, mallas y señalización reglamentaria para evitar accidentes con terceros o peatones?',
      JEFE_SECCION: 'Verifica que la zona de trabajo cuente con señalización, delimitación y condiciones adecuadas para proteger a trabajadores, peatones, terceros y tránsito.',
      JEFE_DEPARTAMENTO: 'Verifica que la zona de trabajo cuente con señalización, delimitación y condiciones adecuadas para proteger a trabajadores, peatones, terceros y tránsito.'
    }
  },
  {
    id: 14,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'CALIDAD',
    descripcion: 'Verifica que el personal y los contratistas cuenten con autorizaciones, identificación vigente, competencias y requisitos documentarios aplicables antes de ejecutar actividades.',
    rolesObservadores: ['LUZ_DEL_SUR', 'COORD_CONTRATISTA', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      COORD_CONTRATISTA: '¿El supervisor valida con nosotros que el personal técnico habilitado cuente con sus fotochecks, SCTR, autorizaciones y calificaciones vigentes?',
      LUZ_DEL_SUR: '¿El supervisor verifica que los trabajadores en campo cuenten con la fotocredencial, SCTR y competencias técnicas exigidas para intervenir redes de LDS?',
      JEFE_SECCION: 'Verifica que el personal y los contratistas cuenten con autorizaciones, identificación vigente, competencias y requisitos documentarios aplicables antes de ejecutar actividades.',
      JEFE_DEPARTAMENTO: 'Verifica que el personal y los contratistas cuenten con autorizaciones, identificación vigente, competencias y requisitos documentarios aplicables antes de ejecutar actividades.'
    }
  },
  {
    id: 15,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'CALIDAD',
    descripcion: 'Supervisa directamente los momentos críticos de la actividad y verifica que el trabajo se ejecute de acuerdo con los planos, procedimientos, especificaciones técnicas y estándares del cliente.',
    rolesObservadores: ['LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      LUZ_DEL_SUR: '¿El supervisor se encuentra presente en los hitos de mayor criticidad (empalmes, tendido, maniobras) asegurando que se cumpla la calidad técnica requerida por LDS?',
      JEFE_SECCION: 'Supervisa directamente los momentos críticos de la actividad y verifica que el trabajo se ejecute de acuerdo con los planos, procedimientos, especificaciones técnicas y estándares del cliente.',
      JEFE_DEPARTAMENTO: 'Supervisa directamente los momentos críticos de la actividad y verifica que el trabajo se ejecute de acuerdo con los planos, procedimientos, especificaciones técnicas y estándares del cliente.'
    }
  },
  {
    id: 16,
    bloque: 'SUPERVISIÓN Y EJECUCIÓN EN CAMPO',
    criterio: 'HABILIDADES_BLANDAS',
    descripcion: 'Brinda orientación técnica clara al capataz y a la cuadrilla, resuelve consultas y corrige oportunamente prácticas que puedan generar riesgos, retrabajos o incumplimientos.',
    rolesObservadores: ['CAPATAZ', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: '¿El supervisor me brinda explicaciones técnicas claras, me apoya si tengo dudas sobre el trabajo y me orienta con respeto para evitar rehacer tareas?',
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
      CAPATAZ: '¿El supervisor nos ayuda a detectar condiciones peligrosas en el terreno y revisa que apliquemos la herramienta Toma 5 antes de empezar tareas de riesgo?',
      JEFE_SECCION: 'Identifica, registra y comunica actos o condiciones subestándares; realiza inspecciones y observaciones preventivas y verifica la aplicación de Toma 5 y ALERT.',
      JEFE_DEPARTAMENTO: 'Identifica, registra y comunica actos o condiciones subestándares; realiza inspecciones y observaciones preventivas y verifica la aplicación de Toma 5 y ALERT.'
    }
  },
  {
    id: 18,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'SEGURIDAD',
    descripcion: 'Paraliza el trabajo ante una condición de riesgo inminente, comunica la situación a la línea de mando y verifica la corrección antes de autorizar el reinicio.',
    rolesObservadores: ['CAPATAZ', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      CAPATAZ: '¿Si existe un riesgo grave o falta de resguardo seguro, el supervisor detiene la labor inmediatamente sin presionarnos hasta que la condición sea corregida?',
      LUZ_DEL_SUR: '¿El supervisor demuestra firmeza para paralizar inmediatamente los trabajos si detecta condiciones de riesgo inminente o desvíos graves a las normas de seguridad?',
      JEFE_SECCION: 'Paraliza el trabajo ante una condición de riesgo inminente, comunica la situación a la línea de mando y verifica la corrección antes de autorizar el reinicio.',
      JEFE_DEPARTAMENTO: 'Paraliza el trabajo ante una condición de riesgo inminente, comunica la situación a la línea de mando y verifica la corrección antes de autorizar el reinicio.'
    }
  },
  {
    id: 19,
    bloque: 'GESTIÓN DE SEGURIDAD, CONTROL Y CIERRE',
    criterio: 'HABILIDADES_BLANDAS',
    descripcion: 'Gestiona cambios, interferencias, replanteos, contingencias y restricciones durante la ejecución; evalúa su impacto, obtiene las autorizaciones requeridas y registra las decisiones tomadas.',
    rolesObservadores: ['COORD_CONTRATISTA', 'LUZ_DEL_SUR', 'JEFE_SECCION', 'JEFE_DEPARTAMENTO'],
    descPorRol: {
      COORD_CONTRATISTA: '¿El supervisor gestiona con rapidez y formalidad los replanteos o cambios de trazo en campo para que la cuadrilla no sufra paradas operativas?',
      LUZ_DEL_SUR: '¿El supervisor nos consulta y sustenta técnicamente los replanteos o modificaciones al proyecto antes de autorizar su ejecución en campo?',
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
      COORD_CONTRATISTA: '¿El supervisor efectúa con nosotros el cierre ordenado de la obra, levantando observaciones técnicas y documentarias para la valorización y liquidación oportuna?',
      LUZ_DEL_SUR: '¿El supervisor entrega las obras con la documentación conforme, levantamiento oportuno de observaciones y la calidad final lista para recepción de Luz del Sur?',
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
