import { ROLES, STATES } from "../utils/enums";
import { backUpLocalStorage } from "./backUpLocalStorage";
import { getOffices } from "./getOffices";
import { getUpdates } from "./getUpdates";
import { setLocalStorage } from "./setLocalStorage";

const API_URL = import.meta.env.VITE_API_URL;

export const getServices = async (type, setData, setLoading, isSearch = null, required = false) => {
  const requestOptions = {
    method: "GET",
  };

  const id = parseInt(localStorage.getItem("id"));
  const role = localStorage.getItem("role");

  try {
    const res = await fetch(API_URL + "api/services/", requestOptions);
    let data = await res.json();
    console.log("🚀 ~ file: getServices.js:20 ~ getServices ~ data:", data);

    if (role == ROLES.CUSTOMER) {
      data = data.filter((service) => service.customer.id == id);
    } else if (role !== ROLES.ADMIN) {
      data = required
        ? data.filter((service) => service.updates[service.updates.length - 1].state == 1)
        : data.filter((service) => service.updates[service.updates.length - 1].state !== 1);
    }

    if (isSearch) {
      setData(data);
      setLoading(true);
      const { _id, _name, _role, _urlImg, _token } = backUpLocalStorage();
      setLocalStorage(_id, _name, _role, _urlImg, _token);
      localStorage.setItem(type, JSON.stringify(data));
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
