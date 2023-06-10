import { ROLES } from "../utils/enums";
import { backUpLocalStorage } from "./backUpLocalStorage";
import { getOffices } from "./getOffices";
import { getUpdates } from "./getUpdates";
import { setLocalStorage } from "./setLocalStorage";

const API_URL = import.meta.env.VITE_API_URL;

export const getServices = async (type, setData, setLoading, isSearch = null) => {
  const requestOptions = {
    method: "GET",
  };

  const id = parseInt(localStorage.getItem("id"));
  const role = localStorage.getItem("role");

  try {
    const res = await fetch(API_URL + "api/services/", requestOptions);
    let data = await res.json();

    if (role !== ROLES.ADMIN) {
      data = data.filter((service) => service.customer == id);
    }
    if (isSearch) {
      setData(data);
      setLoading(true);
      const { _id, _name, _role, _urlImg, _token } = backUpLocalStorage();
      setLocalStorage(_id, _name, _role, _urlImg, _token);
      localStorage.setItem(type, JSON.stringify(data));
    }
    // return data;
  } catch (error) {
    console.log("error: ", error);
  }
};
