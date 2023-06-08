import { backUpLocalStorage } from "./backUpLocalStorage";
import { setLocalStorage } from "./setLocalStorage";

const API_URL = import.meta.env.VITE_API_URL;

export const getServices = async (type, setData, setLoading, isSearch = null) => {
  const requestOptions = {
    method: "GET",
  };

  try {
    const res = await fetch(API_URL + "api/services/", requestOptions);
    let data = await res.json();
    console.log("🚀 ~ file: getServices.js:12 ~ getServices ~ data:", data);
    // data = data.filter((user) => user.role === role);
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
