export const onSearch = (event, setData, type = 'customers') => {
  let value = event.target.value
  let data = JSON.parse(localStorage.getItem(type))
  let result = []

  if (type !== 'offices') {
    result = data.filter(
      (user) =>
        user.username.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.phone.toString().toLowerCase().includes(value.toLowerCase()) ||
        user.documentType.toLowerCase().includes(value.toLowerCase()) ||
        user.documentNumber.toLowerCase().includes(value.toLowerCase()) ||
        user.country.toLowerCase().includes(value.toLowerCase()) ||
        user.department.toLowerCase().includes(value.toLowerCase()) ||
        user.city.toLowerCase().includes(value.toLowerCase())
    )
  } else {
    result = data.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.address.toLowerCase().includes(value.toLowerCase()) ||
        user.phone.toLowerCase().toString().includes(value.toLowerCase())
    )
  }

  setData(result)
}
