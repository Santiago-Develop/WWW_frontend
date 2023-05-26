export const getRole = (state) => {
  const roles_label = {
    ADMIN: 'Administrador',
    MESSAGER: 'Mensajero',
    CUSTOMER: 'Cliente'
  }

  return roles_label[state]
}
