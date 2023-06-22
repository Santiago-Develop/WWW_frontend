import { ROLES } from "../utils/enums";
import { backUpLocalStorage } from "./backUpLocalStorage";
import { setLocalStorage } from "./setLocalStorage";

const API_URL = import.meta.env.VITE_API_URL;

export const getAvailableServices = async (type, setData, setLoading, isSearch = null) => {
  const requestOptions = {
    method: "GET",
  };

  const id = parseInt(localStorage.getItem("id"));

  try {
    const res = await fetch(API_URL + "api/available_services/" + id + "/", requestOptions);
    let { data } = await res.json();

    data = data.filter((service) => service.updates[service.updates.length - 1].state == 1);

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
