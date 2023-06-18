import { headers } from "../utils/headers";

export const createUpdate = async (
  { service, description = null, photo = null, state = null },
  take = false,
) => {

  const API_URL = import.meta.env.VITE_API_URL;

  const id = parseInt(localStorage.getItem("id"));
  const name = localStorage.getItem("name");

  const body = {
    service,
    state: take ? 2 : state,
    description: take ? `El servicio fue tomado por: ${name}` : description,
    messenger: id,
    photo,
  };

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  };

  try {
    await fetch(API_URL + "api/updates/", requestOptions);
  } catch (error) {
    console.log("error: ", error);
  }
};
