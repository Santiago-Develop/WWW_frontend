export const onSearch = (event, setData, type = "customers") => {
  let value = event.target.value;
  let data = JSON.parse(localStorage.getItem(type));

  let result = data.filter(
    (user) =>
      user.username.includes(value) ||
      user.email.includes(value) ||
      user.phone.toString().includes(value) ||
      user.documentType.includes(value) ||
      user.documentNumber.includes(value) ||
      user.country.includes(value) ||
      user.department.includes(value) ||
      user.city.includes(value)
  );

  setData(result);
};
