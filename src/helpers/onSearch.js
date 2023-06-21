import { TRANSPORTS } from "../utils/enums";

export const onSearch = (event, setData, type = "customers") => {
  let value = event.target.value;
  let data = JSON.parse(localStorage.getItem(type));
  console.log("🚀 ~ file: onSearch.js:4 ~ onSearch ~ data:", data)
  let result = [];

  if (type == "customers" || type == "messengers") {
    result = data.filter(
      (user) =>
        user.username.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.phone.toString().toLowerCase().includes(value.toLowerCase()) ||
        user.documentType.toLowerCase().includes(value.toLowerCase()) ||
        user.documentNumber.toLowerCase().includes(value.toLowerCase()) ||
        user.country.toLowerCase().includes(value.toLowerCase()) ||
        user.department.toLowerCase().includes(value.toLowerCase()) ||
        user.city.toLowerCase().includes(value.toLowerCase()),
    );
  } else if (type == "services" || type == "available_services") {
    result = data.filter(
      (service) =>
        service?.code?.toLowerCase().includes(value.toLowerCase()) ||
        service?.amount?.toString().toLowerCase().includes(value.toLowerCase()) ||
        service?.source_office?.toLowerCase().includes(value.toLowerCase()) ||
        service?.destination_office?.toLowerCase().includes(value.toLowerCase()) ||
        service?.description?.toLowerCase().includes(value.toLowerCase()) ||
        TRANSPORTS[service.transport].toLowerCase().includes(value.toLowerCase())
    );
  } else if(type == "offices") {
    result = data.filter(
      (office) =>
        office.name.toLowerCase().includes(value.toLowerCase()) ||
        office.address.toLowerCase().includes(value.toLowerCase()) ||
        office.phone.toLowerCase().toString().includes(value.toLowerCase()),
    );
  }

  setData(result);
};
