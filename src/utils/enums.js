export const ROLES = Object.freeze({
  ADMIN: "ADMIN",
  MESSENGER: "MESSENGER",
  CUSTOMER: "CUSTOMER",
});

export const ROLES_NAME = Object.freeze({
  ADMIN: "Administrador",
  MESSENGER: "Mensajero",
  CUSTOMER: "Cliente",
});

export const TRANSPORTS = Object.freeze({
  CAR: "Automóvil",
  MOTORCYCLE: "Motocicleta",
  TRUCK: "Camión",
});

export const STATES = Object.freeze({
  1: "Requerido",
  2: "Asignado",
  3: "Recogido",
  4: "Entregado",
});

export const ICONS = Object.freeze({
  1: "SmileOutlined",
  2: "NotificationOutlined",
  3: "ClockCircleOutlined",
  4: "CheckCircleOutlined",
});

export const REPORT_COLUMNS = Object.freeze([
  {
    title: "Código",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Cantidad",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Transporte",
    dataIndex: "transport",
    key: "transport",
  },
  {
    title: "Trayecto",
    dataIndex: "journey",
    key: "journey",
  },
  {
    title: "Cliente",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Mensajero",
    dataIndex: "messenger",
    key: "messenger",
  },
  {
    title: "Estado actual",
    dataIndex: "status",
    key: "status",
  },
]);
