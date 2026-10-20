export type CargoSupervisor = 'SUPERVISOR JUNIOR' | 'SUPERVISOR C' | 'SUPERVISOR B' | 'SUPERVISOR A';

export interface CentroRendimiento {
  codigo: '4070' | '4301';
  nombre: string;
}

export interface Supervisor {
  id: string;
  nombreCompleto: string;
  cargo: CargoSupervisor;
  crCodigo: '4070' | '4301';
  crNombre: string;
  activo: boolean;
}

export const CENTROS_RENDIMIENTO: Record<string, CentroRendimiento> = {
  '4070': {
    codigo: '4070',
    nombre: 'PLANIFICACION OBRAS Y MANTTO BT',
  },
  '4301': {
    codigo: '4301',
    nombre: 'OBRAS BAJA TENSION',
  },
};

export const SUPERVISORES: Supervisor[] = [
  // 4070 PLANIFICACION OBRAS Y MANTTO BT (3)
  {
    id: 'sup-01',
    nombreCompleto: 'CARDENAS YNGA MARTHA ELENA',
    cargo: 'SUPERVISOR C',
    crCodigo: '4070',
    crNombre: 'PLANIFICACION OBRAS Y MANTTO BT',
    activo: true,
  },
  {
    id: 'sup-02',
    nombreCompleto: 'MELGAREJO DIAZ STEVEN ALFREDO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4070',
    crNombre: 'PLANIFICACION OBRAS Y MANTTO BT',
    activo: true,
  },
  {
    id: 'sup-03',
    nombreCompleto: 'YATACO NAVARRO KEWIN HAROLD STEVE',
    cargo: 'SUPERVISOR C',
    crCodigo: '4070',
    crNombre: 'PLANIFICACION OBRAS Y MANTTO BT',
    activo: true,
  },

  // 4301 OBRAS BAJA TENSION (21)
  {
    id: 'sup-04',
    nombreCompleto: 'AYMA CHAUPIS EDSON LEONARDO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-05',
    nombreCompleto: 'YAPU ABARCA LARRY ERICK',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-06',
    nombreCompleto: 'RAMOS AUQUE LUIS ALBERTO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-07',
    nombreCompleto: 'DIBURCIO RAMOS MARCO ANTONIO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-08',
    nombreCompleto: 'HERMITANO LEON SMITH FRANCKLIN',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-09',
    nombreCompleto: 'QUISPE ALFARO BLADIMIRO',
    cargo: 'SUPERVISOR B',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-10',
    nombreCompleto: 'VASCO MALLMA DENIS MARXS',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-11',
    nombreCompleto: 'HERNANDEZ LOPEZ FREDDY ANTONIO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-12',
    nombreCompleto: 'VALLEJOS HOLGUIN CESAR ELOY',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-13',
    nombreCompleto: 'ESPIRILLA CACERES MARCO ANTONIO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-14',
    nombreCompleto: 'VALENCIA AZULA SAMUEL ALEJANDRO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-15',
    nombreCompleto: 'ELIAS MANRIQUE ALEXANDER ALEXIS',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-16',
    nombreCompleto: 'DOMINGUEZ RAMIREZ HENRY',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-17',
    nombreCompleto: 'CHIRITO MILLONES VICTOR JUAN RODOLFO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-18',
    nombreCompleto: 'REANO LEON HANS ERNESTO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-19',
    nombreCompleto: 'ARANGO PENA RAUL ROLANDO',
    cargo: 'SUPERVISOR JUNIOR',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-20',
    nombreCompleto: 'VILLA DIAZ JOEL ALFREDO',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-21',
    nombreCompleto: 'CHILENO DIAZ ELVIS JOSEPH',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-22',
    nombreCompleto: 'QUIMPER REYNOSO IVAN',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-23',
    nombreCompleto: 'RAMIREZ QUISPE LUIS ANTONNY',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
  {
    id: 'sup-24',
    nombreCompleto: 'CARBAJAL VILLASANA JOEL',
    cargo: 'SUPERVISOR C',
    crCodigo: '4301',
    crNombre: 'OBRAS BAJA TENSION',
    activo: true,
  },
];
