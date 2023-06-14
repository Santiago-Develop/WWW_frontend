import { headers } from "../utils/headers";

export const createUpdate = async ({ service }, take = false, newState = null) => {
  console.log("🚀 ~ file: createUpdate.js:3 ~ createUpdate ~ data:", service);
  const API_URL = import.meta.env.VITE_API_URL;

  const id = parseInt(localStorage.getItem("id"));
  const description = "";
  const photo = "";
  const state = "";

  const body = {
    service,
    state: take ? 2 : newState,
    messenger: id,
  };

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  };
  console.log("🚀 ~ file: createUpdate.js:13 ~ createUpdate ~ requestOptions:", requestOptions);

  try {
    await fetch(API_URL + "api/updates/", requestOptions);
  } catch (error) {
    console.log("error: ", error);
  }
};
