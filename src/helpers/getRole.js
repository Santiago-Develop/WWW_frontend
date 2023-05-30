export const getRole = (state) => {
  const roles_label = {
    ADMIN: "Administrador",
    MESSENGER: "Mensajero",
    CUSTOMER: "Cliente",
  };

  return roles_label[state];
};
