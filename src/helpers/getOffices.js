import { backUpLocalStorage } from "./backUpLocalStorage";
import { setLocalStorage } from "./setLocalStorage";

export const getOffices = async (setLoading, setData, type) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const requestOptions = {
    method: "GET",
  };

  const id = localStorage.getItem("id");

  try {
    const res = await fetch(API_URL + "api/user_offices/" + id + "/", requestOptions);
    let data = await res.json();
    setLoading(true);
    setData(data);
    const { _id, _name, _role, _urlImg, _token } = backUpLocalStorage();
    setLocalStorage(_id, _name, _role, _urlImg, _token);
    localStorage.setItem(type, JSON.stringify(data));
  } catch (error) {
    console.log("error: ", error);
  }
};
