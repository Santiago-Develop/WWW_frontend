import { ROLES } from "../utils/enums";

const API_URL = import.meta.env.VITE_API_URL;

export const getUpdates = async (idService) => {
  const requestOptions = {
    method: "GET",
  };

  const id = parseInt(localStorage.getItem("id"));
  const role = localStorage.getItem("role");

  try {
    const res = await fetch(API_URL + "api/updates/", requestOptions);
    let data = await res.json();
    if (role !== ROLES.ADMIN) {
      data = data.filter((service) => service.service == idService);
    }
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};
